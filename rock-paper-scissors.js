function getChoiceNumber() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    let choiceNumber = getChoiceNumber();
    if (choiceNumber === 0) {
        console.log("Rock");
    } else if (choiceNumber === 1) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

getComputerChoice();

function getHumanChoice() {
    let humanChoice = prompt("What's your rock paper scissors choice? ");
    console.log(humanChoice);
}

getHumanChoice();
