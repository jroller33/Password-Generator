// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();

  let lengthQuestion = window.prompt("What is the length of the string?");
  console.log(lengthQuestion * 2);
  
  let chooseOptions = [];
  let questionArray = [
    "Do you want lower case?",
    "Do you want upper case?",
    "Do you want numeric characters?",
    "Do you want special characters?"
  ];

  for (let i = 0; i < questionArray.length; ++i) {
    let userPrompt = window.prompt(questionArray[i] + "Type yes or no");

    if (userPrompt.toLowerCase() == "yes") {
      chooseOptions.push(i);
      console.log('chooseOptions: ', chooseOptions);
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword(lengthQuestion, array) {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();

  const numbers = "0123456789";
  const spChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', '[', ']', '~', '-', '_', '.'].join("");

  let generateString = "";

  // for (let i = 0; i < lengthQuestion)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
