// Function to get a random computer choice (rock, paper, or scissors)
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
    switch (randomNumber) {
        case 0:
            return 'rock'; // If 0, the computer chooses "rock"
        case 1:
            return 'paper'; // If 1, the computer chooses "paper"
        case 2:
            return 'scissors'; // If 2, the computer chooses "scissors"
    }
}

// Variables to keep track of the player's and computer's scores
let humanScore = 0; // Player's score
let computerScore = 0; // Computer's score

// Function to play a round with the player's and computer's choices
function playRound(humanChoice, computerChoice) {
    const container = document.querySelector("#container"); // Selects the container to display results
    const result = document.createElement("div"); // Creates a div element to display the result

    container.innerHTML = ''; // Clears the previous content of the container

      // Checks if it's a tie
    if (humanChoice === computerChoice) {
        result.textContent = 'It\s a tie!';

    // Checks if the player wins the round
    } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors' ) || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++; // Increments the player's score
        result.textContent = 'You win! ' + humanChoice + ' beats ' + computerChoice + '.';
        container.appendChild(result); // Adds the message to the container
    
    // Checks if the computer wins the round
    } else if ((humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'scissors' && computerChoice ==='rock')) {
        computerScore++; // Increments the computer's score
        result.textContent = 'You lose! ' + computerChoice + ' beats ' + humanChoice + '.';
        container.appendChild(result)
    }

     // Checks if either player has reached 5 points to win the game
    if (humanScore === 5 || computerScore === 5) {
        result.textContent = humanScore === 5 ? "You win the game!" : "Computer wins the game"
        container.appendChild(result);
        return; // Stops the function after the game is won
    }
    // Displays the current scores
    const score = document.createElement("div");
    score.textContent = "Computer has " + computerScore + " points. You have " + humanScore + " points.";
    container.appendChild(score);

    container.appendChild(result);
    
}

// Selects the buttons for each choice (rock, paper, scissors)
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Adds an event listener to each button to play a round when the player clicks
rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice(); // The computer makes its choice
    const humanSelection = 'rock'; //The player chooses "rock"
    playRound(humanSelection, computerSelection); //Plays the round
})

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'paper';
    playRound(humanSelection, computerSelection);
})

scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'scissors';
    playRound(humanSelection, computerSelection);
})