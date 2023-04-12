// Keep track of the result. If at any time either the player or the computer have a higher score from 5 rounds show message with the result of the match.
// Make it so the only option the player has is to put either rock, paper or scissors as value.
// Once the game is over, replay and reset the rounds and the scores.
// It would be easier to have buttons to force the player in to the options.
// "Play Again?" button would reset the scores and call again game().
// I need three do-while statements. One if player and the computer tie, one if the player loses and one if the player wins. 

// Get values
const won = document.querySelector('.won');
const lost = document.querySelector('.lost');
const rounds = document.querySelector('.rounds');
const buttons = document.querySelector('.button-container');
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const results = document.querySelector('.results')
const resultsLost = document.querySelector('.round-lost')
const resultsWon = document.querySelector('.round-won')

let totalRounds = 0;
let totalWon = 0;
let totalLost = 0;
let roundsWon = 0;
let roundsLost = 0;


// Define computer choice
function computerChoice() {
    let randomNumber = Math.floor((Math.random()) * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}
    
function scoreComparison(rounds) {
    if (rounds === 5) {
        if (totalLost > totalWon) {
            roundsLost++
            results.innerHTML = `You lost this round`
            resultsLost.innerHTML =  `Rounds lost: ${roundsLost}`
        }
        if (totalLost < totalWon) {
            roundsWon++
            results.innerHTML = `You won this round`
            resultsWon.innerHTML =  `Rounds won: ${roundsWon}`
        }
        totalRounds = 0;
        totalLost = 0;
        totalWon = 0;
    }
}

// Add event listeners
rock.addEventListener('click', playRound = () => {
    let computer = computerChoice();
    if (computer === rock.innerHTML) {
        results.innerHTML = `It's a tie!`
    } else if (computer === 'Paper') { 
        totalLost++
        results.innerHTML = ('You lost!')
        lost.innerHTML = `Lost: ${totalLost}`;
    } else if (computer === 'Scissors') {
        totalWon++
        won.innerHTML = `Won: ${totalWon}`
        results.innerHTML = `You won!`
    }
    totalRounds++
    rounds.innerHTML = `Rounds: ${totalRounds}`;
    scoreComparison(totalRounds);
});

paper.addEventListener('click', playRound = () => {
    let computer = computerChoice();
    if (computer === paper.innerHTML) {
        results.innerHTML = `It's a tie!`
    } else if (computer === 'Scissors') {
        totalLost++
        results.innerHTML = ('You lost!')
        lost.innerHTML = `Lost: ${totalLost}`;
    } else if (computer === 'Rock') {
        totalWon++
        won.innerHTML = `Won: ${totalWon}`
        results.innerHTML = `You won!`
    }
    totalRounds++
    rounds.innerHTML = `Rounds: ${totalRounds}`;
    scoreComparison(totalRounds);
});


scissors.addEventListener('click', playRound = () => {
    let computer = computerChoice();
    if (computer === scissors.innerHTML) {
        results.innerHTML = `It's a tie!`
    } else if (computer === 'Rock') {
        totalLost++
        results.innerHTML = ('You lost!')
        lost.innerHTML = `Lost: ${totalLost}`;
    } else if (computer === 'Paper') {
        totalWon++
        won.innerHTML = `Won: ${totalWon}`
        results.innerHTML = `You won!`
    }
    totalRounds++
    rounds.innerHTML = `Rounds: ${totalRounds}`;
    scoreComparison(totalRounds);
});
