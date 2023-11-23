function getComputerChoice() {
    let randomChoice = (Math.floor(Math.random() * 3)) + 1;

    if (randomChoice == 1) {
        return "rock";
    } else if (randomChoice == 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissor" ||
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissor" && computerSelection === "paper") {
        return "player won"
    } else if (playerSelection === computerSelection) {
        return "its a draw"
    } else {
        return "computer won"
    }
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')

rock.addEventListener('click', () => {
   playRound('rock', getComputerChoice())
    
})
paper.addEventListener('click', () => {
   playRound('paper', getComputerChoice())
    
})
scissor.addEventListener('click', () => {
   playRound('scissor', getComputerChoice())
    
})