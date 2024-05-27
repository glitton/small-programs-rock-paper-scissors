// const readline = require("readline-sync");
// const MESSAGES = require("./game_messages.json");
let round = 4;

function prompt(message) {
  console.log(`=> ${message}`);
}

function determineGameWinner(playerScore, computerScore) {
  if (playerScore === 3 && round <= 5) {
    prompt("you win the game!");
  } else if (computerScore === 3 && round <= 5) {
    prompt("computer wins the game!");
  } else if (playerScore === computerScore && round < 5) {
    prompt("No winner yet, on to the next round.");
  } else if (playerScore === computerScore && round === 5) {
    prompt("Game over, no one won three out of five!");
  }
}

determineGameWinner(2, 2);
