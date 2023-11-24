const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const result = document.querySelector('#result');
const retry = document.querySelector('#retry')
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissor' ||
    playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'scissor' && computerSelection === 'paper') {
        playerWon++;
        return `You won! Player: ${playerWon} Computer: ${computerWon}`; 
    } else if (playerSelection === computerSelection) {
        return `It's a draw! Player: ${playerWon} Computer: ${computerWon}`; 
    } else {
        computerWon++;
        return `You lost. . . Player: ${playerWon} Computer: ${computerWon}`;
    }  
}

rock.addEventListener('click', () => {
    return result.textContent = playRound(rock.value, getComputerChoice());
});
paper.addEventListener('click', () => {
    return result.textContent = playRound(paper.value, getComputerChoice());
});
scissor.addEventListener('click', () => {
    return result.textContent = playRound(scissor.value, getComputerChoice());
});

retry.textContent = 'Retry';
retry.addEventListener('click', () =>{
    playerWon = 0;
    computerWon = 0;
    return result.textContent = `Click to play. Player: ${playerWon} Computer: ${computerWon}`; 
});