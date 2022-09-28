var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function writePassword(event) {
  event.preventDefault();
  let lengthQuestion = window.prompt("What is the length of your password?");
  console.log(lengthQuestion);

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const spChar = "@%+\\/'!#$^?:,)({}[]~-_.";

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