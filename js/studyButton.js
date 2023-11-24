const game = document.getElementById("game");

function Study() {
    // check if cards have been generated
    // if not, prevent launch
    // cardIndex = 0;
    // arrow_R.disabled = false;
    // console.log("unlock right");
    
    gameState(overlayAuth);
    // cardIndexCheck();
}

function gameState(overlayAuth) {
    // prevent the user from starting a game without completing prior checks
    switch (overlayAuth) {
        case true:
            // enable
            aesthetics();
            launchOverlay();
            break;
        case false:
            // tell user to generate the cards
            dangerText("Generate Cards!");
            break;
        default:
            dangerText("Unable to verify gameState status");
            break;
    }
}

function launchOverlay() {
    /**
     * User clicks study button
     * button should open up the flashcards in a modal that cannot be accidentally escape keyed
     *  modal takes up majority of the screen 
     * 
     * 
     */
    defaultText("Navigate with arrows <br> Click card to flip");
    game.style.display = "flex";
    // arrow_L.disabled = true;
    cardIndexCheck();
}

function Close() {
    /**
     * Closes the overlay
     */
    game.style.display = "none";
    defaultText("Create another set or study again!");
}
