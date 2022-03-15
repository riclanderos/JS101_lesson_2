// loan amount
// APR
// duration

// need to calculate the monthly interest rate
// calculate the loan duration in months

// Request user name
// Request loan amount
// Request duration of loan
// Determine amount of interest paid annually and divide by 12
// Determine the loan duration in months

const rlSync = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Please enter your name:");
rlSync.question();

prompt("PLease enter your loan amount:");
let loanAmount = rlSync.question();

while (invalidNumber(loanAmount)) {
  prompt("That is invalid, please enter the correct number.");
  loanAmount = rlSync.question();
}

prompt("Please enter the duration of your loan:");
let loanDuration = rlSync.question();

while (invalidNumber(loanDuration)) {
  prompt("That is invalid, please enter the correct number.");
  loanDuration = rlSync.question();
}
