// File reader for imports  
const reader = new FileReader();

/**
 * Import a file of type .csv or .txt
 * Populates the input box if file is not empty and is of the correct type
 */
function importFile() {
    let fileInput = document.getElementById("fileInput");
    let resultTextBox = document.getElementById("inputBox");
    importFlow(fileInput, resultTextBox);
}

/**
 * Select a file to be imported
 * Triggers browser's import file selection
 */
function triggerImportPopup() {
    fileInput.value = "";
    document.getElementById("fileInput").click();
}

/**
 * Trigger import flow 
 * Checks for number of files to make sure only one is selected
 */
function importFlow(fileInput, resultTextBox) {
    if (fileInput.files.length === 1) {
        let selectedFile = fileInput.files[0];
        reader.onload = function (e) {
            populateBox(selectedFile.name.split(".").pop().toLowerCase(), e.target.result, resultTextBox);
        };
        reader.readAsText(selectedFile);
        closeSettings();
    }
}
    
/**
 * Populates the text box
 * Will also check for type again in case of manual override
 */
function populateBox(fileType, fileContent, resultTextBox) { 
    if (fileType === "csv" || fileType === "txt") {
        resultTextBox.value = fileContent;
    } else {
        alert("Invalid file type. Please select a .csv or .txt file.");
    }
}

/**
 * Export a file of type .txt or .csv 
 * Will determine which method of export based on browser compatibility
 */
async function exportFile(fileExtension, mimeType) {
    let textContent = document.getElementById("inputBox").value;
    if (textContent.trim() != "") {
        if (window.showSaveFilePicker) {
            exportSupported(textContent, fileExtension, mimeType);
        } else {
            exportUnsupported(textContent, fileExtension);
        }
    } else {
        closeSettings();
        alert("Input is empty. Please add text before exporting.");
    }
}
 
/**
 * Export a file for browsers that do support File System Access
 * Will allow for selecting file location and name
 */
async function exportSupported(textContent, fileExtension, mimeType) {
    let handle = await window.showSaveFilePicker({
        suggestedName: `flashcards${fileExtension}`,
        types: [{
            accept: {
                [mimeType]: [fileExtension],
            },
        }],
    });
    let writable = await handle.createWritable();
    await writable.write(textContent);
    await writable.close();
}

/**
 * Export a file for browsers that don't support File System Access
 * Makes use of FileSaver to download file
 */
function exportUnsupported(textContent, fileExtension) {
    if (fileExtension == ".csv") {
        saveAs(new Blob([textContent], { type: "text/csv;charset=utf-8" }), "flashcards.csv");
    } else {
        saveAs(new Blob([textContent], { type: "text/plain;charset=utf-8" }), "flashcards.txt");
    } 
}

/**
 * Closes settings modal 
 * Used for both import and export 
 */
function closeSettings() {
    const escapeKeyPress = new KeyboardEvent('keydown', {key: 'Escape', code: 'Escape', keyCode: 27, which: 27});
    document.getElementById('settingsModal').dispatchEvent(escapeKeyPress);
}



