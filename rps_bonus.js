const readline = require("readline-sync");
const MESSAGES = require("./game_messages.json");

const WINNING_COMBOS = {
  rock: { abbr: "r", beats: ["scissors", "lizard"] },
  paper: { abbr: "p", beats: ["rock", "spock"] },
  scissors: { abbr: "sc", beats: ["paper", "lizard"] },
  lizard: { abbr: "l", beats: ["paper", "spock"] },
  spock: { abbr: "sp", beats: ["scissors", "rock"] },
};

const TOTAL_ROUNDS = 5;
const WINNING_SCORE = 3;
const VALID_CHOICES = Object.keys(WINNING_COMBOS);
const SHORTENED_CHOICES = abbreviatedChoices(VALID_CHOICES);

function abbreviatedChoices(choices) {
  return choices.map((choice) => WINNING_COMBOS[choice]["abbr"]);
}

// DISPLAY FUNCTIONS
function prompt(message) {
  console.log(`=> ${message}`);
}

function displayGameRules(options) {
  options.map((option) =>
    console.log(`${option} beats ${WINNING_COMBOS[option]["beats"]}`)
  );
}

function displayRound(round) {
  prompt(
    `\n*--------------* ${MESSAGES["round"]}${round} of ${TOTAL_ROUNDS} *--------------*\n`
  );
}

// function playerWins(choice, computerChoice) {
//   return WINNING_COMBOS[choice].includes(computerChoice);
// }

// function computerWins(choice, computerChoice) {
//   return WINNING_COMBOS[computerChoice].includes(choice);
// }

// function displayTie(choice, computerChoice) {
//   return (
//     playerWins(choice, computerChoice) === computerWins(choice, computerChoice)
//   );
// }

// function displayRoundWinner(choice, computerChoice, round) {
//   prompt(`You chose ${choice} while computer chose ${computerChoice}`);
//   if (playerWins(choice, computerChoice)) {
//     playerScore += 1;
//     prompt(`${MESSAGES["playerWinsRound"]}${round}`);
//   } else if (computerWins(choice, computerChoice)) {
//     computerScore += 1;
//     prompt(`${MESSAGES["computerWinsRound"]}${round}`);
//   } else {
//     displayTie(choice, computerChoice);
//     tie += 1;
//     prompt(`${MESSAGES["tieRound"]}${round}`);
//   }
// }

// function displayRoundScores(playerScore, computerScore, tie) {
//   prompt(
//     `Your score is ${playerScore}, the computer's score is ${computerScore}, and ties are ${tie}`
//   );
// }

// let shortenedChoices = VALID_CHOICES.map((item) => item.slice(0, 2));
// let playerChoice;
// function finalPlayerChoice(choice) {
//   switch (choice) {
//     case "ro":
//       playerChoice = "rock";
//       break;
//     case "pa":
//       playerChoice = "paper";
//       break;
//     case "sc":
//       playerChoice = "scissors";
//       break;
//     case "li":
//       playerChoice = "lizard";
//       break;
//     case "sp":
//       playerChoice = "spock";
//       break;
//   }
//   return playerChoice;
// }

// let computerChoice;
// function finalComputerChoice() {
//   let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
//   let finalComputerChoice = VALID_CHOICES[randomIndex];
//   return finalComputerChoice;
// }
function showGameWinner(playerScore, computerScore, round) {
  if (playerScore >= WINNING_SCORE) {
    prompt(MESSAGES["playerWins"]);
  } else if (computerScore >= WINNING_SCORE) {
    prompt(MESSAGES["computerWins"]);
  } else if (playerScore === computerScore && round === TOTAL_ROUNDS) {
    prompt(MESSAGES["gameOver"]);
    // } else if (
    //   playerScore < WINNING_SCORE &&
    //   computerScore < WINNING_SCORE &&
    //   round === TOTAL_ROUNDS
    // ) {
    //   prompt(MESSAGES["gameOver"]);
  } else {
    prompt(MESSAGES["gameOver"]);
  }
}

prompt(MESSAGES["welcome"]);
prompt(`${MESSAGES["description1"]} ${VALID_CHOICES.join(", ")}`);
prompt(`${MESSAGES["description2"]} ${SHORTENED_CHOICES.join(", ")}`);
prompt(`Winning combinations are: `);
displayGameRules(VALID_CHOICES);
prompt(`${MESSAGES["winner"]}`);

/* ---------- GAME STARTS HERE ---------- */

while (true) {
  let round = 1;
  displayRound(round);
  // if (round > 1) {
  //   // displayRoundScores(playerScore, computerScore, tie);
  // }

  // prompt(`${MESSAGES["description1"]} ${shortenedChoices.join(", ")}`);

  // let choice = readline.question();
  // while (!shortenedChoices.includes(choice)) {
  //   prompt(`${MESSAGES["invalidGameChoice"]} ${shortenedChoices.join(", ")}`);
  //   choice = readline.question();
  //   console.clear();
  // }

  // choice = finalPlayerChoice(choice);
  // computerChoice = finalComputerChoice();

  // displayRoundWinner(choice, computerChoice, round);
  // displayRoundScores(playerScore, computerScore, tie);

  // let nextRoundAnswer;
  // if (
  //   round === TOTAL_ROUNDS ||
  //   playerScore === WINNING_SCORE ||
  //   computerScore === WINNING_SCORE
  // ) {
  //   showGameWinner(playerScore, computerScore, round);
  //   prompt(MESSAGES["anotherGame"]);
  //   let playAgainAnswer = readline.question();
  //   console.clear();

  //   while (!["y", "n"].includes(playAgainAnswer)) {
  //     prompt(MESSAGES["invalidChoice"]);
  //     playAgainAnswer = readline.question();
  //     console.clear();
  //   }
  //   if (playAgainAnswer === "n") {
  //     console.clear();
  //     prompt(MESSAGES["gameEnd"]);
  //     break;
  //   } else {
  //     tie = 0;
  //     playerScore = 0;
  //     computerScore = 0;
  //     round = 0;
  //   }
  // } else {
  //   prompt(MESSAGES["nextRound"]);
  //   nextRoundAnswer = readline.question();
  //   while (!["y"].includes(nextRoundAnswer)) {
  //     prompt(MESSAGES["enterChoice"]);
  //     nextRoundAnswer = readline.question();
  //   }

  //   if (nextRoundAnswer !== "y") {
  //     prompt(MESSAGES["exitEarly"]);
  //     nextRoundAnswer = readline.question();
  //   }
  //   console.clear();
  // }

  round += 1;
  if (round === 5) {
    console.log("fifth round");
  }
  break;
}
