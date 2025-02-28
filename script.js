//Create function getComputerChoice
//Use Math.random() to generate a number between 0 and 1.
//Then, multiply that number by 3 to get a number between 0 and 2.
//Then, use Math.floor() to round down to the nearest whole number.
//Then, use this number to assign computerChoice to either 'rock', 'paper', or 'scissors'.
//Finally, return the computer's choice.

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


//Create a function named gethumanChoice.
//Get the user's choice using the prompt() function.
//Make sure that the user's choice can be accepted in any case. For example, both 'rock' and 'Rock' should be accepted.
//You should only accept 'rock', 'paper', or 'scissors'.
//If the user enters a different item, tell them 'Invalid choice.'
//If the user enters a valid choice, return the choice.

function getHumanChoice() {
    humanChoice = prompt('Enter rock, paper, or scissors');
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        return 'Invalid choice';
    }
}


let humanScore = 0;//Creating a variable for keeping track of the user's score.
let computerScore = 0;//Creating a variable for keeping track of the computer's score.

//Create a function named playRound.
//Add parameters named humanChoice and computerChoice.
//Compare the two choices and determine the winner.
//If computerChoice is 'rock' and humanChoice is 'paper', then you should return 'You win! Paper beats rock.'.
//If computerChoice is 'rock' and humanChoice is 'scissors', then you should return 'You lose! Rock beats scissors.'.
//If computerChoice is 'rock' and humanChoice is 'rock', then you should return 'It's a tie!'.
//If computerChoice is 'paper' and humanChoice is 'rock', then you should return 'You lose! Paper beats rock.'.
//If computerChoice is 'paper' and humanChoice is 'scissors', then you should return 'You win! Scissors beat paper.'.
//If computerChoice is 'paper' and humanChoice is 'paper', then you should return 'It's a tie!'.
//If computerChoice is 'scissors' and humanChoice is 'rock', then you should return 'You win! Rock beats scissors.'.
//If computerChoice is 'scissors' and humanChoice is 'scissors', then you should return 'It's a tie!'.
//If computerChoice is 'scissors' and humanChoice is 'paper', then you should return 'You lose! Scissors beat paper.'.
//Increment the humanScore if the user wins.
//Increment the computerScore if the computer wins.
//Return the result of the round.

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice)
        return 'It\'s a tie!';
    else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors' ) || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return ('You win! ' + humanChoice + ' beats ' + computerChoice + '.');
    }
    else if ((humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'scissors' && computerChoice ==='rock')) {
        computerScore++;
        return ('You lose! ' + computerChoice + ' beats ' + humanChoice + '.');
    }
    else return console.log('undifined : ' + humanChoice + computerChoice);
}

//Create a function named playGame.
//Use the playRound function inside of this function as a parameter.
//Play 5 rounds.
//After each round, display the score of both the user and the computer.
//After the game, display the winner of the game based on who won more rounds.
//If the user wins more rounds, tell the user 'You win!'.
//If the computer wins more rounds, tell the user 'You lose!'.
//If the user and the computer have the same score, tell the user 'It's a tie!'.


function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log('Human choice: ' + humanSelection);
        console.log('Computer choice: ' + computerSelection);
        console.log('Human score: ' + humanScore);
        console.log('Computer score: ' + computerScore);
    }
    if (humanScore > computerScore) {
        return 'You win!';
    }
    else if (humanScore < computerScore) {
        return 'You lose!';
    }
    else return 'It\'s a tie!'
}

console.log(playGame(playRound));
