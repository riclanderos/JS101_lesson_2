// start
// welcome user, request their name
// Have user input first number
// Have user input second number
// Have user input operator
// Print result of operation
// Ask user if he would like to start a new calculation
// If no, end calculator
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function validName(name) {
  return typeof name === String;
}

prompt("Welcome, please enter your name");
let firstName = readline.question();

while (validName(firstName)) {
  prompt("Make sure to enter a valid name");
  firstName = readline.question();
}
while (true) {
  prompt("Please enter the first number");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("Please enter the second number");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  prompt(
    "What would you like to do with these numbers?\n 1) Add 2) Subtract 3) Multiply 4) Divide"
  );
  let oper = readline.question();

  while (!["1", "2", "3", "4"].includes(oper)) {
    prompt("Must choose 1, 2, 3, or 4");
    oper = readline.question();
  }
  let output;
  switch (oper) {
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
  }
  prompt(`The result is ${output}`);

  prompt("Would you like to try another calculation? (y/n");
  let answer = readline.question();

  if (answer[0].toLowerCase() !== "y") break;
}
