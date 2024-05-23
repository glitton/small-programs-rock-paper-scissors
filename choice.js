const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

// function createShortenedChoices(array) {
//   let shortenedChoices = array.map((item) => item.slice(0, 2));
//   return shortenedChoices;
// }

// console.log(createShortenedChoices(VALID_CHOICES));

let shortenedChoices = VALID_CHOICES.map((item) => item.slice(0, 2));

// console.log(shortenedChoices);
let choice = shortenedChoices.includes("li");

// console.log(choice);

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
console.log(finalUserChoice("li"));
