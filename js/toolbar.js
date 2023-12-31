// File contains functions from the toolbar buttons
function formatBold() {
    // append bold tags and provide feedback
    inputBox.value += "<b> </b>";
    defaultText("Wrap <b>bold</b> text between &lt;b&gt; tags &lt;/b&gt;");
}

function formatItalic() {
    // append italic tags and provide feedback
    inputBox.value += "<i> </i>";
    defaultText("Wrap <i>italic</i> text between &lt;i&gt; tags &lt;/i&gt;");
}

function formatUnderlined() {
    // append underline tags and provide feedback
    inputBox.value += "<u> </u>";
    defaultText("Wrap <u>underlined</u> text between &lt;u&gt; tags &lt;/u&gt;");
}

function formatTextWrap() {
    // user can choose wrapping style
    // css defaults to nowrap
    // first case value is default with javascript
    switch (inputBox.style.whiteSpace) {
        case "":
            inputBox.style.whiteSpace = "normal";
            defaultText("Text wrap on")
            break;
        case "normal":
            inputBox.style.whiteSpace = "nowrap";
            defaultText("Text wrap off")
            break;
        case "nowrap":
            inputBox.style.whiteSpace = "normal";
            defaultText("Text wrap on")
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
