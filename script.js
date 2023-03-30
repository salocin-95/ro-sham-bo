function playerSelection() {
    let choice = prompt('Choose Rock, Paper or Scissors'); 
    return choice;
}

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random()*3))
    let computerChoice = '';
    if (randomNumber === 0) {
        return computerChoice = 'Rock';
    } else if (randomNumber === 1)  {
        return computerChoice = 'Paper';
    } else if (randomNumber === 2) {
        return computerChoice = 'Scissors';
    }
}