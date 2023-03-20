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
  alert(password);
  passwordText.value = password;

}
function promtUser(){
  var isValid = false;
  while(!isValid){
    var preCheckLength = prompt("Please enter a password length (minimum 8 characters/ maximum 128)");
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
      console.log("promptUser has successfully run!");
      console.log("Password length is "+passLength);
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
        console.log("Condition "+randomNum+" selected!")
      }
    }

      switch (currentCondition){
        case 0:
          passwordString+= generateLowerChar();
          console.log(passwordString);
          break;
        case 1:
          passwordString+= generateUpperChar();
          console.log(passwordString);
          break;
        case 2:
          passwordString+= generateRandomNumber();
          console.log(passwordString);
          break;
        case 3:
          passwordString+= generateSpecialChar();
          console.log(passwordString);
          break;
    }
    console.log("GeneratePassword has successfully run "+i+" times!");
  }

  console.log("generatePassowrd has completed running!")
  return passwordString;
}

function generateLowerChar(){
  var selector = Math.floor(Math.random() * 26);
  var letters = "abcdefghijklmnopqrstuvwzyx"
  console.log("generateLowerChar has successfully run! Char generated: "+letters.charAt(selector));
  return letters.charAt(selector);
}

function generateUpperChar(){
  var returnChar = "";
  returnChar = generateLowerChar();
  console.log("generateLowerChar has successfully run! Char generated: "+ returnChar.toUpperCase());
  return returnChar.toUpperCase();
}

function generateRandomNumber(){
  var randomNum = Math.floor(Math.random() * 10);
  console.log("generateRandomNumber has successfully run! Char generated: "+ randomNum);
  return randomNum;
}

function generateSpecialChar(){
  var selector = Math.floor(Math.random() * 18);
  var letters = "!@#$%^&*()<>_+|\?/"
  console.log("generateSpecialChar has successfully run! Char generated: "+letters.charAt(selector));
  return letters.charAt(selector);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
