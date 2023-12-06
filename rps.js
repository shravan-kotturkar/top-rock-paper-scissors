

//function getComputerChoice() to get randomly rock, paper or scissors from computer

function getComputerChoice() {
    const compChoice = ['rock', 'paper', 'scissors']; 
    const random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random];
}

//function getUserChoice() to get user input

function getPlayerChoice() {
    let playerChoice = prompt('Choose Rock Paper or Scissors and key it in: ');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}



//function playRound() to play a round of R P S
let scorep = 0;
let scorec = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert ('TIE');
        return;
    }
    else if ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')) {
        alert ('Wrong entry! You lose this round')
    }
    else if ((playerSelection == 'paper' && computerSelection == 'rock')) {
        alert ('You win this round! Paper beats Rock');
        ++scorep;       
    }
    else if ((playerSelection == 'scissors' && computerSelection == 'paper')) {
        alert ('You win this round! Scissors beats Paper');
        ++scorep;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors')) {
        alert ('You win this round! Rock beats Scissors');
        ++scorep;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper')) {
        alert ('You lose this round! Paper beats Rock');
        ++scorec;
    }
    else if ((playerSelection == 'paper' && computerSelection == 'scissors')) {
        alert ('You lose this round! Scissors beats Paper');
        ++scorec;
    }
    else if ((playerSelection == 'scissors' && computerSelection == 'rock')) {
        alert ('You lose this round! Rock beats Scissors');
        ++scorec;
    }
}

function game() {
    for (let i = 0; i < 5; i++)
    {
        playRound(getPlayerChoice(), getComputerChoice());   
    }
    if (scorep > scorec)
    {
        alert ('You Won the game. Congrats!');
    }
    else
    {
        alert ('You Lost the game. Better Luck Next Time.');
    }
}

console.log(game());

    //takes 2 parameters playerSelection and computerSelection
    //use prompt() to get user input
    //returns the winner with message
    //case-insensitive parameter playerSelection - to input all variations
    //if a TIE, replay the round
    //console.log the results to check, and later return the result

//function game() to play function playRound() 5 times
    //keep track of score for each round
    //declare winner at the end of 5 rounds
    