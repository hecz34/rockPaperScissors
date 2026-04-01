function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}

function getHumanChoice() {
  let userInput = prompt(
    'Enter your choice:'
  );
  return userInput;
}

let humanScore = 0;
let computerScore = 0;