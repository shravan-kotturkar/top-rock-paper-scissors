

//function getComputerChoice() to get randomly rock, paper or scissors from computer

function getComputerChoice() {
    const compChoice = ['rock', 'paper', 'scissors']; 
    const random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random];
}


let rock = document.querySelector('.rock') 
let paper = document.querySelector('.paper') 
let scissors = document.querySelector('.scissors') 
let roundResult = document.querySelector('.roundResult') 
let compScr = 0;
let yourScr = 0;
let finalResult = document.querySelector('.finalResult') 

rock.addEventListener('click', function() {
    if (getComputerChoice() == 'paper') {
        compScr += 1;
        if (compScr == 5) {
            finalResult.textContent = 'The computer has won. Reload the page to play again'    
        }
        document.querySelector('#compScore').textContent = compScr;
        roundResult.textContent = 'Rock lost against Paper';
    }
    else if (getComputerChoice() == 'scissors') {
        yourScr += 1;
        if (yourScr == 5) {
            finalResult.textContent = 'You have won. Reload the page to play again'
        }
        document.querySelector('#yourScore').textContent = yourScr;
        roundResult.textContent = 'Rock won against Scissors';
    }
    else if (getComputerChoice() == 'rock') {
        roundResult.textContent = 'Rock tied against Rock';
    }
})

paper.addEventListener('click', function() {
    if (getComputerChoice() == 'scissors') {
        compScr += 1;
        if (compScr == 5) {
            finalResult.textContent = 'The computer has won. Reload the page to play again'
        }
        document.querySelector('#compScore').textContent = compScr;
        roundResult.textContent = 'Paper lost against Scissors';
    }
    else if (getComputerChoice() == 'rock') {
        yourScr += 1;
        if (yourScr == 5) {
            finalResult.textContent = 'You have won. Reload the page to play again'
        }
        document.querySelector('#yourScore').textContent = yourScr;
        roundResult.textContent = 'Paper won against Rock';
    }
    else if (getComputerChoice() == 'paper') {
        roundResult.textContent = 'Paper tied against Paper';
    }
})

scissors.addEventListener('click', function() {
    if (getComputerChoice() == 'rock') {
        compScr += 1;
        if (compScr == 5) {
            finalResult.textContent = 'The computer has won. Reload the page to play again'
        }
        document.querySelector('#compScore').textContent = compScr;
        roundResult.textContent = 'Scissors lost against Rock';
    }
    else if (getComputerChoice() == 'paper') {
        yourScr += 1;
        if (yourScr == 5) {
            finalResult.textContent = 'You have won. Reload the page to play again'
        }
        document.querySelector('#yourScore').textContent = yourScr;
        roundResult.textContent = 'Scissors won against Paper';
    }
    else if (getComputerChoice() == 'scissors') {
        roundResult.textContent = 'Scissors tied against Scissors';
    }
})
