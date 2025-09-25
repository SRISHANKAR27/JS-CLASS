console.log("GRADE CALCULATOR");
let StudentMark="65";
let mark=Number(StudentMark);
switch(true){
    case (mark>=90 && mark<=100):
    console.log("Grade A");
    break;

    case (mark>=75 && mark<=89):
    console.log("Grade B");
    break;

    case(mark>=50 && mark<=74):
    console.log("Grade C");
    break;

    case(mark>=0 && mark<50):
    console.log("Fail");
    break;
    default:
        console.log("Invalid input(marks)");
}