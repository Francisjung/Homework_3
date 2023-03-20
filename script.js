// Assignment Code

/*
NOTE: All console log output is for debugging purposes only.
        They are not at all required for the code to function. 
*/

//Declaring variables for later use
var generateBtn = document.querySelector("#generate");
var passLength;
var hasLower;
var hasUpper;
var hasNumber;
var hasSpecial;
var conditions = [];
// Write password to the #password input
//This function calls the generatePassword function, then prints the result to the browser window.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//Asks the user to input settings which will be used to generate thier password
function promtUser(){
  //This loops asks the user for a valid password length, repeating if the input is invalid. 
  //Once the user inputs a valid password length the loop is broken.
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
    //Uses user input to set some of the variables declared above to thier desired conditions.
    //The results are then stored in an array.
      hasLower = confirm("Inclue lowercase characters?");
      hasUpper = confirm("Include uppercase characters?");
      hasNumber = confirm("Include numbers?");
      hasSpecial = confirm("Include special characters?");
      conditions = [hasLower, hasUpper, hasNumber, hasSpecial];
      console.log("promptUser has successfully run!");
      console.log("Password length is "+passLength);
  }
//This function runs the prompt user function, then uses the data collected from the user to generate a password.
function generatePassword(){
  promtUser();
  //Creates an empty string variable, this will be used to store the characters
  //which will be generated below.
  var passwordString ="";

  //This for loop runs oen time for each character needed, this is represented by the variable passLength.
  for(var i=0;i<passLength;i++){
    var selected= false;
    var currentCondition;
    if(!conditions[0]&&!conditions[1]&&!conditions[2]&&!conditions[3]){
      alert("Cannot generate passowrd, you must select at least one valid character type.");
      return "";
    }
//This loop uses a random number generator to select which kind of character will be generated.
//Each number (0-3) corresponds with a boolean in the conditions array.
//These boolean values represent the 4 types of characters we will use to build our password.
    while(!selected){
      var randomNum = Math.floor(Math.random() * 4);
      if(conditions[randomNum]==true){
        selected =true;
        currentCondition = randomNum;
        console.log("Condition "+randomNum+" selected!")
      }
    }
//Uses a switch statement to run a the corresponding function.
//These functions return a lower case/ upper case/ numeric/ special
//character accordingly.
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
//Once the loop has run (n=passlength) times it returns the completed string.
  console.log("generatePassowrd has completed running!")
  return passwordString;
}
//This function generates a random number, then uses that number to select a letter of the
//alphabet. That letter is then returned by the function.
function generateLowerChar(){
  var selector = Math.floor(Math.random() * 26);
  var letters = "abcdefghijklmnopqrstuvwzyx"
  console.log("generateLowerChar has successfully run! Char generated: "+letters.charAt(selector));
  return letters.charAt(selector);
}
//Calls the generateLowerChar function, capitalizes it and returns it.
function generateUpperChar(){
  var returnChar = "";
  returnChar = generateLowerChar();
  console.log("generateLowerChar has successfully run! Char generated: "+ returnChar.toUpperCase());
  return returnChar.toUpperCase();
}
//Generates a number between 0 and 9 then returns it.
function generateRandomNumber(){
  var randomNum = Math.floor(Math.random() * 10);
  console.log("generateRandomNumber has successfully run! Char generated: "+ randomNum);
  return randomNum;
}
//This function generates a random number, then uses that number to select a special character.
//That letter is then returned by the function.
 function generateSpecialChar(){
  var selector = Math.floor(Math.random() * 18);
  var letters = "!@#$%^&*()<>_+|\?/"
  console.log("generateSpecialChar has successfully run! Char generated: "+letters.charAt(selector));
  return letters.charAt(selector);
}

// Adds an event listener that activates when the buttton on the browser page is pressed.
generateBtn.addEventListener("click", writePassword);
