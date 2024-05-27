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
let round = 1;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayRound() {
  prompt(`------ ${MESSAGES["round"]}${round} of ${TOTAL_ROUNDS} ------ `);
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

function displayRoundWinner(choice, computerChoice, round) {
  prompt(`You chose ${choice} while computer chose ${computerChoice}`);
  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
    prompt(`${MESSAGES["playerWinsRound"]}${round}`);
    // return playerScore;
  } else if (computerWins(choice, computerChoice)) {
    computerScore += 1;
    prompt(`${MESSAGES["computerWinsRound"]}${round}`);
    // return computerScore;
  } else {
    displayTie(choice, computerChoice);
    tie += 1;
    prompt(`${MESSAGES["tieRound"]}${round}`);
    // return tie;
  }
}

function displayRoundScores(playerScore, computerScore, tie) {
  // displayRoundWinner(choice, computerChoice, round);
  prompt(
    `Your score is ${playerScore}, the computer's score is ${computerScore}, and ties are ${tie}`
  );
}

let shortenedChoices = VALID_CHOICES.map((item) => item.slice(0, 2));
let userChoice;
function finalUserChoice(choice) {
  switch (choice) {
    case "ro":
      userChoice = "rock";
      break;
    case "pa":
      userChoice = "paper";
      break;
    case "sc":
      userChoice = "scissors";
      break;
    case "li":
      userChoice = "lizard";
      break;
    case "sp":
      userChoice = "spock";
      break;
  }
  return userChoice;
}
// Not sure if this is the right logic
function showGameWinner(playerScore, computerScore, round) {
  if (playerScore >= 3 && round <= 5) {
    prompt(MESSAGES["playerWins"]);
  } else if (computerScore >= 3 && round <= 5) {
    prompt(MESSAGES["computerWins"]);
  } else if (playerScore === computerScore && round === 5) {
    prompt(MESSAGES["gameOver"]);
  } else {
    prompt(MESSAGES["gameOver"]);
  }
}

prompt(MESSAGES["welcome"]);
prompt(`${MESSAGES["winner"]}`);

/* ----------GAME STARTS HERE ------------ */

while (round <= TOTAL_ROUNDS) {
  displayRound();
  if (round > 1) {
    displayRoundScores(playerScore, computerScore, tie);
  }

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
  choice = userChoice;

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayRoundWinner(choice, computerChoice, round);
  displayRoundScores(playerScore, computerScore, tie);
  showGameWinner(playerScore, computerScore, round);
  // if round is less than or equal to 5 and there is a winner,
  //it prompts for the next round

  // TO DO: Think about this
  if (round === 6) {
    showGameWinner(playerScore, computerScore, round);

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
      prompt(MESSAGES["gameEnd"]);
      break;
    }
  }

  prompt(MESSAGES["nextRound"]);
  let nextRoundAnswer = readline.question();
  while (nextRoundAnswer !== "n" && nextRoundAnswer !== "y") {
    prompt(MESSAGES["enterChoice"]);
    nextRoundAnswer = readline.question();
  }
  console.clear();

  // move to a function using while or switch so you can break early?
  if (nextRoundAnswer[0] !== "y") {
    prompt(MESSAGES["exitEarly"]);
    nextRoundAnswer = readline.question();
    if (nextRoundAnswer[0] === "y") {
      prompt(MESSAGES["gameEnd"]);
    } else if (nextRoundAnswer[0] === "c") {
      continue;
    }
    return false;
  }
  round += 1;
}
//round = 5
//Play final round, gets out of the while loop

// showGameWinner(playerScore, computerScore, round);

// prompt(MESSAGES["anotherGame"]);
// let playAgainAnswer = readline.question();
// console.clear();

// while (!["y", "n"].includes(playAgainAnswer)) {
//   prompt(MESSAGES["invalidChoice"]);
//   playAgainAnswer = readline.question();
//   console.clear();
// }
// if (playAgainAnswer !== "y") {
//   console.clear();
//   prompt(MESSAGES["gameEnd"]);
// }
