// Assignment Code
var generateBtn = document.querySelector("#generate");
//Password Generator
function generatePassword(){
  var upper_chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//upper case string which can handel it as array
  var lower_chars="abcdefghijklmnopqrstuvwxyz";//lower case string
  var numeric_chars="0123456789";//numeric string
  var special_chars="!@#$%^&*";//special string
  var password_chars="";// the string which will contain the password characters
  var password="";// the generated password which the function will return
  // getting the password length from the user
  var password_length=prompt("Please enter the lenth of the passwor\nLength of at least 8 characters and no more than 128 characters");
    //in case the user enter worng length, we let him try to enter correct number for 3 times
    for (var i=0;i<2 && (password_length<8 || password_length>128);i++){
      alert("Please enter a correct value for the password length between 8 and 128")
      password_length=prompt("Please enter the lenth of the passwor\nLength of at least 8 characters and no more than 128 characters");
    }
    //in case the user enter worng number for 3 times then we will stop the generating and ask the user to try again
    if (password_length<8 || password_length>128){
      alert("You have 3 wrong tries to enter a correct length for the password\nplease try again by pushing the Generate button again");
      return;
    }
  // if the first characters type is included then we the upper case string to the password string
  var upper_include=confirm("Do you want to include Upper Case letters");
  if(upper_include){
    password_chars += upper_chars;
  }
  // if the first characters type is included then we the lower case string to the password string
  var lower_include=confirm("Do you want to include Lower Case letters");
  if(lower_include){
    password_chars += lower_chars;
  }
  // if the first characters type is included then we the numeric string to the password string
  var numeric_include=confirm("Do you want to include numeric characters");
  if(numeric_include){
    password_chars += numeric_chars;
  }
  // if the first characters type is included then we the special string to the password string
  var special_include=confirm("Do you want to include special characters");
  if(special_include){
    password_chars += special_chars;
  }
  // if none of the characters type is selected then we will stop generating and ask the user to start again
  if(!upper_include && !lower_include && !numeric_include && !special_include){
    alert("You cann't generate a password without at least one character type be selected\nplease try again by pushing the Generate button again");
    return;
  }
  //for loop to add random characters from the password string (password_chars) to the password variable
  for (var i = 0; i < password_length; i++) {
    var randomNumber = Math.floor(Math.random() * password_chars.length);
    password += password_chars[randomNumber];
   }
   //return the generated password
   return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
