// Work on functionality before adding this to the main program
let round = 4;

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

const WINNING_COMBOS = {
  rock: { abbr: "r", beats: ["scissors", "lizard"] },
  paper: { abbr: "p", beats: ["rock", "spock"] },
  scissors: { abbr: "sc", beats: ["paper", "lizard"] },
  lizard: { abbr: "l", beats: ["paper", "spock"] },
  spock: { abbr: "sp", beats: ["scissors", "rock"] },
};

const VALID_CHOICES = Object.keys(WINNING_COMBOS); //words of choices
const SHORTENED_CHOICES = abbreviatedChoices(VALID_CHOICES); //shortcut choices
const ALL_CHOICES = VALID_CHOICES.concat(SHORTENED_CHOICES); //combined arrays

//abbreviation of choices
function abbreviatedChoices(choices) {
  return choices.map((choice) => WINNING_COMBOS[choice]["abbr"]);
}

console.log(WINNING_COMBOS["rock"]["beats"]);
