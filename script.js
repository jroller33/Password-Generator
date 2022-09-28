var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function writePassword(event) {
  event.preventDefault();
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const spChar = "@%+\\/'!#$^?:,)({}[]~-_.";
  
  function passwordLength() {
    let lengthQuestion = window.prompt("What is the length of your password?");
    if (lengthQuestion < 8 || lengthQuestion > 128) {
      window.alert("Password length must be between 8 and 128 characters. Try again");
      passwordLength();
    }
    return lengthQuestion;
  }
  passwordLength();
  
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
    for (let i = 0; i < lengthQuestion; i++) {
      password += passwordChars.charAt(
        Math.floor(Math.random() * passwordChars.length)
      );
    }
    return password;
  }
  passwordText.value = generatePassword();
}
          
generateBtn.addEventListener("click", writePassword);