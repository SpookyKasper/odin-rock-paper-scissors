
/*---------------------------------- Create a Rock Paper Scissors game where the player plays against the computer --------------------------------*/

/* Write a function that plays a single round of Rock Paper Scissors, 
take two parameters' playerSelection' and 'computerSelection'
compare the parameters 
return a string that declares the winner */

/* One Round:
Ask user to pick Rock Paper or Scissors and store user input in variable 'playerSelection
Generate computer Pick and store it in a variable 'playerSelection'
Compare the two picks and return desired phrase according to the result of the comparaison */

function oneRound(playerSelection, computerSelection) {

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

    /* Declares variable named 'playerChoice' of type string that
    stores capitalized user input of the prompt */
    let playerChoice = capitalizeStrings(prompt('Rock Paper or Scissors ?'));

    /* Assign playerChoice value to playerSelection and logs it */
    playerSelection = playerChoice;
    console.log(`Your selection was ${playerSelection}`);

    /* Declares variable named 'computerChoice' of type string that
    stores computer result of computerPlay function */
    const computerChoice = computerPlay();

    /* Assigns computerChoice value to computerSelection and logs it*/
    computerSelection = computerChoice;
    console.log(`Computer selection was ${computerSelection}`);

    /* Declares winning string, tie and loosing string */
    let winString = `You won the round! ${playerSelection} beats ${computerSelection}`;
    let tieString = "It's a tie!"
    let loseString = `You lost this round bro... ${computerSelection} beats ${playerSelection}`;

    /* Declares a handy string named new line of type string that 
    stores breaking to a new line command */

    let newLine = '\r\n';

    /* Checks if input equals Rock Paper or Scisors and returns 'not a valid option' if not */
    if (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors' ) {
        console.log('invalid input');
        alert(`${playerSelection} is not a valid option, please select Rock, Paper or Scissors`)
        return undefined;
    /* Compares computerSelection and playerSelection and return appropriate answer */    
    } else {
        if (playerSelection == computerSelection) {
            console.log(tieString);
            console.log(`Computer Score: ${computerScore}`);
            console.log(`Player Score: ${playerScore}`);
            alert(`${tieString} ${newLine} 
            Computer Score: ${computerScore} 
            Player Score: ${playerScore}`);
            return 'tie';
        } else if ( (playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
            ++computerScore;
            console.log(loseString);
            console.log(`Computer Score: ${computerScore}`);
            console.log(`Player Score: ${playerScore}`);
            alert(`${loseString}
            Computer Score: ${computerScore} 
            Player Score: ${playerScore}`);
            return 'lose';
        } else if ( (playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors')) {
            ++playerScore;
            console.log(winString);
            console.log(`Computer Score: ${computerScore}`);
            console.log(`Player Score: ${playerScore}`);
            alert(`${winString} 
            Computer Score: ${computerScore} 
            Player Score: ${playerScore}`);
            return 'win';
        }
    }
}

/* Declares score variables of type number with initial value of 0 */
    let computerScore = 0;
    let playerScore = 0;


/* Create function named 'game()' that 
runs 'oneRound' the passed number of times */
function game(rounds){
    for (var i = 0; i < rounds; i++){
        /* Declares a variable named roundResult of type string that
        stores current result of oneRound() */
        let roundResult = oneRound();

        /* Declares winning or losing the game variables of type string 
        with declared inital value */
        let winGameString = `Congratulations! The game is over and you Won! Wouhouuouo!!!`;
        let loseGameString = `Damn bro you where so close! try again!`;

        /* Checks if roundResult equals tie or invalid and if true don't count round */
        if (roundResult == 'tie' || roundResult == undefined) {
            i--
        }
        console.log(roundResult);
        /* Check if it's the last round and if true announce end of the game and winner */
        if (i + 1 == rounds) {
            if (computerScore > playerScore) {
                console.log('computer wins')
                alert(loseGameString)
            } else {
                console.log('player wins')
                alert(winGameString)
            }
        }
        
        
    }
}

game(3);
