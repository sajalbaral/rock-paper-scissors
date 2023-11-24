const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const result = document.querySelector('#result');
const playAgain = document.querySelector('#playAgain');
const container = document.querySelector('.container');
let playerWon = 0;
let computerWon = 0;

function getComputerChoice() {
    let randomChoice = (Math.floor(Math.random() * 3)) + 1;

    if (randomChoice == 1) {
        return 'rock';
    } else if (randomChoice == 2) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'scissor' ||
    playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'scissor' && computerSelection === 'paper') {
        playerWon++;
        return `The computer choose ${computerSelection}. You won! Player: ${playerWon} Computer: ${computerWon}`; 
    } else if (playerSelection === computerSelection) {
        return `The computer choose ${computerSelection}. It's a draw! Player: ${playerWon} Computer: ${computerWon}`; 
    } else {
        computerWon++;
        return `The computer choose ${computerSelection}. You lost. . . Player: ${playerWon} Computer: ${computerWon}`;
    }  
}

function checkWon() {
    if(playerWon == 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        result.textContent = 'You reached 5 points first. Congrats!'
    }
    
    if(computerWon == 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        result.textContent = 'The computer reached 5 points first. Try again. . .!'
    }
}

rock.addEventListener('click', () => {
    result.textContent = playRound(rock.value);
    checkWon();
});
paper.addEventListener('click', () => {
    result.textContent = playRound(paper.value);
    checkWon();
});
scissor.addEventListener('click', () => {
    result.textContent = playRound(scissor.value);
    checkWon();
});

playAgain.textContent = 'Play Again';
playAgain.addEventListener('click', () =>{
    playerWon = 0;
    computerWon = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;

    return result.textContent = `Click to play. Player: ${playerWon} Computer: ${computerWon}`; 
});