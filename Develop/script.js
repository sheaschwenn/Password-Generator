// Pseudo code 
// create a prompt asking for password length 
// make sure that it has to be between 8 and 128 characters 
// ask if user wants lower case upper case numbers and or special characters
// store these answers in variables 
// use these answers to put together a password that meets all of the users criteria (has at least one of all of the chosen charactert)
// length-number of chosen characters = number of random 
// create a four loop to fill up length 
// create if else statements for each of the character options 
// make sure that if user chooses then at least one gets put into the password
// else none get put in 
// 

// Assignment Code
// create arrays of all of the different characters all global variable at top
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var special;
var characterNum = 0;

var generateBtn = document.querySelector("#generate");




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

function userChoice(){ 

        // length has stored the password length as an integer
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


    if(confirmLowercase === true || 
       confirmUppercase === true || 
      confirmNumeric === true || 
      confirmSpecial === true){
    // generate password using all of the above selections
   }

   else{
    alert("You need to select at least one character type");
    return null 
   }

   if( confirmLowercase){
    characterNum = characterNum+1;
   }
   if(confirmUppercase){
    characterNum = characterNum+1;
   }
   if(confirmNumeric){
    characterNum = characterNum+1;
   }
  
   if(confirmSpecial){
    characterNum = characterNum+1;
    
    }
    console.log(characterNum)
  function randomGen(){
    var random = Math.floor(Math.random()*length-characterNum)
    
    }

   var userAnswer = {
    length : length,
    lowercase: confirmLowercase,
    uppercase : confirmUppercase,
    numeric : confirmNumeric,
    special : confirmSpecial,
   }

   return userAnswer;
  } // for main function 


  
  

 
 
  function generatePassword(){
    var userInfo = userChoice();
   
    }
    
      


      // make a maybe array to concat 
      // at least one needs to be in my other array
      // randomizer for array 
      // call out of randomizer  in each one of the confirm functions 
    
  
  // find a way to use that input as the 
  // create a function to say yes or no to lowercase letters
  
    
    
      // include lowercase in password 
      // assign at least one letter from lowercase to include 
      // then password includes 1< of the letters in the lowercase array
      // use return
   
      // within userInfo
   
  
 

