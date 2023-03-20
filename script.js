// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var hasLower;
var hasUpper;
var hasNumber;
var hasSpecial;
var conditions = [];
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
    if(Number.isInteger(Number.parseInt(preCheckLength))&& preCheckLength>=8 &&preCheckLength<=128){
      passLength = preCheckLength;
      isValid = true;
      }else{
        alert("Password length must be a valid integer between 8 and 128!")
      }
    }
      hasLower = confirm("Inclue lowercase characters?");
      hasUpper = confirm("Include uppercase characters?");
      hasNumber = confirm("Include numbers?");
      hasSpecial = confirm("Include special characters?");
      conditions = [hasLower, hasUpper, hasNumber, hasSpecial];
  }

function generatePassword(){
  promtUser();
  var passwordString ="";
  for(var i=0;i<passLength;i++){
    var selected= false;
    var currentCondition;

    while(!selected){
      var randomNum = Math.floor(Math.random() * 4);
      if(conditions[randomNum]==true){
        selected =true;
        currentCondition = randomNum;
      }
    }

      switch (currentCondition){
        case 0:
          passwordString+= generateLowerChar();
          return;
        case 1:
          passwordString+= generateUpperChar();
          return;
        case 2:
          passwordString+= generateRandomNumber();
          return;
        case 3:
          passwordString+= generateSpecialChar();
          return;
    }
  }
  return passwordString;
}

function generateLowerChar(){
  var selector = Math.floor(Math.random() * 26);
  var letters = "abcdefghijklmnopqrstuvwzyx"
  return letters.charAt(selector);
}

function generateUpperChar(){
  var returnChar = "";
  returnChar = generateLowerChar();
  return returnChar.toUpperCase();
}

function generateRandomNumber(){
  return Math.floor(Math.random() * 10);
}

function generateSpecialChar(){
  var selector = Math.floor(Math.random() * 18);
  var letters = "!@#$%^&*()<>_+|\?/"
  return letters.charAt(selector);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
