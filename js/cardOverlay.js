// arrows navigation
const arrow_L = document.getElementById("arrow-decrease");
const arrow_R = document.getElementById("arrow-increase");

// card button
let cardFace = false; // false = word | true = defn

// used to traverse list
let cardIndex = 0;

// define list minimum and maximum
const minimum = 0;
let maximum;

function flipCard() {
    /**
     * User clicks card to display between word and defn
     * define a variable to track cardface
     * there are only 2 sides, a word and a defn
     * we can use a boolean
     * is cardFace currently flipped? 
     *  false: display defn
     *  true: display word
     */
    (cardFace ? displayWord() : displayDefn());
}

function displayWord() {
    // update cardFace
    cardFace = false;
    
    // display word
    if (wordList[cardIndex] != undefined) {
        flashcard.innerHTML = wordList[cardIndex];
    }
}

function displayDefn() {
    // update cardFace
    cardFace = true;

    // display defn
    flashcard.innerHTML = defnList[cardIndex];
    if (defnList[cardIndex] != undefined) {
        flashcard.innerHTML = defnList[cardIndex];
    } else {
        flashcard.innerHTML = "ERROR: <br> No definition found <br> Missing a comma?";
    }
}

function decreaseCard() {
    // check if index is at minimum
    // if not 
    //  decrease cardIndex

    arrow_R.classList.remove("btn-secondary");
    arrow_R.disabled = false;

    if (cardIndex != minimum) {
        cardFace = false; // reset the card to display a word
        cardIndex--; // decrement the index to display proper value
        flashcard.innerHTML = wordList[cardIndex]; // output the value
    }
    cardIndexCheck();
}

function increaseCard() {
    // check if index is at maximum
    // if not
    //  increase cardIndex
    
    arrow_L.classList.remove("btn-secondary");
    arrow_L.disabled = false;
    
    if (cardIndex != maximum) {
        cardFace = false; // reset the card to display a word
        cardIndex++; // increment the index to display proper value
        flashcard.innerHTML = wordList[cardIndex]; // output the value
    }
    cardIndexCheck();
}

function cardIndexCheck() {
    /**
     * check index with domain
     * disable buttons as needed
     */
    if (minimum == maximum) {
        bothArrowsDisable();
    } else if (cardIndex == minimum) {
        arrow_L_Disable();
    } else if (cardIndex == maximum) {
        arrow_R_Disable();
    }
}

/**
 * Basic semantics
 * Does what the function says
 * included btn-secondary to better visually indicate lock
 */
function bothArrowsDisable() {
    arrow_L.disabled = true;
    arrow_R.disabled = true;
    arrow_L.classList.add("btn-secondary");
    arrow_R.classList.add("btn-secondary");
}
function arrow_L_Disable() {
    arrow_L.disabled = true;
    arrow_R.disabled = false;
    arrow_L.classList.add("btn-secondary");
    arrow_R.classList.remove("btn-secondary");
}
function arrow_R_Disable() {
    arrow_L.disabled = false;
    arrow_R.disabled = true;
    arrow_L.classList.remove("btn-secondary");
    arrow_R.classList.add("btn-secondary");
}

/**
 * Allows for keyboard input on buttons
 * Requires that the study overlay to be active
 */
document.addEventListener('keyup', function(event) {
    if (game.style.display == "flex") {
        if (event.code === 'Space' || event.code === 'ArrowUp' || event.code === 'ArrowDown') {
            flipCard();
        } else if (event.code === 'ArrowLeft') {
            decreaseCard();
        } else if (event.code === 'ArrowRight') {
            increaseCard();
        }     
    }
});
