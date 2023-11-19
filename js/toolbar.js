// File contains functions from the toolbar buttons

function saveToLocal() {
    // save value directly from inputBox.value
    // do not save empty input
    if (inputBox.value !== "") {
        localStorage.setItem("savedSet", inputBox.value);
        gameStatusBar.style.color = "white";
        gameStatusBar.innerHTML = "Set saved. Load it anytime";
    } else {
        gameStatusBar.style.color = "red";
        // check if there is a saved set
        if (localStorage.getItem("savedSet") !== null) {
            gameStatusBar.innerHTML = "Input is empty <br> Create a set to save or load saved set";
        } else {
            gameStatusBar.innerHTML = "Input is empty <br> Create a set to save";
        }
    }
}


function loadSavedSet() {
    // populate inputBox with saved set
    // value is exactly as user inputted
    let savedSet = localStorage.getItem("savedSet");
    if (savedSet === null || savedSet === "") {
        gameStatusBar.style.color = "red";
        gameStatusBar.innerHTML = "No saved set <br> Create or upload";
    } else {
        inputBox.value = savedSet;
        gameStatusBar.style.color = "white";
        gameStatusBar.innerHTML = "Saved set loaded";
    }
}


function clearInput() {
    // clear the inputBox
    inputBox.value = "";
    gameStatusBar.style.color = "white";
    gameStatusBar.innerHTML = "Text box cleared";
}
