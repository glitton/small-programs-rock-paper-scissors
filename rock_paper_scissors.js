const readline = require("readline-sync");
const MESSAGES = require("./game_messages.json");
const TOTAL_ROUNDS = 5;
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

let playerScore = 0;
let computerScore = 0;
let tie = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

let round = 1;
function displayRound() {
  prompt(`${MESSAGES["round"]}${round} of ${TOTAL_ROUNDS}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function computerWins(choice, computerChoice) {
  return WINNING_COMBOS[computerChoice].includes(choice);
}

function displayTie(choice, computerChoice) {
  return (
    playerWins(choice, computerChoice) === computerWins(choice, computerChoice)
  );
}

function displayRoundWinner(choice, computerChoice) {
  prompt(`You chose ${choice} while computer chose ${computerChoice}`);
  if (playerWins(choice, computerChoice)) {
    prompt(MESSAGES["playerWins"]);
    playerScore += 1;
  } else if (computerWins(choice, computerChoice)) {
    prompt(MESSAGES["computerWins"]);
    computerScore += 1;
  } else {
    displayTie(choice, computerChoice);
    tie += 1; // check this, why is it saying it isn't declared???
    prompt(MESSAGES["tie"]);
  }
}

function displayRoundScores(playerScore, computerScore) {
  prompt(
    `Your score is ${playerScore} while the computer's score is ${computerScore}`
  );
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

function showGameWinner(playerScore, computerScore) {
  if (playerScore === 3 && round <= 5) {
    prompt("you win the game!");
  } else if (computerScore === 3 && round <= 5) {
    prompt("computer wins the game!");
  } else if (playerScore === computerScore && round < 5) {
    prompt("No winner yet, on to the next round.");
  } else if (playerScore === computerScore && round > 5) {
    prompt("Game over, no one won three out of five!");
  }
}

while (round <= TOTAL_ROUNDS) {
  prompt(MESSAGES["welcome"]);
  prompt(`${MESSAGES["winner"]}`);
  displayRound();
  round += 1; // increment until 5
  prompt(
    `${MESSAGES["description1"]} ${shortenedChoices.join(", ")}\n ${
      MESSAGES["description2"]
    } ${VALID_CHOICES.join(", ")}.`
  );

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

  displayRoundWinner(choice, computerChoice);
  displayRoundScores(playerScore, computerScore);
  showGameWinner(playerScore, computerScore);

  if (round === 6) {
    showGameWinner(playerScore, computerScore);
    prompt(MESSAGES["anotherGame"]);
    let playAgainAnswer = readline.question();
    console.clear();

    while (!["y", "n"].includes(playAgainAnswer)) {
      prompt(MESSAGES["invalidChoice"]);
      playAgainAnswer = readline.question();
      console.clear();
    }
    if (playAgainAnswer !== "y") {
      console.clear();
      break;
    }
  }

  prompt(MESSAGES["nextRound"]);
  let nextRoundAnswer = readline.question();
  while (nextRoundAnswer[0] !== "n" && nextRoundAnswer[0] !== "y") {
    prompt(MESSAGES["enterChoice"]);
    nextRoundAnswer = readline.question();
  }
  console.clear();
  // move to a function using while or switch so you can break early?
  if (round !== 5 && nextRoundAnswer[0] !== "y") {
    prompt(MESSAGES["exitEarly"]);
    nextRoundAnswer = readline.question();
    if (nextRoundAnswer[0] === "y") {
      prompt(MESSAGES["gameEnd"]);
    } else if (nextRoundAnswer[0] === "c") {
      continue;
    }
    return false;
  }
}
