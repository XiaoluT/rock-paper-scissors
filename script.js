const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

let humanScore = 0;
let computerScore = 0;

function getChoiceNumber() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    const choiceNumber = getChoiceNumber();

    if (choiceNumber === 0) {
        return "rock";
    } else if (choiceNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function updateScore() {
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore >= 5) {
        resultDiv.textContent = "Congratulations! You won the game!";
        return true;
    }
    if (computerScore >= 5) {
        resultDiv.textContent = "Computer wins the game!";
        return true;
    }
    return false;
}


function playRound(humanChoice, computerChoice) {
    if (checkWinner()) return;

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It is a tie! You both chose ${computerChoice}.`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;

    }
    else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }

    updateScore();
    checkWinner();
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

resetBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    resultDiv.textContent = "New game started!";
})

