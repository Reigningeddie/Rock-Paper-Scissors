let counter = 0;

function playGame() {
  for (let i = 0; counter <= 4; i++) {
    round();
    console.log('round: ' + counter)
    console.log('-----------------------------------')
  }
}

const round = () => {
  const user = getUser().toLowerCase().trim();
  const cpu = getCpu();
  console.log(`You picked: ${user}`);
  console.log(`Cpu picked: ${cpu}`);
  if (user === 'rock'|| user === 'paper' || user === 'scissors') {
    counter++
  }
  console.log(winner(user, cpu));
}

function getUser() {
  let input = prompt('Rock, Paper or Scissors.').toLowerCase().trim();
  while (input == '') {
    input = prompt('Type Rock, Paper or Scissors.');
    
  }
  if (input === 'rock' || input === 'scissors' || input === 'paper') {
    return input
    } else {
      return input = prompt('Type Rock, Paper or Scissors.').toLowerCase().trim();
  }
}

const getCpu = () => {
  const ranNum = Math.floor(Math.random()*3);
  switch (ranNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const winner = (user, cpu) => {
  if (user === cpu) {
    return 'It\'s a tie!';
  }

  if (user === 'rock') {
    if (cpu === 'paper') {
      return 'You Lose!';
    } else {
      return "You Win!"
    }
  }

  if (user === 'paper') {
    if (cpu === 'scissors') {
      return "You Lose!";
    } else {
      return "You Win!";
    }
  }

  if (user === 'scissors') {
    if (cpu === 'rock') {
      return "You Lose!";
    } else {
      return "You Win!"
    }
  }
}

playGame();