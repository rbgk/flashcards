let wordList = new Array();
let defnList = new Array();
const gameStatusBar = document.getElementById("gameStatus");

function parseInput() {
    /**
     * Indent shows hierarchy
     * fullSet is the entire set, as inputted by user
     *  cardSet is the individual cards. includes term and defn
     *   cardPair is the word side of the cardSet
     *   cardPair is the definition side of the cardSet
    */
    const fullSet = document.getElementById('inputBox').value;
    console.log(fullSet);


    if (fullSet == "") {
        // if inputBox is empty
        statusCheck(1);
    } else {
        statusCheck(0);
    }


    // take the fullSet as inputted and split into lines
    const cardSet = fullSet.split("\n");

    // as long as the line exists, we will 
    // split each line into a pair of word and definition
    for (let i=0; i<cardSet.length; i++) {
        var cardPair = cardSet[i].split(",");

        // add word and defn to respective lists
        // we can do this because the cardPair gets overriden by new pairs of word-defn
        // to get the values, we will call both arrays, and the index must be equivalent
        // TODO: Use Map object?
        wordList.push(cardPair[0]);
        defnList.push(cardPair[1]);
    }
}

function statusCheck(statusCode) {
    switch (statusCode) {
        case 0:
            return gameStatusBar.innerHTML = "Cards generated successfully";
        
        case 1: 
            return gameStatusBar.innerHTML = "Error: Please check your input format";

        default:
            return gameStatusBar.innerHTML = "Unable to verify status"
    } 
}
