const student = "srishankar";
const password = "27072003";
const city = "coimbatore";
const student_check = prompt("Enter Student Name:");
const password_check = prompt("Enter Password:");
const city_check = prompt("Enter City:");

if (student_check === student && password_check === password && city_check === city) {
  alert("Welcome to Dashboard");

  const birthyear = parseInt(prompt("Enter your birth year:"));
  const date = new Date();
  const year = date.getFullYear();
  const age = year - birthyear;
  alert("Your Age is: " + age);

  if (age >= 18) {
    alert("You are eligible");
  } else {
    alert("You are not eligible");
  }

  const time = date.getHours();
  if (time < 12) {
    alert("Good morning!");
  } else if (time <= 16) {
    alert("Good afternoon!");
  } else {
    alert("Good evening!");
  }

  const num1 = parseFloat(prompt("Enter any number for mathematical operation"));
  const mathematical = prompt("Enter a mathematical operation (+, -, *, /)");
  const num2 = parseFloat(prompt("Enter another number"));
  let result;
  switch (mathematical) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operation";
  }
  alert("Answer: " + result);

  alert("Nothing is Impossible the word itself says I'm possible!");
  alert("Believe you can and you're halfway there.");
  alert("Success is not the key to happiness. Happiness is the key to success.");

  const student_json = {
    name: student_check,
    password: password_check,
    city: city_check,
    birthyear: birthyear,
    age: age,
    eligibility: age >= 18 ? "Eligible" : "Not Eligible",
  };
  alert("Student Info in JSON format:\n" + JSON.stringify(student_json, null, 2));
} else {
  alert("Invalid Credentials");
  throw "Invalid Credentials";
}



