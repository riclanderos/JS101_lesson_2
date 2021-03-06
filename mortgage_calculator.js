// loan amount
// APR
// duration

// need to calculate the monthly interest rate
// calculate the loan duration in months

// Greet user
// Request loan amount
// Request interest rate
// Request duration of loan
// Determine the monthly interest rate
// Determine the loan duration in months

const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=>${msg}`);
}

function isInvalidNumber(number) {
  return number.trim() === "" || number < 0 || Number.isNaN(Number(number));
}

let validAnswer = "Please enter a number greater than 0.";

prompt("Hello, Welcome to the Loan Calculator");

while (true) {
  prompt("What is your loan amount?");
  let amount = readline.question();

  while (isInvalidNumber(amount)) {
    console.log(`${validAnswer}`);
    amount = readline.question();
  }

  prompt("What is your interest rate?");
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    let validRate = "Please enter a number 0 or greater.";
    console.log(`${validRate}`);
    interestRate = readline.question();
  }

  prompt("How many years is the duration of your loan?");
  let years = readline.question();

  while (isInvalidNumber(years)) {
    console.log(`${validAnswer}`);
    years = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = Number(annualInterestRate) / 12;
  let months = Number(years) * 12;

  let monthlyPayment =
    Number(amount) * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));
  console.log(monthlyPayment);
  if (interestRate === 0) {
    monthlyPayment = amount * (years * 12);
  }
  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  prompt("Would you like to perform another calculation?");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === "n") break;
}
