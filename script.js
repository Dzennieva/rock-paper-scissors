const choices = ["rock", "paper", "scissors"];
let playerScore = 0,
    compScore = 0;

// Computer's Choice
function computerPlay () {
    let computerchoice = choices[Math.floor(Math.random()* choices.length)];
    return computerchoice;
}

// plays a single round of Rock Paper Scissors.
function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    }else if (playerSelection === "rock" && computerSelection === 'paper') {
        compScore++
        return "You Lose! Paper covers rock."
    }else if (playerSelection === "scissors" && computerSelection === 'rock') {
        compScore++
        return "You Lose! Rock crushes Scissors."
    }else if (playerSelection === "paper" && computerSelection === 'scissors') {
        compScore++
        return "You Lose! Scissors cuts Paper."
    }else {
        playerScore++;
        return "You win!"
    }
 }
 
let playerSelection;
let computerSelection;

// plays a 5 round game 
const game = () => {
    for(let i = 0; i<5; i++) {
        playerSelection = prompt("Rock, Paper, Scissors?");

        while (playerSelection === null) {
            return;
        }
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

function validatePlayerInput(choice) {
    return (choices.includes(choice))
}

