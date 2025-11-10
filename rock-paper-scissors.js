function getChoiceNumber() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    let choiceNumber = getChoiceNumber();
    if (choiceNumber === 0) {
        return "rock";
    } else if (choiceNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper or scissors: ").trim().toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It is a tie! You both chose ${computerChoice}!`);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice == "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
    else {
        console.log("Invaid input! Please choose rock, paper or scissors.")

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Your scores: ${humanScore}, Computer Score: ${computerScore}`);


