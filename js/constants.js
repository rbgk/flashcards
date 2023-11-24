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


/**
 * Clear out localStorage
 * Manually reset inputBox because User can see changes
 */
function factoryReset() {
    localStorage.clear();
    inputBox.value = "";
    alert(`Data cleared!`);
}


/**
 * Define flashcard to populate with word and defn
 */
let flashcard = document.getElementById("cardFace");


/**
 * Reduces the bloat in User Feedback messages on gameStatusBar
 *  gameStatusBar.innerHTML = "user feedback text"; // write text
 *  gameStatusBar.style.color = "red";              // define color
 * Instead of defining and overwriting each time, we'll use a function to automate this process
 */
function dangerText(message) {
    gameStatusBar.classList.add("danger");
    gameStatusBar.classList.remove("default");
    gameStatusBar.innerHTML = message;
}
function defaultText(message) {
    gameStatusBar.classList.add("default");
    gameStatusBar.classList.remove("danger");
    gameStatusBar.innerHTML = message;
}


/**
 * Key to unlocking the game overlay
 * A boolean only set to true upon successful inputBox parsing
 */
let overlayAuth = false;


/**
 * When user zooms in or out after the overlay is launched,
 * the overlay does not correctly scale to block content
 */
function overlayAesthetics() {
    let webHeight = document.documentElement.scrollHeight;
    webHeight = (webHeight-1)+"px";
    document.getElementById("game").style.height = webHeight;
}

