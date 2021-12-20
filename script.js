// Assignment code here
const upCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const loCase = "qwertyuiopasdfghjklzxcvbnm";
const numb = "1234567890";
const spec = "!@#$%^&*(){}[]=<>/,.";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  do{
    var passWordlenght = parseInt(prompt("Please enter a number between 8 and 128", ""));
}while(isNaN(passWordlenght) || passWordlenght > 64 || passWordlenght < 8);


do{
  alert("One special character;please");
  specChar = confirm("One special characters, please!");
  numType = confirm("One intiger, please!");
  upCharType = confirm("One uppercase character,please!");
  loCharType = confirm("One lowercase character,please!");
}while (!upCharType && !loCharType && !numType && !specChar);
  
  var password = generatePassword(upCharType,loCharType,numType,specChar,passWordlenght);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Generate Password function
function generatePassword(upCharType,loCharType,numType,specChar,passWordlenght) {
  var passWordValue = "";
if(upCase !==null || loCase!==null || numb!==null || spec!==null){

//while loop randomly 
 
   while(passWordValue.length < passWordlenght){
     if(upCharType){
     var randNumbUp = Math.floor(Math.random() * upCase.length);
   passWordValue += upCase.substring(randNumbUp, randNumbUp +1);
     }
   console.log(passWordValue);
     if(loCharType){
 var randNumbLo = Math.floor(Math.random() * loCase.length);
   passWordValue += loCase.substring(randNumbLo, randNumbLo +1);
    }
    if(numType){
 var randNumbNum = Math.floor(Math.random() * numb.length);
   passWordValue += numb.substring(randNumbNum, randNumbNum +1);
    }
    if(specChar){
 var randNumbSpec = Math.floor(Math.random() * spec.length);
   passWordValue += spec.substring(randNumbSpec, randNumbSpec +1);
  }
  
}
}else{
console.log("Please enter the minimum required password criteria! ",+password);
}
return passWordValue;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

