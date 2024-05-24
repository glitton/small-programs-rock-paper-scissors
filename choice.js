const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

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
// console.log(finalUserChoice("li"));

// check if user entered shorter word, if entered the long word, then
// choice will be equal to the word
// if (!shortenedChoices.includes(choice)) {
//   finalUserChoice(choice);
//   choice = validUserChoice;
// }
