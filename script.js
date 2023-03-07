const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

let playerScore = 0;
let computerScore = 0;

function disableButtons() {
  buttons.forEach((item) => {
    item.disabled = true;
  });
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) score.textContent = "Draw!";
    else if ((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")) {
        score.textContent = "Computer wins this round!";
        computerScore++;
        compScore.textContent = `Computer: ${computerScore}`
    }

    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        score.textContent = "You win this round!";
        playerScore++;
        playScore.textContent = `Player: ${playerScore}`;
    }
}

const buttons = document.querySelectorAll('input')
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value);
        console.log(playerScore);
        console.log(computerScore);
        if (playerScore === 5) {
            title.textContent = "game over."
            score.textContent = "YOU WIN THE GAME.";
            disableButtons();
        } else if (computerScore === 5) {
            title.textContent = "game over.";
            score.textContent = "COMPUTER WINS THE GAME.";
            disableButtons();
        }
    })
});

const score = document.querySelector(".score");
const title = document.querySelector(".title");
const compScore = document.querySelector(".comp-score");
const playScore = document.querySelector(".play-score");

 





