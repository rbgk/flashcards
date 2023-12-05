//File reader for imports  
const reader = new FileReader();

/**
 * Import a file of type .csv or .txt
 * Populates the input box if file is not empty and is of the correct type
 */
function importFile() {
    let fileInput = document.getElementById('fileInput')
    let resultTextBox = document.getElementById('inputBox');
    importFlow(fileInput, resultTextBox)
}

/**
 * Select a file to be imported
 * Triggers browser's import file selection
 */
function triggerImportPopup() {
        fileInput.value = '';
        document.getElementById('fileInput').click()
}

/**
 * Trigger import flow 
 * Checks for number of files to make sure only one is selected
 */
function importFlow(fileInput, resultTextBox) {
    if (fileInput.files.length === 1) {
        let selectedFile = fileInput.files[0]
        reader.onload = function (e) {
            populateBox(selectedFile.name.split('.').pop().toLowerCase(), e.target.result, resultTextBox)
        };
        reader.readAsText(selectedFile);
    }
    else if (fileInput.files.length > 1) {
        alert('Please select only one file.');
    }
}
    
/**
 * Populates the text box
 * Will also check for type again in case of manual override
 */
function populateBox(fileType, fileContent, resultTextBox) { 
    if (fileType === 'csv' || fileType === 'txt') {
        resultTextBox.value = fileContent;
    } else {
        alert('Invalid file type. Please select a .csv or .txt file.');
    }
}

/**
 * Export a file of type .txt
 * Will check to make sure it is not empty 
 */
 function exportTxt() {
    const fileInput = document.getElementById('fileInput')
    const resultTextBox = document.getElementById('inputBox');
    importFlow(fileInput, resultTextBox)
}

/**
 * Export a file of type .csv
 * Will check to make sure it is not empty 
 */
 function exportCsv() {
    const fileInput = document.getElementById('fileInput')
    const resultTextBox = document.getElementById('inputBox');
    importFlow(fileInput, resultTextBox)
}




