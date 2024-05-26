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
    prompt(`${MESSAGES["playerWinsRound"]}${round}`);
    playerScore += 1;
  } else if (computerWins(choice, computerChoice)) {
    prompt(`${MESSAGES["computerWinsRound"]}${round}`);
    computerScore += 1;
  } else {
    displayTie(choice, computerChoice);
    tie += 1;
    prompt(`${MESSAGES["tieRound"]}${round}`);
  }
}

function displayRoundScores(playerScore, computerScore) {
  prompt(
    `Your score is ${playerScore} while the computer's score is ${computerScore}`
  );
}

let shortenedChoices = VALID_CHOICES.map((item) => item.slice(0, 2));

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
// Does this function ever get called??
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

// function playFinalRound(round, playerScore, computerScore) {
//   while (round !== 6) {
//     showGameWinner(playerScore, computerScore);
//     prompt(MESSAGES["anotherGame"]);
//     let playAgainAnswer = readline.question();
//     console.clear();

//     while (!["y", "n"].includes(playAgainAnswer)) {
//       prompt(MESSAGES["invalidChoice"]);
//       playAgainAnswer = readline.question();
//       console.clear();
//     }
//     if (playAgainAnswer !== "y") {
//       console.clear();
//       break;
//     }
//   }
// }

prompt(MESSAGES["welcome"]);
prompt(`${MESSAGES["winner"]}`);

// GAME STARTS HERE
while (round <= TOTAL_ROUNDS) {
  displayRound();
  if (round > 1) {
    displayRoundScores(playerScore, computerScore);
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
  choice = validUserChoice;

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayRoundWinner(choice, computerChoice, round);
  displayRoundScores(playerScore, computerScore);
  showGameWinner(playerScore, computerScore);

  round += 1;

  // TO DO: Think about this
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
