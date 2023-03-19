// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var hasLower;
var hasUpper;
var hasNumber;
var hasSpecial;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function promtUser(){
  var isValid = false;
  while(!isValid){
    var preCheckLength = prompt("Please enter a password length (minimum 8 characters)");
    if(Number.isInteger(preCheckLength)){
      passLength = preCheckLength;
      isValid = true;
      }else{
        alert("Password length must be a valid integer!")
      }
      hasLower = confirm("Inclue lowercase characters?");
      hasUpper = confirm("Include uppercase characters?");
      hasNumber = confirm("Include numbers?");
      hasSpecial = confirm("Include special characters?");
  }
}

function generatePassword(){
  for(var i=0;i<passLength;i++){
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
