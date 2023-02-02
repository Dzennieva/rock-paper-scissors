const playerScore = document.getElementById('player-score');
const compScore = document.getElementById('comp-score');
const moves = document.querySelector(".moves");
const result = document.querySelector('.result');

const getCompChoice = () => {
const choices = ["Rock", "Paper", "Scissors"]
  let compChoice = choices[Math.floor(Math.random() * choices.length)]
  return compChoice;
}

// let movesNumber = +(moves.innerHTML)
// console.log(movesNumber += 1)
// console.log(movesNumber)

const playRound = (playerSelection, compSelection) => {
  
  if (playerSelection == computerSelection) {
    result.innerHTML = "It's a Draw!"
  }
    
}