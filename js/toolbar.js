// File contains functions from the toolbar buttons
function formatTextWrap() {
    // user can choose wrapping style
    // css defaults to nowrap
    // first case value is default with javascript
    switch (inputBox.style.whiteSpace) {
        case "":
            inputBox.style.whiteSpace = "normal";
            break;
        case "normal":
            inputBox.style.whiteSpace = "nowrap";
            break;
        case "nowrap":
            inputBox.style.whiteSpace = "normal";
            break;
    }
}

function saveToLocal() {
    // save value directly from inputBox.value
    // do not save empty input
    if (inputBox.value !== "") {
        localStorage.setItem("savedSet", inputBox.value);
        defaultText("Set saved. Load it anytime");
    } else {
        // check if there is a saved set
        if (localStorage.getItem("savedSet") !== null) {
            dangerText("Input is empty <br> Create a set to save or load saved set");
        } else {
            dangerText("Input is empty <br> Create a set to save");
        }
    }
}


function loadSavedSet() {
    // populate inputBox with saved set
    // value is exactly as user inputted
    let savedSet = localStorage.getItem("savedSet");
    if (savedSet === null || savedSet === "") {
        dangerText("No saved set <br> Create or upload");
    } else {
        inputBox.value = savedSet;
        defaultText("Saved set loaded");
    }
}


function clearInput() {
    // clear the inputBox
    inputBox.value = "";
    defaultText("Text box cleared");
}
