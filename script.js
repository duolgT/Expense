// =========================================
// SPENDWISE JAVASCRIPT
// =========================================


// =========================================
// BUDGET
// =========================================

let monthlyBudget = 30000;

let savings = 7500;


// =========================================
// EXPENSE DATA
// =========================================

let expenses = [

    {
        name: "Food",
        amount: 8500,
        category: "Food"
    },

    {
        name: "Transport",
        amount: 4200,
        category: "Transport"
    },

    {
        name: "Rent",
        amount: 15000,
        category: "Rent"
    },

    {
        name: "Entertainment",
        amount: 3000,
        category: "Entertainment"
    },

    {
        name: "Utilities",
        amount: 5300,
        category: "Utilities"
    }

];


// =========================================
// DOM ELEMENTS
// =========================================

let budgetDisplay =
    document.getElementById("monthlyBudget");

let totalExpensesDisplay =
    document.getElementById("totalExpenses");

let remainingBalanceDisplay =
    document.getElementById("remainingBalance");

let expenseForm =
    document.getElementById("expenseForm");

let expenseNameInput =
    document.getElementById("expenseName");

let expenseAmountInput =
    document.getElementById("expenseAmount");

let expenseCategoryInput =
    document.getElementById("expenseCategory");

let message =
    document.getElementById("message");

let expenseList =
    document.getElementById("expenseList");


// Category cards

let foodAmount =
    document.getElementById("foodAmount");

let transportAmount =
    document.getElementById("transportAmount");

let rentAmount =
    document.getElementById("rentAmount");

let entertainmentAmount =
    document.getElementById("entertainmentAmount");

let savingsAmount =
    document.getElementById("savingsAmount");

let utilitiesAmount =
    document.getElementById("utilitiesAmount");


// =========================================
// CALCULATE TOTAL EXPENSES
// =========================================

function calculateTotalExpenses() {

    let total = 0;

    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

    }

    return total;
}


// =========================================
// CALCULATE REMAINING BALANCE
// =========================================

function calculateRemainingBalance() {

    let totalExpenses =
        calculateTotalExpenses();

    return monthlyBudget - totalExpenses;
}


// =========================================
// UPDATE DASHBOARD
// =========================================

function updateDashboard() {

    let totalExpenses =
        calculateTotalExpenses();

    let remainingBalance =
        calculateRemainingBalance();


    // Update monthly budget
    budgetDisplay.textContent =
        "KSh " + monthlyBudget;


    // Update total expenses
    totalExpensesDisplay.textContent =
        "KSh " + totalExpenses;


    // Update remaining balance
    remainingBalanceDisplay.textContent =
        "KSh " + remainingBalance;


    // =========================================
    // DECISION MAKING
    // =========================================

    if (remainingBalance < 0) {

        message.textContent =
            "Warning: You have exceeded your monthly budget.";

    }

    else if (remainingBalance === 0) {

        message.textContent =
            "You have used your entire monthly budget.";

    }

    else if (remainingBalance < 5000) {

        message.textContent =
            "Your budget is running low. Spend carefully.";

    }

    else {

        message.textContent =
            "You are within your monthly budget.";

    }

}


// =========================================
// UPDATE CATEGORY CARDS
// =========================================

function updateCategoryCards() {

    let foodTotal = 0;

    let transportTotal = 0;

    let rentTotal = 0;

    let entertainmentTotal = 0;

    let utilitiesTotal = 0;


    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {

        let expense = expenses[i];


        // Check Food
        if (expense.category === "Food") {

            foodTotal =
                foodTotal + expense.amount;

        }


        // Check Transport
        else if (expense.category === "Transport") {

            transportTotal =
                transportTotal + expense.amount;

        }


        // Check Rent
        else if (expense.category === "Rent") {

            rentTotal =
                rentTotal + expense.amount;

        }


        // Check Entertainment
        else if (expense.category === "Entertainment") {

            entertainmentTotal =
                entertainmentTotal + expense.amount;

        }


        // Check Utilities
        else if (expense.category === "Utilities") {

            utilitiesTotal =
                utilitiesTotal + expense.amount;

        }

    }


    // Update category cards

    foodAmount.textContent =
        "KSh " + foodTotal;

    transportAmount.textContent =
        "KSh " + transportTotal;

    rentAmount.textContent =
        "KSh " + rentTotal;

    entertainmentAmount.textContent =
        "KSh " + entertainmentTotal;

    utilitiesAmount.textContent =
        "KSh " + utilitiesTotal;

    savingsAmount.textContent =
        "KSh " + savings;

}


// =========================================
// DISPLAY EXPENSES
// =========================================

function displayExpenses() {

    // Clear existing list
    expenseList.innerHTML = "";


    // Loop through expenses
    for (let i = 0; i < expenses.length; i++) {

        let expense = expenses[i];


        // Create list item
        let listItem =
            document.createElement("li");


        // Add expense information
        listItem.textContent =
            expense.name +
            " - KSh " +
            expense.amount +
            " (" +
            expense.category +
            ")";


        // Add item to the page
        expenseList.appendChild(listItem);

    }

}


// =========================================
// HANDLE FORM SUBMISSION
// =========================================

expenseForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh
        event.preventDefault();


        // =========================================
        // GET USER INPUT
        // =========================================

        let name =
            expenseNameInput.value.trim();

        let amount =
            Number(expenseAmountInput.value);

        let category =
            expenseCategoryInput.value;


        // =========================================
        // VALIDATE EXPENSE NAME
        // =========================================

        if (name === "") {

            message.textContent =
                "Please enter an expense name.";

            return;
        }


        // =========================================
        // VALIDATE AMOUNT
        // =========================================

        if (amount <= 0 || isNaN(amount)) {

            message.textContent =
                "Please enter a valid expense amount.";

            return;
        }


        // =========================================
        // ADD EXPENSE TO ARRAY
        // =========================================

        expenses.push({

            name: name,

            amount: amount,

            category: category

        });


        // =========================================
        // UPDATE PAGE
        // =========================================

        displayExpenses();

        updateDashboard();

        updateCategoryCards();


        // =========================================
        // SUCCESS MESSAGE
        // =========================================

        message.textContent =
            name + " was added successfully.";


        // Clear form
        expenseForm.reset();

    }
);


// =========================================
// INITIAL PAGE DISPLAY
// =========================================

displayExpenses();

updateDashboard();

updateCategoryCards();