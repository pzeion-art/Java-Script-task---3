
// Q1: var, let and const

var city = "Salem";
city = "Chennai";
var city = "Madurai";

let score = 10;
score = 20;

const country = "India";

console.log(city);
console.log(score);
console.log(country);


// Q2: Variables and typeof

let myName = "Zeion praveen";
let myAge = 27;
let programmingKnowledge = "Beginner";

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(programmingKnowledge, typeof programmingKnowledge);


// Q3: Array of 5 fruits

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


// Q4: Object

let person = {
    name: "Zeion praveen",
    role: "Student",
    cgpa: 8.5
};

console.log(person.name);
console.log(person.role);
console.log(person.cgpa);


// Q5: Get name and age

let userName = prompt("Enter your name:");
let userAge = Number(prompt("Enter your age:"));

alert("Hello " + userName);
console.log(userAge);



// Q6: Arithmetic operators

let num1 = 10;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);


// Q7: Increment operators

let a = 5;

console.log(a++);
console.log(a);
console.log(++a);


// Q8: Decrement operators

let b1 = 10;
let b = b1--;
let c = --b1;

console.log(b1);
console.log(b);
console.log(c);


// Q9: Assignment operators

let value = 20;

value += 5;
console.log(value);

value -= 3;
console.log(value);

value *= 2;
console.log(value);

value /= 4;
console.log(value);

value %= 3;
console.log(value);


// Q10: Comparison operators

console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");


// Q11: Logical operators

let age = 27;
let hasID = true;

console.log(age >= 18 && hasID);
console.log(age >= 18 || hasID);
console.log(!hasID);


// Q12: Ternary operator

let checkAge = Number(prompt("Enter your age:"));

let ageMessage = checkAge >= 18
    ? "You are 18 or above"
    : "You are below 18";

console.log(ageMessage);


// Q13: typeof expressions

console.log(typeof ("hello" + 10));
console.log(typeof (10 + true));
console.log(typeof (10 + null));
console.log(typeof ("hello" + undefined));


// Q14: Number conversion

let inputNumber = Number(prompt("Enter a number:"));

console.log(inputNumber + 10);


// Q15: Boolean values

console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(true));


// Q16: Positive or not

let positiveNumber = Number(prompt("Enter a number:"));

if (positiveNumber > 0) {
    console.log("Positive number");
} else {
    console.log("Zero or negative number");
}


// Q17: Time-based messages

let time = Number(prompt("Enter the hour (0 to 23):"));

if (time >= 4 && time < 6) {
    console.log("Early morning");
} else if (time >= 6 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 16) {
    console.log("Afternoon");
} else if (time >= 16 && time < 20) {
    console.log("Evening");
} else if (time >= 0 && time < 4) {
    console.log("Night");
} else if (time >= 20 && time <= 23) {
    console.log("Night");
} else {
    console.log("Invalid time");
}


// Q18: Nested if statement

let eligibilityAge = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter height in cm:"));
let weight = Number(prompt("Enter weight in kg:"));

if (eligibilityAge >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Eligible");
        } else {
            console.log("Weight requirement not met");
        }
    } else {
        console.log("Height requirement not met");
    }
} else {
    console.log("Age requirement not met");
}


// Q19: Traffic light

let color = prompt("Enter red, yellow, or green:");

switch (color ? color.toLowerCase() : "") {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// Q20: Print numbers 1 to 20

for (let i = 1; i <= 20; i++) {
    console.log(i);
}


// Q21: Even numbers 2 to 20

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// Q22: While loop 10 to 1

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// Q23: Do-while loop 1 to 10

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 10);


// Q24: For-of loop with string

let language = "JavaScript";

for (let character of language) {
    console.log(character);
}


// Q25: For-of loop with student names

let students = ["Priya", "Ravi", "Kumar", "Anu", "Arun"];

for (let studentName of students) {
    console.log(studentName);
}


// Q26: For-in loop with object

let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key, student[key]);
}


// Q27: Two numbers and arithmetic

let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

console.log("Sum:", firstNumber + secondNumber);
console.log("Difference:", firstNumber - secondNumber);
console.log("Product:", firstNumber * secondNumber);

if (secondNumber !== 0) {
    console.log("Remainder:", firstNumber % secondNumber);
} else {
    console.log("Cannot calculate remainder with zero.");
}


// Q28: Print numbers greater than 10

let numbers = [5, 12, 8, 20, 15];

for (let item of numbers) {
    if (item > 10) {
        console.log(item);
    }
}


// Q29: Age eligibility using alert

let finalAge = Number(prompt("Enter your age:"));

if (finalAge >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}


// Q30: Simple calculator using switch

let operation = prompt(
    "Choose: addition, subtraction, multiplication, division"
);

let first = Number(prompt("Enter first number:"));
let second = Number(prompt("Enter second number:"));

switch (operation ? operation.toLowerCase() : "") {
    case "addition":
        console.log("Result:", first + second);
        break;

    case "subtraction":
        console.log("Result:", first - second);
        break;

    case "multiplication":
        console.log("Result:", first * second);
        break;

    case "division":
        if (second !== 0) {
            console.log("Result:", first / second);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid operation");
}
