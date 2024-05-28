const readline = require("readline-sync");
const MESSAGES = require("./game_messages.json");
const TOTAL_ROUNDS = 5;
const WINNING_SCORE = 3;
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
  prompt(
    `*-----------* ${MESSAGES["round"]}${round} of ${TOTAL_ROUNDS} *-----------* `
  );
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
  } else if (computerWins(choice, computerChoice)) {
    computerScore += 1;
    prompt(`${MESSAGES["computerWinsRound"]}${round}`);
  } else {
    displayTie(choice, computerChoice);
    tie += 1;
    prompt(`${MESSAGES["tieRound"]}${round}`);
  }
}

function displayRoundScores(playerScore, computerScore, tie) {
  prompt(
    `Your score is ${playerScore}, the computer's score is ${computerScore}, and ties are ${tie}`
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
prompt(
  `${MESSAGES["description1"]} ${shortenedChoices.join(", ")}\n ${
    MESSAGES["description2"]
  } ${VALID_CHOICES.join(", ")}.`
);

/* ---------- GAME STARTS HERE ---------- */

while (true) {
  displayRound();
  if (round > 1) {
    displayRoundScores(playerScore, computerScore, tie);
  }

  prompt(`${MESSAGES["description1"]} ${shortenedChoices.join(", ")}`);

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
  displayRoundScores(playerScore, computerScore, tie);

  let nextRoundAnswer;
  if (
    round === TOTAL_ROUNDS ||
    playerScore === WINNING_SCORE ||
    computerScore === WINNING_SCORE
  ) {
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
    } else {
      tie = 0;
      playerScore = 0;
      computerScore = 0;
      round = 0;
    }
  } else {
    showGameWinner(playerScore, computerScore, round);
    prompt(MESSAGES["nextRound"]);
    nextRoundAnswer = readline.question();
    while (!["y"].includes(nextRoundAnswer)) {
      prompt(MESSAGES["enterChoice"]);
      nextRoundAnswer = readline.question();
    }
  }

  if (nextRoundAnswer !== "y") {
    prompt(MESSAGES["exitEarly"]);
    nextRoundAnswer = readline.question();
  }
  console.clear();

  round += 1;
}
