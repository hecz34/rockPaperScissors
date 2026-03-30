function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  return rockPaperScissors(random);
}

function getUsersChoice() {
  let userInput = prompt(
    'Enter your choice:\n1 - Rock\n2 - Paper\n3 - Scissors'
  );
  return rockPaperScissors(parseInt(userInput));
}

function rockPaperScissors(choice) {
  switch (choice) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}