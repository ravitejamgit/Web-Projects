
// Special symbols array
const symbols = new Array("!", "@", "#", "$", "&", "*", "(", ")");

// Function to reset the page
function reset() {
    window.location.reload();
    return;
}


// Function which generates the password
function generatePassword() {
    
    // Linking all the elements in html
    let inputField = document.getElementById("generatedPassword");
    let len = document.getElementById("length").value;
    let lowercaseCharacter = document.getElementById("lowercase");
    let uppercaseCharacter = document.getElementById("uppercase");
    let digits = document.getElementById("digits");
    let specialSymbols = document.getElementById("specialsymbols");
    let passwordGenerated = "";
    
    // If the user is not selected any of the cirteria to generate password.
    if(!lowercaseCharacter.checked && !uppercaseCharacter.checked && !digits.checked && !specialSymbols.checked)
    {
        alert("Please select any one the checkbox.!!");
        return;
    }

    // As long as the length of the password is less than the specified length
    while(passwordGenerated.length <= len) 
    {
        // Getting random value into switch
        switch(getRandomInteger(0, 4))
        {
            case 1 : 
                    // Appending lowercase alphabet
                    if(lowercaseCharacter.checked)
                        passwordGenerated += String.fromCharCode(getRandomInteger(97, 121));
                    break;

            case 2 : 
                    // Appending uppercase alphabet
                    if(uppercaseCharacter.checked)
                        passwordGenerated += String.fromCharCode(getRandomInteger(65, 89));
                    break;

            case 3 : 
                    // Appending digit
                    if(digits.checked)
                        passwordGenerated += String.fromCharCode(getRandomInteger(48, 56));
                    break;

            case 4 : 
                    // Appending special symbol
                    if(specialSymbols.checked)
                        passwordGenerated += symbols[getRandomInteger(0, symbols.length - 2)];
                    break;
        }
    }
    
    // Showing the generated password in result field
    inputField.value = passwordGenerated.substring(0, len);

    //console.log(passwordGenerated);
    
    // Returning the home
    return;
}


// Function to get the random integer inclusive both min and max values
function getRandomInteger(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}


// Function to copy the text into clipboard
function copy() {
    let copyVar = document.getElementById("generatedPassword");
    navigator.clipboard.writeText(copyVar.value);
}