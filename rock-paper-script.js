
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
uses 'getUpto3' and 
randomly returns either 'Rock', 'Paper' or 'Scissors' */

function computerPlay() {
    return rockPaSc[getRandomInt(3)];
}

/* Declares a variable of type string that
stores the result of 'computerPlay' */

let computerPick = computerPlay();

console.log(computerPick);

/* Write a function that plays a single round of 
Rock Paper Scissors, it takes two Parameters'
playerSelection' and 'computerSelection'
and then return a string that declares the winner */

/* Declares winning string, tie and loosing string */

let winString = "You Win! *playerSelection* beats *computerSelection* ";
let tieString = "It's a tie!"
let loseString = "You Lose *computerSelection* beats *playerSelection* "

/* Declares a variable named 'playerSelection' of type string to
stores the userInputed string */

let playerPick = prompt('Rock Paper or Sciscors ?');

/* Create a function named 'capitalizeStrings' to 
capitalize strings */

function capitalizeStrings(someString) {
    return someString[0].toUpperCase() + someString.slice(1).toLowerCase();
}

console.log(capitalizeStrings(playerPick));

/* Declares a variable called 'playerSelectionCap' of type string to 
store capitalized playerSelection */

let playerPickCap = capitalizeStrings(playerPick);

console.log(playerPickCap);


/* Reminder of rockPaSc array positions
0 = Rock
1 = Paper
2 = Scissors */


function oneRound(playerSelection, computerSelection){
    if (playerSelectionCap == computerSelection) {
        return tieString;
    } else if (playerSelection == 0 && computerSelection == 1) {
        /* computer wins */
    } else if (playerSelection == 1 && computerSelection == 0) {
        /* player wins */
    } else if (playerSelection == 1 && computerSelection == 2) {
        /* computer wins */
    } else if (playerSelection == 2 && computerSelection == 0) {
        /* computer wins */
    } else if (playerSelection == 2 && computerSelection == 1) {
            /* computer wins */
    
    return winString
}
