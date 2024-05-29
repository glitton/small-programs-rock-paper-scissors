// const readline = require("readline-sync");
// const MESSAGES = require("./game_messages.json");

// const TOTAL_ROUNDS = 5;
// const WINNING_SCORE = 3;
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
// const WINNING_COMBOS = {
//   rock: ["scissors", "lizard"],
//   paper: ["rock", "spock"],
//   scissors: ["paper", "lizard"],
//   lizard: ["paper", "spock"],
//   spock: ["rock", "scissors"],
// };

function finalComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let finalComputerChoice = VALID_CHOICES[randomIndex];
  return finalComputerChoice;
}

console.log(finalComputerChoice());
