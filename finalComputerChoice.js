// File for testing function
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function finalComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let finalComputerChoice = VALID_CHOICES[randomIndex];
  return finalComputerChoice;
}

console.log(finalComputerChoice());
