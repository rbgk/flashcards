/**
 * Global Variables
 */


/**
 * gameStatusBar should be used to provide feedback to user
 * 
 * to populate: use gameStatusBar.innerHTML
 */
const gameStatusBar = document.getElementById("gameStatus");


// Define list for words and defns
/**
 * Currently, the program uses 2 separate lists to keep track of words and defns
 * We will call from the lists for displaying on cards
 * (i think)
 */
let wordList = new Array();
let defnList = new Array();


/**
 * define inputBox from html
 * assign placeholder value 
 * using JS to keep html structure orderly
 * 
 * to populate: use inputBox.value
*/
const inputBox = document.getElementById("inputBox");
inputBox.placeholder = `Word 1,Definition 1 \nWord 2,Definition 2 \nWord 3,Definition 3`;

