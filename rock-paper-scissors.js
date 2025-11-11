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

function getHumanChoice() {
    return prompt("Choose rock, paper or scissors: ").trim().toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`It is a tie! You both chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice == "scissors" && computerChoice === "paper")
    ) {
        alert(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`);
        humanScore++;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        alert(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}!`);
        computerScore++;
    }
    else {
        alert("Invaid input! Please choose rock, paper or scissors.")

    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Your score after Round ${round}: ${humanScore}, Computer score after Round ${round}: ${computerScore}`)
    }

    console.log("\n==== Game over! ====");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
        console.log(`Your final score: ${humanScore}, Computer final score: ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game, but that's ok!");
        console.log(`Your final score: ${humanScore}, Computer final score: ${computerScore}`);
    }
    else {
        console.log("It is a draw! You play the game as well as the computer!");
        console.log(`Your final score: ${humanScore}, Computer final score: ${computerScore}`)
    }
}

playGame();

