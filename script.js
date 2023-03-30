let globalScore = 0;

function game() {
    const messageTie = 'It`s a tie!'
    const messageWin = 'You won!';
    const messageLost = 'You lost!'

    function getComputerChoice() {
        let randomNumber = Math.floor((Math.random()*3))
        let computerChoice = '';
        if (randomNumber === 0) {
            return computerChoice = 'rock';
        } else if (randomNumber === 1)  {
            return computerChoice = 'paper';
        } else if (randomNumber === 2) {
            return computerChoice = 'scissors';
        }
    }


    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return messageTie;
        } else if (playerSelection === 'rock' && computerSelection === 'paper' ) {
            return messageLost;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return messageLost;
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return messageLost;
        } else if (playerSelection === 'paper' && computerSelection === 'rock' ) {
            return messageWin;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return messageWin;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return messageWin;
        }
    
    }  

    const playerSelection = prompt('¡Choose Rock, Paper or Scissors!').toLocaleLowerCase(); 
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection)
    return globalScore++

}


