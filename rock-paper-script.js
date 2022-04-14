console.log("Hello World");


/* Create a rock paper scissors game where the player plays against the computer */

/* Create a function that randomly gets a integer between 0 and passed argument */

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

/* Create an array object containing computer options for 'computerPlay' function */

let rockPaSc = new Array('Rock', 'Paper', 'Scissors');

console.log(rockPaSc);
console.log(typeof(rockPaSc));

/* Create a function named 'getUpTo3' thant gets a number between 0 and 3 */

function getUpTo3() {
    return getRandomInt(3);
};

/* Create a function named 'computerPlay' that randomly returns either 'Rock', 'Paper' or 'Scissors' */

console.log(getUpTo3());




