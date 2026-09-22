// =========================================
// SPENDWISE JAVASCRIPT
// =========================================

// Budget and expense variables
let monthlyBudget = 30000;

let food = 8500;
let transport = 4200;
let rent = 15000;
let entertainment = 3000;
let savings = 7500;
let utilities = 5300;


// =========================================
// FUNCTIONS
// =========================================

// Calculate total spending expenses
function calculateTotalExpenses(food, transport, rent, entertainment, utilities) {
    return food + transport + rent + entertainment + utilities;
}


// Calculate remaining budget
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


// =========================================
// USER INPUT
// =========================================

let userBudget = Number(
    prompt("Enter your monthly budget in KSh:")
);

let userFood = Number(
    prompt("Enter your food expense in KSh:")
);


// =========================================
// CALCULATIONS
// =========================================

let totalExpenses = calculateTotalExpenses(
    userFood,
    transport,
    rent,
    entertainment,
    utilities
);

let remainingBalance = calculateRemainingBalance(
    userBudget,
    totalExpenses
);


// =========================================
// DISPLAY RESULTS
// =========================================

console.log("===== SpendWise Budget Summary =====");
console.log("Monthly Budget: KSh " + userBudget);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);