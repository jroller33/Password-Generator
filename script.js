var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var passwordLength = 1;
var passwordText = "";
var passwordOptions = {
  lowerCaseQuestion: true,
  lowerCaseArray: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCaseQuestion: true,
  upperCaseArray: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numberQuestion: true,
  numberArray: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharsQuestion: true,
  specialCharsArray: ["!", "#", "%", "^", "*", "+", "-", "_", "?", ".", "~"],
}

function getPasswordLength() {  // GOOD
  // let lengthQuestion = window.prompt("What is the length of your password?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(`pw length: ${passwordLength}`);
  } else {
    passwordLength = prompt("Password length must be between 8 and 128 characters.");
    getPasswordLength();
  }
}




function writePassword(event) {
  event.preventDefault();
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
    for (let i = 0; i < getPasswordLength().lengthQuestion; i++) {
      password += passwordChars.charAt(
        Math.floor(Math.random() * passwordChars.length)
      );
    }
    return password;
  }
  // passwordText.value = generatePassword();
  console.log(generatePassword());
}
          
generateBtn.addEventListener("click", writePassword);