//tally the winner
//if winner wins 3 and rounds <=5, game is over

function playGame() {
  let wins = 0;
  for (let i = 1; i <= 5; i++) {
    console.log(`round ${i}`);
    wins++;
    if (wins === 3) {
      console.log(`game over`);
      return wins;
    }
  }
}

console.log(playGame());
