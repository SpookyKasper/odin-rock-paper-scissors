/*---------------------------------- Create a Rock Paper Scissors game where the player plays against the computer --------------------------------*/

/* This function plays a single round of Rock Paper Scissors, it 
takes two parameters 'playerPick' and 'botPick',
compares them and return an adapted string. 

/* Randomly returns an integer between 0 and passed argument */
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

/* Contains the 3 computer options for the game */
let rpsArray = ['Rock', 'Paper', 'Scissors'];

/* Uses 'getRandomInt' to randomly 
return either 'Rock', 'Paper' or 'Scissors' from 'rpsArray' */
function computerPlay() {
    return rpsArray[getRandomInt(3)];
}

// Declare a variable named gameIsOver of type boolean with initial value of false
let gameIsOver = false;
let startString = `Let's go! choose your fighter!`;
/* Declares score variables of type number with initial value of 0 */
let computerScore = 0;
let playerScore = 0;

// Declares a function named restart to reset the game
function restart() {
    gameIsOver = false;
    resultBox.textContent = startString;
    computerScore = 0;
    playerScore = 0;
    resultBox.style.color = 'black';
}



/* One Round: Compare the two selections and return adapted string */
function oneRound(playerPick, botPick) {
    
    /* Assigns to botPick the result of computerPlay function */
    botPick = computerPlay();
    
    
    let nl = `\r\n`
    /* Declares variables of type string with initial value of respectively winning string, tie and loosing string*/
    let selString = `You picked ${playerPick} the computer picked ${botPick}`;
    let tieString = nl + "It's a tie!";
    let winString = nl + `You won the round! ${playerPick} beats ${botPick}`;
    let loseString = nl + `You lost this round bro... ${botPick} beats ${playerPick}`;
    let winGameString = nl + `Congratulations! The game is over and you Won! Wouhouuouo!!!`;
    let loseGameString = nl + `Damn bro you where so close! try again!`;
    let gameOverString = `Game is over! if you want to play another time click the restart button!`;

    resultBox.style.color = 'black';
    resultBox.textContent = selString;

    if(gameIsOver){
        resultBox.style.color = 'black';
        resultBox.style.border = 'none';
        resultBox.textContent = gameOverString;
        return;
    }
    /* Compares inputs and returns a string depending on who wins */ 
    if (playerPick == botPick) {
        resultBox.textContent += tieString + nl + `Computer Score: ${computerScore}` + nl + `Player Score: ${playerScore}`;;
        return 'tie';
    } else if ( (playerPick == 'Rock' && botPick == 'Paper') || (playerPick == 'Paper' && botPick == 'Scissors') || (playerPick == 'Scissors' && botPick == 'Rock')){
        ++computerScore;
        resultBox.style.color = 'red';
        if (computerScore >= 5){
            gameIsOver = true;
            resultBox.style.border = 'solid red';
            resultBox.textContent += loseGameString + nl + `Computer Score: ${computerScore}` + nl + `Player Score: ${playerScore}`;;
            return;
        } else {
            resultBox.textContent += loseString + nl + `Computer Score: ${computerScore}` + nl + `Player Score: ${playerScore}`;;
            return;
        }
    } else {
        ++playerScore;
        resultBox.style.color = 'green';
        if(playerScore >= 5){
            gameIsOver = true;
            resultBox.style.border = 'solid green';
            resultBox.textContent += winGameString + nl + `Computer Score: ${computerScore}` + nl + `Player Score: ${playerScore}`;;
            return;
        } else {
            resultBox.textContent += winString + nl + `Computer Score: ${computerScore}` + nl + `Player Score: ${playerScore}`;
            return;
        }

    }    
}





/* Create function named 'game()' that 
runs 'oneRound' the passed number of times */
function game(rounds){
    for (var i = 0; i < rounds; i++){
        /* Declares a variable named roundResult of type string that
        stores current result of oneRound() */
        let roundResult = oneRound();

        /* Declares winning or losing the game variables of type string 
        with declared inital value */

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