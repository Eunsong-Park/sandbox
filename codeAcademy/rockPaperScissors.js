const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();  
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Error")
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);

  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice===computerChoice) {
    return 'The game is a tie!'
  }
  if (userChoice==='rock') {
    if(computerChoice==='paper') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  if (userChoice==='paper') {
    if(computerChoice==='scissors') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  if (userChoice==='scissors') {
    if(computerChoice==='rock') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  // 치트키 삽입
  if (userChoice==='bomb') {
    return 'You won!'
  }
};

const playGame = () => {
  const userChoice = getUserChoice('scissors'); // getUserChoice가 특정 값으로 고정되어 있음. 폼요소 추가하여 사용자 입력 값을 받아와야 함.
  const computerChoice = getComputerChoice();
  console.log('You threw: '+userChoice);
  console.log('The computer threw: '+computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();