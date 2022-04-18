
/*---------------------------------- Create a Rock Paper Scissors game where the player plays against the computer --------------------------------*/

/* Create a function named 'getRandomInt' that 
randomly returns an integer between 0 and passed argument */
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

/* Create an array object named 'rockPaSc' that
contains the 3 computer options for the game */
let rockPaSc = new Array('Rock', 'Paper', 'Scissors');

/* Create a function named 'computerPlay' that 
uses 'getRandomInt' to 
randomly returns either 'Rock', 'Paper' or 'Scissors' from the 'rockPaSc' array */
function computerPlay() {
    return rockPaSc[getRandomInt(3)];
}

/* Create a function named 'capitalizeStrings' to 
capitalize strings */
function capitalizeStrings(someString) {
    return someString[0].toUpperCase() + someString.slice(1).toLowerCase();
    }

/* Write a function that plays a single round of Rock Paper Scissors, 
take two parameters' playerSelection' and 'computerSelection'
compare the parameters 
return a string that declares the winner */

/* One Round:
Ask user to pick Rock Paper or Scissors and store user input in variable 'playerSelection
Generate computer Pick and store it in a variable 'playerSelection'
Compare the two picks and return desired phrase according to the result of the comparaison */

function oneRound(playerSelection, computerSelection) {

    /* Declares variable named 'playerChoice' of type string that
    stores capitalized user input of the prompt */
    let playerChoice = capitalizeStrings(prompt('Rock Paper or Scissors ?'));

    /* Assign playerChoice value to playerSelection and logs it */
    playerSelection = playerChoice;
    console.log(`Your selection was ${playerSelection}`);

    /* Declares variable named 'playerChoice' of type string that
    stores computer result of computerPlay function */
    const computerChoice = computerPlay();

    /* Assigns computerChoice value to computerSelection and logs it*/
    computerSelection = computerChoice;
    console.log(`Computer selection was ${computerSelection}`);

    /* Declares winning string, tie and loosing string */
    let winString = `You Win! ${playerSelection} beats ${computerSelection}`;
    let tieString = "It's a tie!"
    let loseString = `You Lose... ${computerSelection} beats ${playerSelection}`;

    /* Checks if input equals Rock Paper or Scisors and returns 'not a valid option' if not */
    if (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors' ) {
        return `${playerSelection} is not a valid option, please select Rock, Paper or Scissors`;
    /* Compares computerSelection and playerSelection and return appropriate answer */    
    } else {
        if (playerSelection == computerSelection) {
            return tieString;
        } else if ( (playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
            ++computerScore;
            return loseString;    
        } else if ( (playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors')) {
            ++playerScore;
            return winString;
        }
    }
}

/* Declares score variables of type number with initial value of 0 */
  let computerScore = 0;
  let playerScore = 0;

/* Create function named 'game()' that 
runs 'oneRound' 5 times to make a 5 round game */
function game(rounds){
    for (var i = 0; i < rounds; i++){
        console.log(oneRound());
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Player Score: ${playerScore}`);
    }
}

game(3);
