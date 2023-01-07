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
/*
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
}*/
// loan amount
// APR
// duration

// need to calculate the monthly interest rate
// calculate the loan duration in months

// Greet user
// Request loan amount
// Request Annual Percentage Rate (APR)
// Request duration of loan
// Determine the monthly interest rate
// Determine the loan duration in months
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function validNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to the Mortgage Calculator');

while (true) {
  prompt('What is the amount of the loan?');
  let loanAmount = readline.question();

  while (validNumber(loanAmount)) {
    prompt('Please enter a valid number.');
    loanAmount = readline.question();
  }

  prompt('Please enter the interest rate.');
  let interestRate = readline.question();

  while (validNumber(interestRate)) {
    prompt('Please enter a valid number.');
    interestRate = readline.question();
  }

  prompt('Please enter the duration of the loan');
  let loanDuration = readline.question();

  while (validNumber(loanDuration)) {
    prompt('Please enter a valid number.');
    loanDuration = readline.question();
  }

  let annualPercentageRate = Number(interestRate) / 100;
  let monthlyRate = annualPercentageRate / 12;
  let months = Number(loanDuration) * 12;

  let monthlyPayment = loanAmount * (monthlyRate /
  (1 - Math.pow((1 + monthlyRate), (-months))));

  prompt(`Your monthy payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Would you like to do another calculation?");
  let newCalculation = readline.question().toLowerCase();
  while (newCalculation[0] !== 'n' && newCalculation[0] !== 'y') {
    prompt("Please enter 'y' or 'n'.");
    newCalculation = readline.question().toLowerCase();
  }

  if (newCalculation[0] === 'n') break;
}