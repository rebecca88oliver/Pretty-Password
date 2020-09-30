// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(7,10);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  print.password;
}

// Generates a password from random numbers and letters
function generatePassword(min, max){
  var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
  var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
  var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  return randPassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
