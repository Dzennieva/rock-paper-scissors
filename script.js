const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;

// play game
function openGame() {
    game();
 }

// Computer's Choice
function computerPlay () {
    
    let computerchoice = choices[Math.floor(Math.random() * choices.length)];
    return computerchoice;
}

// plays a single round of Rock Paper Scissors.
function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        compScore++;
        return "It's a Tie! You both picked " + playerSelection;
    }else if (playerSelection === "rock" && computerSelection === 'paper') {
        compScore++;
        return "You Lose! Paper covers rock."
    }else if (playerSelection === "scissors" && computerSelection === 'rock') {
        compScore++;
        return "You Lose! Rock crushes Scissors."
    }else if (playerSelection === "paper" && computerSelection === 'scissors') {
        compScore++;
        return "You Lose! Scissors cuts Paper."
    }else {
        playerScore++;
        return "You win!"
    }
 }

// plays a 5 round game 
const game = () => {
    for(let i = 0; i < 5; i++) {
       let playerSelection = prompt("Rock, Paper, Scissors?");

        while (playerSelection === null) {
            return;
        }
        
        playerSelection = playerSelection.toLowerCase();

        

        const computerSelection = computerPlay();

        alert("You chose: " + playerSelection);

        alert("Computer chose: " + computerSelection);

        alert(playRound(playerSelection, computerSelection));

      
    }
   alert(gameScore());
};

game();

function gameScore () {
    if (playerScore > compScore) {
        return "You beat the computer! Way to go!"
    }else if (playerScore < compScore) {
        return "You got beat by the computer! Try again!"
    }else {
       return "You tied with the computer. Not bad!"
    }
}


