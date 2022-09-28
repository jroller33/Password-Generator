var generateBtn = document.querySelector("#generate");

function writePassword(event) {
  event.preventDefault();

  let lengthQuestion = window.prompt("What is the length of the string?");
  console.log(lengthQuestion);
  
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
      // console.log('chooseOptions: ', chooseOptions);
    }
  }
  
  var password = generatePassword(Number(lengthQuestion), chooseOptions);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  function generatePassword(lengthQuestion, array) {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = lowerCaseLetters.toUpperCase();
  
    const numbers = "0123456789";
    const spChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', '[', ']', '~', '-', '_', '.'].join("");
  
    let generateString = "";
  
    for (let i = 0; i < lengthQuestion; ++i) {
      let randomNumberInRange = array[Math.floor(Math.random() * array.length)];

      switch (randomNumberInRange) {
      case 0:
        generateString += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
        console.log(generateString)
        break;
      case 1:
        generateString += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
        console.log(generateString)
        break;
      case 2:
        generateString += numbers[Math.floor(Math.random() * numbers.length)]
        console.log(generateString)
        break;
      case 3:
        generateString += spChar[Math.floor(Math.random() * spChar.length)]
        console.log(generateString)
        break;
      default:
        console.log("error")
      }
    return generateString;
    
    }
  


  }
}

  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
