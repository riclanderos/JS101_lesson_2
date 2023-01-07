const readline = require('readline-sync');
let VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`Your choice is ${playerChoice}, the computer chooses ${computerChoice}`);

  if ((playerChoice === 'rock' && computerChoice === "scissors") ||
    (playerChoice === 'paper' && computerChoice === "rock") ||
    (playerChoice === 'scissors' && computerChoice === "paper")) {
    prompt("You win!");
  } else if (playerChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("The computer wins!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = readline.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(playerChoice, computerChoice);

  prompt('Play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}

