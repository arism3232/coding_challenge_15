// Task1- Creating the Base Structure
const riskDashboard = document.getElementById('riskDashboard');
const riskForm = document.getElementById('riskForm'); // Task2- Adding Risk Items Dynamically
console.log("Risk Dashboard Loaded");
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.className = 'riskCard';
    riskCard.innerHTML = `
    <h3>${riskName}</h3>
    <p>Risk Level: ${riskLevel}</p>
    <p>Department: ${department}</p>
    `;
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