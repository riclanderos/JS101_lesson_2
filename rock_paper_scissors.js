const readline = require("readline-sync");
const VALID_CHOICES = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock",
  "r",
  "p",
  "sc",
  "l",
  "sp",
];
const WINNING_SCORE = 3;
const RESET_SCORE = 0;

const WINNING_PLAY = {
  rock: ["scissors", "sc", "lizard", "l"],
  paper: ["rock", "r", "spock", "sp"],
  scissors: ["paper", "p", "lizard", "l"],
  lizard: ["paper", "p", "spock", "sp"],
  spock: ["rock", "r", "scissors", "sc"],
  r: ["scissors", "sc", "lizard", "l"],
  p: ["rock", "r", "spock", "sp"],
  sc: ["paper", "p", "lizard", "l"],
  l: ["paper", "p", "spock", "sp"],
  sp: ["rock", "r", "scissors", "sc"],
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function beginGame() {
  prompt(
    `Welcome to Rock, Paper, Scissors, Lizard, Spock! Best of Five is the winner!`
  );
}

beginGame();

function newRound() {
  prompt(
    "-------------------------------------------------------------------------------"
  );
}

function getPlayerChoice() {
  prompt(
    "Please make a selection. You may choose either the complete word or its abbreviation:\n   rock (r), paper (p), scissors (sc), lizard (l), spock (sp)"
  );
  let playerChoice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice, try again.");
    playerChoice = readline.question().toLowerCase();
  }
  return playerChoice;
}

let playerScore = 0;
let computerScore = 0;
let endGame = false;

function startRound() {
  while (true) {
    newRound();

    while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
      let playerChoice = getPlayerChoice();
      let computerChoice = getComputerChoice();
      chosenHand(playerChoice, computerChoice);
      roundWinner(playerChoice, computerChoice);
      scoreCounter(playerScore, computerScore);
    }
    winningPlayer(playerScore, computerScore);
    if (endGame) {
      break;
    }
  }
}

startRound();

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function chosenHand(playerChoice, computerChoice) {
  prompt(
    `You have selected ${playerChoice}, the computer selected ${computerChoice}`
  );
}

function roundWinner(playerChoice, computerChoice) {
  if (WINNING_PLAY[playerChoice].includes(computerChoice)) {
    prompt("You win the round");
    playerScore++;
  } else if (WINNING_PLAY[computerChoice].includes(playerChoice)) {
    prompt("The computer wins the round");
    computerScore++;
    console.log("computer", computerScore);
  } else {
    prompt("It's a tie!");
  }
}

function scoreCounter(playerScore, computerScore) {
  prompt(`Your score: ${playerScore}, the computer's score: ${computerScore} `);
}

function winningPlayer(playerScore, computerScore) {
  if (WINNING_SCORE === playerScore) {
    prompt("You win the game!");
  } else if (WINNING_SCORE === computerScore) {
    prompt("The computer wins the game!");
  }
  return playAgain();
}

function playAgain() {
  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  playerScore = RESET_SCORE;
  computerScore = RESET_SCORE;

  if (answer === "y") {
    prompt("Great, let's play again!");
  } else if (answer === "n") {
    prompt("Thanks for playing.");
    endGame = true;
  } else {
    prompt("That is not a valid choice, please choose 'y' or 'n'.");
    playAgain();
  }
}
newRound();
