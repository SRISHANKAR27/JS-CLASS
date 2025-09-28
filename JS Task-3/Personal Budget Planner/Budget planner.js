let income = Number(prompt("Enter your monthly income:"));
let rent = Number(prompt("Enter your rent expense:"));
let groceries = Number(prompt("Enter your groceries expense:"));
let transport = Number(prompt("Enter your transport expense:"));
let totalExpenses = rent + groceries + transport;
let remainingBalance = income - totalExpenses;
let percentageSpent = (totalExpenses / income) * 100;

alert("Total Expenses: " + totalExpenses);
alert("Remaining Balance: " + remainingBalance);
alert("Percentage Spent: " + percentageSpent.toFixed(2) + "%");

if (totalExpenses > income) {
  alert("Message: You are overspending.");
} else {
  alert("Message: You are within budget.");
}