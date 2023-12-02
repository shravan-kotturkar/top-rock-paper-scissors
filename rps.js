

//function getComputerChoice() to get randomly rock, paper or scissors from computer

function getComputerChoice() {
    const compChoice = ['rock', 'paper', 'scissors']; 
    const random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random];
}

console.log(getComputerChoice());

//function playRound() to play a round of R P S
    //takes 2 parameters playerSelection and computerSelection
    //use prompt() to get user input
    //returns the winner with message
    //case-insensitive parameter playerSelection - to input all variations
    //if a TIE, replay the round
    //console.log the results to check, and later return the result

//function game() to play function playRound() 5 times
    //keep track of score for each round
    //declare winner at the end of 5 rounds
    