const GAME_RULES = {
  Rock: "beats scissors and lizard.",
  Paper: "beats rock and spock.",
  Scissors: "beats paper and lizard.",
  Lizard: "beats paper and spock.",
  Spock: "beats scissors and rock.",
};

function displayRules(rules) {
  for (const [key, value] of Object.entries(rules)) {
    console.log(`\n*--------------* ${key} ${value} *--------------*\n`);
  }
}

displayRules(GAME_RULES);
