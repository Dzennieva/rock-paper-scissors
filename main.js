let playerScore = 0;
let compScore = 0;
const input = document.querySelector("#rock");

input.addEventListener("click", playRound());

// function openGame() {
//     game();
//  }

// Computer Choice

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a Tie! You both picked " + playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper covers rock.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock crushes Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors cuts Paper.";
    } else {
        return "You win!";
    }
}

//  Play 5 rounds

//  const game = () => {
//     for(let i = 0; i < 5; i++) {
//         let playerSelection = getUserChoice();

//         const computerSelection = getComputerChoice();

//         alert("You chose: " + playerSelection);

//         alert("Computer chose: " + computerSelection);

//         alert(playRound(playerSelection, computerSelection));

//     }
// };
