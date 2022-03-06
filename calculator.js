// ask the user for the first number
// ask the user for the second number
//ask the user for the operation
// perform the operation
//display the result of the operation

const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

prompt("Welcome to the Calculator");

prompt("What is the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmmm...that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt("What is the second number?");
let number2 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmmm...that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt(
  "Enter the number of the operation you would like to perform?\n1) Add 2) Subtract 3) Multiply 4)Divide"
);
let operation = readline.question();

while (!["1", "2", "3", "4"].includes(operation)) {
  prompt("You must select number 1, 2, 3, or 4");
  operation = readline.question();
}

let output;

switch (operation) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
  default:
    prompt("Please input a valid number");
}
prompt(`The result is ${output}`);
