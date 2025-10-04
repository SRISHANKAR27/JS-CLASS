try {
    const name = prompt("Enter your name:");
    if (name.trim() === "") {
        throw new Error("Name is required!");
    }           

    const email = prompt("Enter your email:");
    if(email.trim() === ""){
        throw new Error("Email is required!");
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        throw new Error("Invalid email format!");
    }

    const agestd = prompt("Enter your age:");
    const age = parseInt(agestd);
    if (isNaN(age)) {
        throw new Error("Age must be a number!");
    }
    if (age < 12) {
        throw new Error("Age must be 12 or older!");
    }

    alert("Registration successful! Starting quiz...");

    const questionBank = [
        {q: "What is the capital of USA?\n1) Washington D.C.\n2) New York\n3) Los Angeles", ans: "1"},
        {q: "What is 5*3?\n1) 15\n2) 6\n3) 9", ans: "1"},
        {q: "What is the most abundant metal on earth?\n1) Silicon\n2) Copper\n3) Aluminum", ans: "3"},
        {q: "Who is the father of computer science?\n1) Alan Turing\n2) Charles Babbage\n3) John von Neumann", ans: "2"},
        {q: "Who is known as the father of modern physics?\n1) Isaac Newton\n2) Albert Einstein\n3) Galileo Galilei", ans: "2"},
        {q: "What is the hardest natural substance on Earth?\n1) Gold\n2) Iron\n3) Diamond", ans: "3"},
        {q: "What is the largest planet in our solar system?\n1) Earth\n2) Jupiter\n3) Saturn", ans: "2"},
        {q: "What is the chemical symbol for water?\n1) CO2\n2) H2O\n3) O2", ans: "2"},
        {q: "Who wrote 'Romeo and Juliet'?\n1) Charles Dickens\n2) Mark Twain\n3) William Shakespeare", ans: "3"},
        {q: "What is the smallest prime number?\n1) 0\n2) 1\n3) 2", ans: "3"}
    ];

    function getRandomQuestions(arr, n) {
        const result = [];
        const taken = [];
        while (result.length < n) {
            const idx = Math.floor(Math.random() * arr.length);
            if (!taken.includes(idx)) {
                result.push(arr[idx]);
                taken.push(idx);
            }
        }
        return result;
    }

    let score = 0;
    const selectedQuestions = getRandomQuestions(questionBank, 3);
    for (let i = 0; i < selectedQuestions.length; i++) {
        const userAns = prompt(`Q${i+1}: ${selectedQuestions[i].q}`);
        if (userAns === selectedQuestions[i].ans) {
            score++;
        }
    }
    
    alert("Quiz complete! Calculating results...");

    const percentage = (score / 3) * 100;
    let grade = "";
    if (percentage >= 80) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 40) grade = "C";
    else grade = "D";
    const timestamp = new Date().toLocaleString();

    const results = {
        name: name,
        email: email,
        age: age,
        totalMarks: score,
        percentage: percentage,
        grade: grade,
        timestamp: timestamp
    };

    const resultMsg = "Results:\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Age: " + age + "\n" +
        "Total Marks: " + score + "/3\n" +
        "Percentage: " + percentage.toFixed(2) + "%\n" +
        "Grade: " + grade + "\n" +
        "Timestamp: " + timestamp + "\n\n" +
        "Full Data in JSON:\n" + JSON.stringify(results,null,2);

    setTimeout(() => {alert(resultMsg)}, 2000);
} catch (err) {
    alert("Error: " + err.message);
}

