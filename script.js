function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

function getHumanChoice() {
  let userInput = prompt(
    'Enter your choice:'
  );
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log('Tie Nobody Wins');
  }
  else if (
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'scissors' && computerChoice === 'paper' ||
    humanChoice === 'paper' && computerChoice === 'rock'
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
  }
  else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
  }
}

let humanScore = 0;
let computerScore = 0;