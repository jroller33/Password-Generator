var generateBtn = document.querySelector("#generate");

function writePassword(event) {
  event.preventDefault();
  let lengthQuestion = window.prompt("What is the length of your password?");
  console.log(lengthQuestion);

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
  const numbers = "0123456789";
  const spChar = "@%+\\/'!#$^?:,)({}[]~-_.";

  let passwordChars = "";

  let lowerCaseQuestion = window.prompt("Do you want lower case letters? Type yes or no");
  let upperCaseQuestion = window.prompt("Do you want upper case letters? Type yes or no");
  let numberQuestion = window.prompt("Do you want numbers? Type yes or no");
  let spCharQuestion = window.prompt("Do you want special characters? Type yes or no");
  if (lowerCaseQuestion.toLowerCase() == "yes") {
    passwordChars += lowerCaseLetters;
  } else if (upperCaseQuestion.toLowerCase() == "yes") {
    passwordChars += upperCaseLetters;
  } else if (numberQuestion.toLowerCase() == "yes") {
    passwordChars += numbers;
  } else if (spCharQuestion.toLowerCase() == "yes") {
    passwordChars += spChar;
  } else {
    console.log('if/else error');
  }
  console.log(passwordChars);
}


var passwordText = document.querySelector("#password");
passwordText.value = password;
generateBtn.addEventListener("click", writePassword);
