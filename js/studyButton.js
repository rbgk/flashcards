const game = document.getElementById("game");

function Study() {
    // check if cards have been generated
    // if not, prevent launch
    gameState(overlayAuth);
}

function gameState(overlayAuth) {
    // prevent the user from starting a game without completing prior checks
    switch (overlayAuth) {
        case true:
            // enable
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
     */
    defaultText("Navigate with arrows <br> Click card to flip");
    game.style.display = "flex";
    cardIndexCheck();
}

function Close() {
    /**
     * Closes the overlay
     */
    game.style.display = "none";
    defaultText("Create another set or study again!");
}
