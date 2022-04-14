console.log("Hello World");


/*---------------------------------- Create a Rock Paper Scissors game where the player plays against the computer --------------------------------*/

/* Create a function named 'getRandomInt' that 
randomly returns an integer between 0 and passed argument */

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

/* Create an array object named 'rockPaSc' that
contains the 3 computer options for the game */

let rockPaSc = new Array('Rock', 'Paper', 'Scissors');

console.log(rockPaSc);
console.log(typeof(rockPaSc));

/* Create a function named 'computerPlay' that 
uses 'getUpto3' and 
randomly returns either 'Rock', 'Paper' or 'Scissors' */

function computerPlay() {
    return rockPaSc[getRandomInt(3)];
}

console.log(computerPlay());
console.log(typeof(computerPlay()));

/* Write a function that plays a single round of 
Rock Paper Scissors, it takes two Parameters '
playerSelection' and 'computerSelection'
and then return a string that declares the winner */

/* Declares winning string, tie and loosing string */

let winString = "You Win! *playerSelection* beats *computerSelection* ";
let tieString = "It's a tie!"
let loseString = "You Lose *computerSelection* beats *playerSelection* "

/* Reminder of rockPaSc array positions
0 = Rock
1 = Paper
2 = Scissors
*/

let playerSelection = prompt('Rock Paper or Sciscors ?');

console.log(playerSelection);

function oneRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return tieString;
    } else if (playerSelection === 0 && computerSelection === 1){
        /* computer wins */
    }
    return winString
}

console.log(oneRound());



