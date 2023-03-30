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
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = lowercase.map(lowercase =>lowercase.toUpperCase())  
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var special;




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
   var userAnswer = {
    length : length,
    lowercase: confirmLowercase,
    uppercase : confirmUppercase,
    numeric : confirmNumeric,
    special : confirmSpecial,
   }
   return userAnswer
  }

  
  
   
 
    
    
 

 
   // for main function 


  
   function randomCharacter(array){
    character = array[Math.floor(Math.random()*array.length)];
    return character;
   }

 
 
  function generatePassword(){
    // cannot be global or will be kept there, or would need to var them again here
    var needed = [];
    var password = [];
    var possible = [];
    // storing the return user answer as a var
    var userInfo = userChoice();
    console.log(userInfo);

    // if user chose lower case characters push one lower case into the needed array
    if(userInfo.lowercase){
      needed.push(randomCharacter(lowercase));
   }

   // if user chose upper case characters push one lower case into the needed array
   if(userInfo.uppercase){
    needed.push(randomCharacter(uppercase));
    
   }
   // if user chose upper case characters push one lower case into the needed array
   if(userInfo.numeric){
    needed.push(randomCharacter(numeric));
    
   }
  // if user chose upper case characters push one lower case into the needed array
   if(userInfo.special){
    needed.push(randomCharacter(special)); 
     
    }
    // for loop putting other possible user chosen characters into the possible array
    for(var i = userInfo.length; i>0; i--){
    
      if(userInfo.lowercase){
         possible.push(randomCharacter(lowercase));
      }

      if(userInfo.uppercase){
       possible.push(randomCharacter(uppercase));
      }

      if(userInfo.numeric){
       possible.push(randomCharacter(numeric));
      }
     
      if(userInfo.special){
       possible.push(randomCharacter(special)); 
       }
      // placing needed and possible into one array together 
      password = needed.concat(possible);
      // setting the password length to the length chosen by user 
      // password will always include at least one of the chosen characters becuase they will be at the front
      password.length = userInfo.length; 

      // creating a function to randomize the password so it doesn't follow a predictable pattern
       function randomPassword(array){
        for(var j = array.length; j>0;j--){
          random = Math.floor(Math.random()*j);
          // swapping the previous indexes of the original array with the indexs of the j array
          [array[array.length], array[j]] = [array[j],array[array.length]];
        }
        return array
       }
       randomPassword(password);
   
       }
      //  turning password from an array to a string
      return password.join("")
      
      }
    // console.log(password)
    // console.log(possible)
    // console.log(userInfo.length)
    
  
    
      


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
   
  
 

