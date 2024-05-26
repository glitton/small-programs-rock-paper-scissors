const readline = require("readline-sync");
const MESSAGES = require("./game_messages.json");
let round = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

// function determineGameWinner(playerScore, computerScore) {
//   if (playerScore === 3 && round <= 5) {
//     prompt("you win the game!");
//   } else if (computerScore === 3 && round <= 5) {
//     prompt("computer wins the game!");
//   } else if (playerScore === computerScore && round < 5) {
//     prompt("No winner yet, on to the next round.");
//   } else if (playerScore === computerScore && round === 5) {
//     prompt("Game over, no one won three out of five!");
//   }
// }

// determineGameWinner(2, 2);

function showGameWinner(playerScore, computerScore) {
  let winnerScore = 0;
  if (playerScore === 3 && round <= 5) {
    prompt(MESSAGES["playerWins"]);
    winnerScore = playerScore;
  } else if (computerScore === 3 && round <= 5) {
    prompt(MESSAGES["computerWins"]);
    winnerScore = computerScore;
  } else if (playerScore === computerScore && round === 5) {
    prompt(MESSAGES["gameOver"]);
    winnerScore = 0;
  }
  return winnerScore;
}

console.log(showGameWinner(2, 3));
