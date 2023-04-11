// Keep track of the result. If at any time either the player or the computer have a higher score from 5 rounds show message with the result of the match.
// Make it so the only option the player has is to put either rock, paper or scissors as value.
// Once the game is over, replay and reset the rounds and the scores.
// It would be easier to have buttons to force the player in to the options.
// "Play Again?" button would reset the scores and call again game().
// I need three do-while statements. One if player and the computer tie, one if the player loses and one if the player wins. 

/*let rounds = 0;

function game() {

    let playerScore = 0;
    let computerScore = 0;
    const messageTie = 'It`s a tie!';
    const messageWin = 'You won!';
    const messageLost = 'You lost!';

    while (rounds < 5) {
    rounds++
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
            playerScore++
            computerSelection++
            console.log('You`ve tied this round!');
        } else if (playerSelection === 'rock' && computerSelection === 'paper' ) {
            computerScore++;
            console.log('You`ve lost this round!');
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            console.log('You`ve lost this round!');
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            console.log('You`ve lost this round!');
        } else if (playerSelection === 'paper' && computerSelection === 'rock' ) {
            playerScore++;
            console.log('You`ve won this round!');
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            console.log('You`ve won this round!');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            console.log('You`ve won this round!');
        }


    }  

    const playerSelection = prompt('¡Choose Rock, Paper or Scissors!').toLowerCase(); 
    const computerSelection = getComputerChoice();

    function scoreComparison(playerScore, computerScore) {
        if (playerScore === computerScore) {
            console.log(messageTie);
        } else if (playerScore < computerScore) {
            console.log(messageLost); 
        } else if (playerScore > computerScore) {
            console.log(messageWin);
        }
    }

    playRound(playerSelection, computerSelection)
    
    }
    scoreComparison(playerScore, computerScore);
*/

// Get values
const won = document.querySelector('.won');
const lost = document.querySelector('.lost');
const rounds = document.querySelector('.rounds');
const buttons = document.querySelector('.button-container');
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

let totalRounds = 0


// Define computer choice
function computerChoice() {
    let randomNumber = Math.floor((Math.random()) * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
    
function scoreComparison() {
    lost.innerHTML = `Lost : ${lostRounds}`;
    won.innerHTML = `Won : ${wonRounds}`
}

// Add event listeners
rock.addEventListener('click', playRound = () => {
    let computer = computerChoice();
    if (computer === rock.innerHTML) {
        totalRounds++
        rounds.innerHTML = `Rounds: ${totalRounds}`
    } else if (computer != rock.innerHTML) {
        console.log('its not the same choice')
    }
});