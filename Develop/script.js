// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays of all of the different characters all global variable at top
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var special;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Creating a prompt for the password length
// if length is equal to or greater than 8 let pass, if less than or equal to 128 let pass
//  else give text "Password length needs to be between 8 and 128 characters long"
function userInfo(){ 
  // first TODO get length 
  var length = parseInt(prompt("Password Length"));
  if(length >= 8 && length <=128){
    console.log(length); 
  }
  else{
    alert("Password must be between 8 and 128 characters");
    return null
  }
  var confirmLowercase = confirm("Include lowercase characters");
  var confirmUppercase = confirm("Include uppercase characters");
  var confirmNumeric = confirm("Include numeric characters");
  var confirmSpecial = confirm("Include special characters");


  if(confirmLowercase === true || confirmUppercase === true || confirmNumeric === true || confirmSpecial === true){
    // generate password using all of the above selections
    // maybe include all of the previous stored items 
   }

   else{
    alert("You need to select at least one character type");
    return null 
   }

   var userAnswer = {
    length : length
   }

   return userAnswer;
  } // for main function 

  function generatePassword(){
    var userChoice = userInfo();
    if( confirmLowercase){
      // make a maybe array to concat 
      // at least one needs to be in my other array
      // randomizer for array 
      // call out of randomizer  in each one of the confirm functions 
    } 
  }

  // find a way to use that input as the 
  // create a function to say yes or no to lowercase letters
  
    
    
      // include lowercase in password 
      // assign at least one letter from lowercase to include 
      // then password includes 1< of the letters in the lowercase array
      // use return
   
      // within userInfo
   
  
  // pLength();
  // cLowercase();
  // cUppercase();
  // cNumeric();
  // cSpecial();

  