function openGame() {
    game();
 }

//  User Choice
const getUserChoice = () => {
let userInput = prompt("Rock, Paper or Scissors");

userInput = userInput.toLowerCase();
 
if  (!userInput) {
    return;

}else  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
}else {
    return prompt('Error, please input: Rock, Paper or Scissors');
}

};

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];

    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    
    return computerChoice;
};

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
       
        return "It's a Tie! You both picked " + playerSelection;
    }else if (playerSelection === "rock" && computerSelection === 'paper') {
        
        return "You Lose! Paper covers rock."
    }else if (playerSelection === "scissors" && computerSelection === 'rock') {
        
        return "You Lose! Rock crushes Scissors."
    }else if (playerSelection === "paper" && computerSelection === 'scissors') {
        
        return "You Lose! Scissors cuts Paper."
    }else {
        
        return "You win!"
    }
 }

 const game = () => {
    for(let i = 0; i < 5; i++) {
        let playerSelection = getUserChoice();

        const computerSelection = getComputerChoice();

        alert("You chose: " + playerSelection);

        alert("Computer chose: " + computerSelection);

        alert(playRound(playerSelection, computerSelection));

    }
};

game();



