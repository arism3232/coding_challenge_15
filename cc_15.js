// Task1- Creating the Base Structure
const riskDashboard = document.getElementById('riskDashboard');
const riskForm = document.getElementById('riskForm'); // Task2- Adding Risk Items Dynamically
console.log("Risk Dashboard Loaded");
function addRiskItem(riskName, riskLevel, department) {
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
    <p>Risk Level: ${riskLevel}</p>
    <p>Department: ${department}</p>
    <button class="resolveBtn>Resolve</button> 
    `; // Task3- Removing Risk Items
    riskCard.querySelector('.resolveBtn').addEventListener('click', function() {
        riskDashboard.removeChild(riskCard);
    })
    riskDashboard.appendChild(riskCard);
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