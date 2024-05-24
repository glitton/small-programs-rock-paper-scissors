const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice} while computer chose ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    prompt("You win!");
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}
// New array with shortened version of the valid choices
let shortenedChoices = VALID_CHOICES.map((item) => item.slice(0, 2));

//function to convert shortened choices back to real words
let validUserChoice;
function finalUserChoice(choice) {
  switch (choice) {
    case "ro":
      validUserChoice = "rock";
      break;
    case "pa":
      validUserChoice = "paper";
      break;
    case "sc":
      validUserChoice = "scissors";
      break;
    case "li":
      validUserChoice = "lizard";
      break;
    case "sp":
      validUserChoice = "spock";
      break;
  }
  return validUserChoice;
}

while (true) {
  prompt("Let's play rock paper scissors lizard spock!");
  prompt(
    `Choose either ${shortenedChoices.join(
      ", "
    )} which are equivalent to ${VALID_CHOICES.join(", ")} `
  );
  let choice = readline.question();

  while (!shortenedChoices.includes(choice)) {
    prompt(
      `That's not a valid choice. Choose either ${shortenedChoices.join(
        ", "
      )} which are equivalent to ${VALID_CHOICES.join(", ")}`
    );
    choice = readline.question();
  }

  finalUserChoice(choice);
  choice = validUserChoice;

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again?  Answer 'y' for yes or 'n' for no.");
  let answer = readline.question();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question();
  }
  console.clear();
  if (answer[0] !== "y") {
    prompt("Thanks for playing, goodbye!");
    return false;
  }
}
