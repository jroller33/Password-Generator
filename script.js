var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var passwordLength = 1;
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const spChar = "@%+\\/'!#$^?:,)({}[]~-_.";

function getPasswordLength() {
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
    passwordLength = prompt("What's the length of your password? (must be between 8 and 128 characters)");
    getPasswordLength();
  }
}

function writePassword(event) {
  event.preventDefault();
  getPasswordLength();

  let lowerCaseQuestion = window.prompt("Do you want lower case letters? Type yes or no");
  let upperCaseQuestion = window.prompt("Do you want upper case letters? Type yes or no");
  let numberQuestion = window.prompt("Do you want numbers? Type yes or no");
  let spCharQuestion = window.prompt("Do you want special characters? Type yes or no");
  
  function generatePassword() {
    let passwordChars = "";
    (lowerCaseQuestion.toLowerCase() == "yes") ? (passwordChars += lowerCaseLetters) : "";
    (upperCaseQuestion.toLowerCase() == "yes") ? (passwordChars += upperCaseLetters) : "";
    (numberQuestion.toLowerCase() == "yes") ? (passwordChars += numbers) : "";
    (spCharQuestion.toLowerCase() == "yes") ? (passwordChars += spChar) : "";

    let password = "";
    for (let i = 0; i < getPasswordLength(); i++) {
      password += passwordChars.charAt(
        Math.floor(Math.random() * passwordChars.length)
      );
    }
    return password;
  }
  passwordText.value = generatePassword();
}
          
generateBtn.addEventListener("click", writePassword);