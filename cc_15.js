// Task1- Creating the Base Structure
const riskDashboard = document.getElementById('riskDashboard');
const riskForm = document.getElementById('riskForm'); // Task2- Adding Risk Items Dynamically
const increaseRiskBtn = document.getElementById('increaseRiskBtn'); // Task5- Implementing Bulk Updates
console.log("Risk Dashboard Loaded");

// Task2- Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) { // Function to add risk item
    const riskCard = document.createElement('div');
    riskCard.className = 'riskCard';

    const normalizedLevel = riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1).toLowerCase(); // For handling case variatioons

    // Task4- Categorizing Risks By Level
    switch (normalizedLevel) {
        case 'Low':
            riskCard.classList.add('risk-low');
            break;
        case 'Medium':
            riskCard.classList.add('risk-medium');
            break;
        case 'High':
            riskCard.classList.add('risk-high');
            break;
        default:
            console.warn(`Unknown risk level: ${normalizedLevel}`);
            riskCard.classList.add('risk-medium'); // Making it default
    } // Adding risk level class based on severity

    riskCard.innerHTML = `
    <h3>${riskName}</h3>
    <p class="riskLevel">Risk Level: ${normalizedLevel}</p>
    <p>Department: ${department}</p>
    <button class="resolveBtn>Resolve</button> 
    `; // ^^ Task3- Removing Risk Items ^^

    // Task6- Handling Event Propagation
    const resolveBtn = riskCard.querySelector('.resolveBtn'); // Adding eventlistener to resolveBtn
    resolveBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling up
        riskDashboard.removeChild(riskCard);
    });

    riskCard.addEventListener('click', (e) => {
        e.stopPropagation(); // Stopping propagation within card
    });
    riskDashboard.appendChild(riskCard); // Appending to dashbaord
}

// Task5- Implementing Bulk Updates
function increaseRiskLevels() {
    const riskCards = document.querySelectorAll('.riskCard');
    riskCards.forEach(card => {
        const riskLevelElement = card.querySelector('.riskLevel');
        let currentLevel = riskLevelElement.textContent.replace('Risk Level: ', '');

        card.classList.remove('risk-low', 'risk-medium', 'risk-high'); // Removing existing risk level

        switch (currentLevel) {
            case 'Low':
                currentLevel = 'Medium';
                card.classList.add('risk-medium');
                break;
            case 'Medium':
                currentLevel = 'High';
                card.classList.add('risk-high');
                break;
            case 'High':
                card.classList.add('risk-high');
                break;
        } // Updating level and applying new class

        riskLevelElement.textContent = `Risk Level: ${currentLevel}`;
    });
}

riskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Preventing form from refreshing page

    const riskName = document.getElementById('riskName').value.trim();
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value.trim(); // Getting form values

    if (riskName&& riskLevel && department) {
        addRiskItem(riskName, riskLevel, department);
        riskForm.reset();
    } else {
        console.warn('Please fill all fields');
    } // Basic validation
});

increaseRiskBtn.addEventListener('click', increaseRiskLevels); // Adding eventlistener for increase risk levels

// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance"); // Clicking "Resolve" should remove this risk from the dashboard.
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR"); // Clicking "Increase Risk Levels" should change it to "Medium".