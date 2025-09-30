let student = "srishankar";
let password = 27072003;
let city ="Coimbatore";

let student_check = prompt("Enter Student Name:");
let password_check = prompt("Enter Password:");
let city_check = prompt("Enter City:");
    if (student_check == "srishankar" && password_check == 27072003 && city_check == "coimbatore") {
    alert("Welcome to Dashboard");
    let birthyear = prompt("Enter your birth year:");
    let date=new Date();
    let year=date.getFullYear();
    let age=year-birthyear;
    alert("Your Age is: " + age);
    if (age >= 18) {
        alert("You are eligible");
} 
     if (age < 18) {
        alert("You are not eligible");
    }

            let time=date.getHours();
        if (time<12){
            alert("good morning!");
        }else if(time>12&&time<4){
            alert("Good afternoon!");
        }else{
            alert("Good evening!");
        }
        let num1 = parseInt(prompt("enter any number for mathematical operation"));
        let mathematical = prompt("enter a mathematical operation (+, -, *, /)");
        let num2 = parseInt(prompt("enter another number"));
        if (mathematical === "+") {
            alert ("Answer: "+(num1+num2));
        } else if (mathematical === "-") {
            alert ("Answer: "+(num1-num2));
        } else if (mathematical === "*") {
            alert ("Answer: "+(num1*num2));
        } else if (mathematical === "/") {
            alert ("Answer: "+(num1/num2));
        } else {
            alert ("Invalid operation");
        }
        alert ("Nothing is Impossible the word itself says I'm possible!");
        alert ("Believe you can and you're halfway there.");
        alert ("Success is not the key to happiness. Happiness is the key to success.");

}

else {
    alert("Invalid Credentials");
    throw "Invalid Credentials";
}



    