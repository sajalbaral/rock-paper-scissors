const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const result = document.querySelector('#results')
const replay = document.querySelector('#replay')
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
};

rock.addEventListener('click', () => {
    if(getComputerChoice() === 'rock') {
        return result.textContent = `Computer picked rock, it's a draw!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    } else if (getComputerChoice() === 'paper') {
        computerWon++
        return result.textContent = `Computer picked paper, you lose!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    } else {
        playerWon++
        return result.textContent = `Computer picked scissors, you won!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    }
});

paper.addEventListener('click', () => {
    if(getComputerChoice() === 'rock') {
        playerWon++
        return result.textContent = `Computer picked rock, you won!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    } else if (getComputerChoice() === 'paper') {
        return result.textContent = `Computer picked paper, it's a draw!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    } else {
        computerWon++
        return result.textContent = `Computer picked scissors, you lose!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    }
});

scissor.addEventListener('click', () => {
    if(getComputerChoice() === 'rock') {
        computerWon++
        return result.textContent = `Computer picked rock, you lose!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    } else if (getComputerChoice() === 'paper') {
        playerWon++
        return result.textContent = `Computer picked paper, you won!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    } else {
        return result.textContent = `Computer picked scissors, it's a draw!` + ` Player: ${playerWon}` + ` Computer: ${computerWon}`
    }
});

replay.textContent = 'Replay'
replay.addEventListener('click', () => {
    playerWon = 0;
    computerWon = 0;
})

result.appendChild(rock, paper, scissor)