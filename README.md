# SpendWise – Personal Budget & Expense Tracker

SpendWise is a personal budget and expense tracker built with **HTML, CSS, and JavaScript**. The project allows users to record expenses, organize them by category, calculate total spending, monitor their remaining budget, and receive feedback based on their spending.

## Features

* Add expense information using a form
* Select an expense category from a dropdown
* Store multiple expense records using JavaScript arrays
* Calculate total expenses automatically
* Calculate the remaining budget
* Display expenses dynamically on the webpage
* Update category spending automatically
* Provide budgeting feedback using conditional statements
* Validate user input
* Use loops to process multiple expense records
* Use DOM manipulation to update dashboard information
* Handle user actions using event listeners
* Responsive dashboard layout
* Display recent expenses dynamically

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

## Project Structure

```text
SpendWise/

├── index.html
├── styles.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure and content of the SpendWise application, including:

* Dashboard
* Budget summary cards
* Expense category cards
* Expense form
* Expense category dropdown
* Recent expenses section
* Buttons and form controls

### `styles.css`

Contains the styling for the application, including:

* Dashboard layout
* Sidebar navigation
* Cards
* Forms
* Buttons
* Expense list
* Responsive design
* Hover and focus effects
* Spacing and typography

### `script.js`

Contains the JavaScript functionality of the application, including:

* Expense data
* Arrays
* Conditional statements
* Loops
* Functions
* DOM manipulation
* Event listeners
* Input validation
* Budget calculations
* Dynamic dashboard updates

## JavaScript Concepts Practiced

### 1. Variables

Variables are used to store values such as the monthly budget and savings.

```javascript
let monthlyBudget = 30000;
let savings = 7500;
```

### 2. Arrays

An array is used to store multiple expense records.

```javascript
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
    }
];
```

New expenses can be added to the array using `push()`.

```javascript
expenses.push({
    name: name,
    amount: amount,
    category: category
});
```

### 3. Conditional Statements

Conditional statements are used to provide feedback based on the remaining budget.

```javascript
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
```

### 4. Loops

Loops are used to process every expense stored in the array.

```javascript
for (let i = 0; i < expenses.length; i++) {
    total = total + expenses[i].amount;
}
```

The loop allows SpendWise to calculate the total amount spent without creating separate variables for every expense.

### 5. Functions

Functions are used to organize the application's logic.

For example:

```javascript
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total = total + expenses[i].amount;
    }

    return total;
}
```

### 6. DOM Manipulation

JavaScript is used to update information directly on the webpage.

For example:

```javascript
totalExpensesDisplay.textContent =
    "KSh " + totalExpenses;
```

This allows the dashboard to display updated information without refreshing the page.

### 7. Event Listeners

An event listener is used to respond when the user submits the expense form.

```javascript
expenseForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        // Process expense
    }
);
```

The application reads the user's input, validates it, stores the expense, recalculates the budget, and updates the dashboard.

### 8. Input Validation

SpendWise checks the information entered by the user before adding an expense.

For example:

```javascript
if (name === "") {
    message.textContent =
        "Please enter an expense name.";

    return;
}
```

The application also checks that the expense amount is greater than zero.

## Dynamic Dashboard

The dashboard updates automatically when a new expense is added.

The following information can change dynamically:

* Total Expenses
* Remaining Balance
* Food spending
* Transport spending
* Rent spending
* Entertainment spending
* Utilities spending
* Recent Expenses

This makes SpendWise interactive instead of being a static HTML and CSS page.

## Challenges Encountered

One challenge was changing the project from using individual expense variables to using an array of expense objects.

Another challenge was connecting JavaScript to HTML elements so that information could be updated dynamically.

These challenges were solved by using arrays to store expense records, loops to process the records, functions to organize the code, event listeners to handle user actions, and DOM manipulation to update the webpage.

## How to Run the Project

1. Clone or download the repository.
2. Open the project folder.
3. Make sure the following files are present:

```text
index.html
styles.css
script.js
README.md
```

4. Open `index.html` in a web browser.
5. Add an expense using the **Add Expense** form.
6. Check the dashboard to see the updated totals.

## Testing

The application should be tested by:

* Adding a Food expense
* Adding a Transport expense
* Adding a Rent expense
* Adding an Entertainment expense
* Adding a Utilities expense
* Checking that the expense appears in Recent Expenses
* Checking that Total Expenses updates
* Checking that Remaining Balance updates
* Checking that category totals update
* Testing an empty expense name
* Testing an invalid or zero amount
* Checking the browser console for errors
* Testing the responsive layout on smaller screens

## Week 6 Learning Goal

This project builds on the earlier HTML and CSS versions of SpendWise.

The main goal of this stage is to use **JavaScript to make the budgeting application interactive**.

The project demonstrates:

* Decision making
* Arrays
* Loops
* Functions
* DOM manipulation
* Event handling
* User input
* Data processing
* Dynamic webpage updates

## Author

**Duol Daniel Gatbel**

Frontend Web Developer | Data Engineering Enthusiast
