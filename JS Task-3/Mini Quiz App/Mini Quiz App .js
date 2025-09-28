let score = 0;
let q1 = prompt("Q1: What is 2 + 2?\n1. 3\n2. 4\n3. 5");
switch (q1) {
  case "2":
    score++;
    break;
}

let q2 = prompt("Q2: What is the capital of France?\n1. Paris\n2. Rome\n3. Berlin");
switch (q2) {
  case "1":
    score++;
    break;
}

let q3 = prompt("Q3: Which planet is known as the Red Planet?\n1. Earth\n2. Mars\n3. Jupiter");
switch (q3) {
  case "2":
    score++;
    break;
}

alert(`Your Final Score: ${score}/3`);