let balance = 1000;
let userPin = prompt("Enter your PIN:");

if (userPin === "1234") {
  let choice = prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance");

  if (choice === "1") {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));
    if (amount <= balance) {
      balance -= amount;
      alert(`Withdrawal successful! New balance: ${balance}`);
    } else {
      alert("Insufficient funds.");
    }
  } else if (choice === "2") {
    let amount = parseFloat(prompt("Enter amount to deposit:"));
    balance += amount;
    alert(`Deposit successful! New balance: ${balance}`);
  } else if (choice === "3") {
    alert(`Your current balance is: ${balance}`);
  } else {
    alert("Invalid choice.");
  }
} else {
  alert("Incorrect PIN. Access denied.");
}