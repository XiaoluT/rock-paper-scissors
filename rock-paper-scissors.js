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
    return prompt("Choose rock, paper or scissors: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log(`Draw! ${computerChoice} all around!`);
        humanScore = 1;
        computerScore = 1;
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            humanScore = 0;
            computerScore = 1;
        } else {
            console.log("You win! Rock beats Scissors!")
            humanScore = 1;
            computerScore = 0;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock!")
            humanScore = 1;
            computerScore = 0;
        } else {
            console.log("You lose! Scissors beats Paper!");
            humanScore = 0;
            computerScore = 1;
        }
    }

    else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            humanScore = 0;
            computerScore = 1;
        } else {
            console.log("You win! Scissors beat Pape!");
            humanScore = 1;
            computerScore = 0;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


