let name = prompt("Enter your name:");
if (name.trim() === "") {
    throw new Error("Name is required!");
}           

let email = prompt("Enter your email:");
if(email.trim() === ""){
    throw new Error("Email is required!");
}
if (!email.includes("@") || !email.includes(".")) {
    throw new Error("Invalid email format!");
}

let agestd = prompt("Enter your age:");
let age = parseInt(agestd);
if (isNaN(age)) {
    throw new Error("Age must be a number!");
}
if (age < 12) {
    throw new Error("Age must be 12 or older!");
}

user = {name: name, email: email, age: age};

alert("Registration successful! Starting quiz...");


let score = 0;


let q1 = prompt("Q1: What is the capital of USA?\n1) Washington D.C.\n2) New York\n3) Los Angeles");
switch (q1) {
    case "1":
        score++;
        break;
}
let q2 = prompt("Q2:  What is 5*3?\n1) 15\n2) 6\n3) 9");
switch (q2) {
    case "1":
        score++;
        break;
}
let q3 = prompt("Q3:  What is the most abundant metal on earth?\n1) Silicon\n2) Copper\n3) Aluminum");
switch (q3) {
    case "3":
        score++;
        break;
}
let q4 = prompt("Q4:  Who is the father of computer science?\n1) Alan Turing\n2) Charles Babbage\n3) John von Neumann");
switch (q4) {
    case "2":
        score++;
        break;
}
    alert("Quiz complete! Calculating results...");

let percentage=(score/4)*100;
let results = {
    name: name,
    email: email,
    totalMarks: score,
    percentage: percentage,};

let resultMsg = "Results:\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Age: " + age + "\n" +
    "Total Marks: " + score + "/4\n" +
    "Percentage: " + percentage + "%\n\n" +
    "Full Data in JSON:\n" + JSON.stringify(results,null,2);
    
    setTimeout(() => {alert(resultMsg)},2000);
