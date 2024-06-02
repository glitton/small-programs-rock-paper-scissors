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
    tie = 0;
    playerScore = 0;
    computerScore = 0;
    round = 0;
    console.clear();
  }
} else {
  prompt(MESSAGES["nextRound"]);
  nextRoundAnswer = readline.question();
  console.clear();
  while (!["y"].includes(nextRoundAnswer)) {
    prompt(MESSAGES["enterChoice"]);
    nextRoundAnswer = readline.question();
    console.clear();
  }
}
