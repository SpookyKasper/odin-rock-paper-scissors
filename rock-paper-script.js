console.log("Hello World");


/* Create a Rock Paper Scissors game where the player plays against the computer */

/* Create a function that randomly 
gets a integer between 0 and passed argument */

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

/* Create an array object containing 
computer options for the game */

let rockPaSc = new Array('Rock', 'Paper', 'Scissors');

console.log(rockPaSc);
console.log(typeof(rockPaSc));

/* Create a function named 'getUpTo3' that gets 
a number between 0 and 3 */

function getUpTo3() {
    return getRandomInt(3);
};

console.log(getUpTo3());

/* Create a function named 'computerPlay' that randomly 
returns either 'Rock', 'Paper' or 'Scissors' */

function computerPlay() {
    return rockPaSc[getUpTo3()];
}

console.log(computerPlay());
console.log(typeof(computerPlay()));

/* Write a function that plays a single round of 
Rock Paper Scissors, it takes two Parameters '
playerSelection' and 'computerSelection'
and then return a string that declares the winner */

let winString = "You Lose! Paper beats Rock";

function oneRound(playerSelection, computerSelection){

}



