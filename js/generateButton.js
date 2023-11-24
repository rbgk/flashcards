function Generate() {
    // empty cache before parsing to ensure clean slate every time
    wordList = [];
    defnList = [];
    cardIndex = 0;

    parseInputBox();
}

function parseInputBox() {
    /**
     * Indent shows hierarchy
     * fullSet is the entire set, as inputted by user
     *  cardSet is the individual cards. includes term and defn
     *   cardPair[0] is the word side of the cardSet
     *   cardPair[1] is the definition side of the cardSet
    */
    const fullSet = document.getElementById("inputBox").value;
    if (fullSet == "") {
        // if inputBox is empty
        statusCheck(1);
    } else {
        statusCheck(0);
    }


    // take the fullSet as inputted and split into lines
    const cardSet = fullSet.split("\n");
    
    /**
     * initialize maximum variable by calculating items of array
     * used in overlay for determining when to stop indexing array
     */
    maximum = (cardSet.length-1);


    // as long as the line exists, we will 
    // split each line into a pair of word and definition
    for (let i=0; i<cardSet.length; i++) {
        cardPair = cardSet[i].split(",");

        // add word and defn to respective lists
        // we can do this because the cardPair gets overriden by new pairs of word-defn
        // to get the values, we will call both arrays, and the index must be equivalent
        // TODO: Use Map object?
        wordList.push(cardPair[0]);
        defnList.push(cardPair[1]);
        
        // pre-populate the first card so it exists when user calls the overlay
        flashcard.innerHTML = wordList[0];
    }
}

function statusCheck(statusCode) {
    /**
     * Update the status bar with...
     */
    switch (statusCode) {
        case 0:
            gameState();
            defaultText("Cards generated successfully");

            // cards are generated, authorize overlay access
            overlayAuth = true;
            break;
        case 1:
            dangerText("Error: <br> Input is empty");
            break;
    }
}
