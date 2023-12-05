/**
 * Import a file of type .csv or .txt
 * Populates the input box if file is not empty and is of the correct type
 */
function importFile() {
    const fileInput = document.getElementById('fileInput')
    const resultTextBox = document.getElementById('inputBox');
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
        const selectedFile = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const fileContent = e.target.result;
            const fileType = selectedFile.name.split('.').pop().toLowerCase();
            populateBox(fileType, fileContent, resultTextBox)
        };
        reader.readAsText(selectedFile);
    }
    else if (fileInput.files.length > 1) {
        alert('Please select only one file.');
    } else {
        return
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

