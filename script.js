function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    else if (randomNumber === 1) return "paper";
    else return "scissors";
}

let computerChoice = getComputerChoice();

function playRound(computerChoice, playerChoice) {
  if (playerChoice === computerChoice) return 2;
  else if (playerChoice === "rock" && computerChoice === "paper") return 0;
  else if (playerChoice === "rock" && computerChoice === "scissors") return 1;
  else if (playerChoice === "paper" && computerChoice === "rock") return 1;
  else if (playerChoice === "paper" && computerChoice === "scissors") return 0;
  else if (playerChoice === "scissors" && computerChoice === "rock") return 0;
  else if (playerChoice === "scissors" && computerChoice === "paper") return 1;
}

function game() {
    for (let i = 1; i < 6; i++) {
        let playerChoice = prompt("Please input your choice").toLowerCase();
        let result = playRound(computerChoice, playerChoice);
        if (result === 1) playerScore++;
        else if (result === 0) computerScore++;
        console.log(playerScore, computerScore, i);
    }
    if (playerScore > computerScore) console.log("You win!!!");
    else if (playerScore < computerScore) console.log("You lose!!!");
    else console.log("Draw!!!");
}

let playerScore = 0;
let computerScore = 0;
game();


