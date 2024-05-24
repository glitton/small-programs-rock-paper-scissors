const readline = require("readline-sync");
const MESSAGES = require("./game_messages.json");
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
    prompt(MESSAGES["playerWins"]);
  } else if (choice === computerChoice) {
    prompt(MESSAGES["tie"]);
  } else {
    prompt(MESSAGES["computerWins"]);
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
  prompt(MESSAGES["welcome"]);
  prompt(`${MESSAGES["description1"]} ${shortenedChoices.join(", ")}`);
  prompt(`${MESSAGES["description2"]} ${VALID_CHOICES.join(", ")}`);

  let choice = readline.question();

  while (!shortenedChoices.includes(choice)) {
    prompt(MESSAGES["invalidChoice"]);
    choice = readline.question();
    console.clear();
  }

  finalUserChoice(choice);
  choice = validUserChoice;

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt(MESSAGES["anotherGame"]);
  let answer = readline.question();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt(MESSAGES["enterChoice"]);
    answer = readline.question();
  }
  console.clear();
  if (answer[0] !== "y") {
    prompt(MESSAGES["gameEnd"]);
    return false;
  }
}
