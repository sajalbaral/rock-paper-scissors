const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playAgain = document.querySelector("#again");
const result = document.querySelector("#result");

let humanPoint = 0;
let computerPoint = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(playerSelection) {
  let computerChoice = getComputerChoice();

  if (
    (playerSelection === "rock" && computerChoice === "scissor") ||
    (playerSelection === "paper" && computerChoice === "rock") ||
    (playerSelection === "scissor" && computerChoice === "paper")
  ) {
    humanPoint++;
    return `The computer choose ${computerChoice}. You won! Player: ${humanPoint} Computer: ${computerPoint}`;
  } else if (playerSelection === computerChoice) {
    return `The computer choose ${computerChoice}. It's a draw! Player: ${humanPoint} Computer: ${computerPoint}`;
  } else {
    computerPoint++;
    return `The computer choose ${computerChoice}. You lost. . . Player: ${humanPoint} Computer: ${computerPoint}`;
  }
}

function checkWon() {
  if (humanPoint == 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    result.textContent =
      "You reached 5 points first. Congrats! Feel free to play again!";
  }

  if (computerPoint == 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    result.textContent = "The computer reached 5 points first. Play again. . .";
  }
}

result.textContent = "Click to play. First to 5 points win!";

rock.addEventListener("click", () => {
  result.textContent = playRound(rock.value);
  checkWon();
});
paper.addEventListener("click", () => {
  result.textContent = playRound(paper.value);
  checkWon();
});
scissor.addEventListener("click", () => {
  result.textContent = playRound(scissor.value);
  checkWon();
});

playAgain.textContent = "Play Again";
playAgain.addEventListener("click", () => {
  humanPoint = 0;
  computerPoint = 0;
  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;

  return (result.textContent = `Click to play. First to 5 points win!`);
});
