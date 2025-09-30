/*console.log("Loops");
for(let i=1; i <=10; i++) {
    console.log(i);
}

console.log("Loops");
for(let i=1; i <=10; i++) {
    console.log(i*3);
}*/

let correctPassword = "User@5678";
let userInput;
do {
    userInput = prompt("Enter your password:");
    if(userInput !== correctPassword) {
        alert("Incorrect password, please try again.");
    }
} while(userInput !== correctPassword);

alert("Access granted!");