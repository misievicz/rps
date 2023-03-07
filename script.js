const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}


let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(item) {
  return item;
} 

function disableButtons() {
  buttons.forEach((item) => {
    item.disabled = true;
  });
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) return 0;
  else if (playerChoice === "rock" && computerChoice === "paper") return computerScore++;
  else if (playerChoice === "rock" && computerChoice === "scissors") return playerScore++;
  else if (playerChoice === "paper" && computerChoice === "rock") return playerScore++;
  else if (playerChoice === "paper" && computerChoice === "scissors") return computerScore++;
  else if (playerChoice === "scissors" && computerChoice === "rock") return computerScore++;
  else if (playerChoice === "scissors" && computerChoice === "paper") return playerScore++;
}

const buttons = document.querySelectorAll('input')
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value); 
        score.textContent = "You win this round!";
        console.log(playerScore);
        console.log(computerScore);

        if (playerScore === 5 || computerScore === 5) {
            console.log("end");
            disableButtons();
        }
    })
});

const score = document.querySelector(".score");


 





