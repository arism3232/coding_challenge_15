// Task1- Creating the Base Structure
const riskDashboard = document.getElementById('riskDashboard');
const riskForm = document.getElementById('riskForm'); // Task2- Adding Risk Items Dynamically
const increaseRiskBtn = document.getElementById('increaseRiskBtn'); // Task5- Implementing Bulk Updates
console.log("Risk Dashboard Loaded");
function addRiskItem(riskName, riskLevel, department) { // Task2- Adding Risk Items Dynamically
    const riskCard = document.createElement('div');
    riskCard.className = 'riskCard';
    // Task4- Categorizing Risks By Level
    switch (riskLevel.toLowerCase()) {
        case 'low':
            riskCard.classList.add('risk-low');
            break;
        case 'medium':
            riskCard.classList.add('risk-medium');
            break;
        case 'high':
            riskCard.classList.add('risk-high');
            break;
    }
    riskCard.innerHTML = `
    <h3>${riskName}</h3>
    <p class="riskLevel">Risk Level: ${riskLevel}</p>
    <p>Department: ${department}</p>
    <button class="resolveBtn>Resolve</button> 
    `; // Task3- Removing Risk Items
    riskCard.querySelector('.resolveBtn').addEventListener('click', function() {
        riskDashboard.removeChild(riskCard);
    })
    riskDashboard.appendChild(riskCard);
}

// Task5- Implementing Bulk Updates
function increaseRiskLevels() {
    const riskCards = document.querySelectorAll('.riskCard');
    riskCards.forEach(card => {
        const riskLevelElement = card.querySelector('.riskLevel');
        let currentLevel = riskLevelElement.textContent.replace('Risk Level: ', '');
        card.classList.remove('risk-low', 'risk-medium', 'risk-high');
        if (currentLevel === 'Low') {
            currentLevel = 'Medium';
            card.classList.add('risk-medium');
        } else if (currentLevel === 'Medium') {
            currentLevel = 'High';
            card.classList.add('risk-high');
        } else if (currentLevel === 'High') {
            card.classList.add('risk-high');   
        }
        riskLevelElement.textContent = `Risk Level: ${currentLevel}`;
    });
}

riskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const riskName = document.getElementById('riskName').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value;
    addRiskItem(riskName, riskLevel, department);
    riskForm.reset();
});
// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance"); // Clicking "Resolve" should remove this risk from the dashboard.
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR"); // Clicking "Increase Risk Levels" should change it to "Medium".