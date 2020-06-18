// This is the global variable set with the different word parameters
var choiceLtr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var choiceNum = "0123456789";
var choiceLtrNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var choiceLtrNumChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$%^&_";
// This is the global variable set containing the input for the number of characters and the submit button
var numChars = document.querySelector("#passLength");
var submitSam = document.querySelector("#submitSam");
// This is the global variable containing the parameter drop-down
var paramSamMain = document.querySelector("#selectSam"); 

submitSam.addEventListener("click", function() {
  // to get number of characters
  var getChars = parseInt(numChars.value);
    console.log(typeof getChars);
  // to get parameter selection
  var getParam = paramSamMain.options[paramSamMain.selectedIndex].value;
    console.log(getParam);

  // if function to get the proper alert given parameter selection

  // if selection is letters only:
  if (getParam === "dropLtr") {
    // take the string of all letter options and splits it into an array
    var splitLtr = choiceLtr.split(""); // this splits the string into an array, from which I can select password characters;
    var password = [];
    for (i = 0; i < getChars; i++) {
      password.push(splitLtr[Math.floor(Math.random() * 52)])
    };
    console.log(password.join(""));
    if (getChars < 8) {
      alert("Your password must be greater than 8 characters long.")
    }
    else if (getChars > 128) {
      alert("Your password must be less than 128 characters long.")
    }
    else {
    alert("Your password is " + password.join(""));
    }
  }
  // if selection is numbers only:
  else if (getParam === "dropNum") {
    // take the string of all number options and splits it into an array
    var splitNum = choiceNum.split(""); // this splits the string into an array, from which I can select password characters
    var password = [];
    for (i = 0; i < getChars; i++) {
      password.push(splitNum[Math.floor(Math.random() * 10)])
    }
    console.log(password.join(""));
    if (getChars < 8) {
      alert("Your password must be greater than 8 characters long.")
    }
    else if (getChars > 128) {
      alert("Your password must be less than 128 characters long.")
    }
    else {
    alert("Your password is " + password.join(""));
    }
  }
  // if selection is letters and numbers:
  else if (getParam === "dropLtrNum") {
    // take the string of letter/number options and splits it into an array
    var splitLtrNum = choiceLtrNum.split(""); // this splits the string into an array, from which I can select password characters
    var password = [];
    for (i = 0; i < getChars; i++) {
      password.push(splitLtrNum[Math.floor(Math.random() * 62)]);
    }
    console.log(password.join(""));
    if (getChars < 8) {
      alert("Your password must be greater than 8 characters long.")
    }
    else if (getChars > 128) {
      alert("Your password must be less than 128 characters long.")
    }
    else {
    alert("Your password is " + password.join(""));
    }
  }
  // if the selection is letters, numbers and characters:
  else if (getParam === "dropLtrNumChar") {
    // take the string of letter/number/character options and splits it into an array
    var splitLtrNumChar = choiceLtrNumChar.split(""); // this splits the string into an array, from which I can select password characters
    var password = [];
    for (i = 0; i < getChars; i++) {
      password.push(splitLtrNumChar[Math.floor(Math.random() * 73)]);
    }
    console.log(password.join(""));
    if (getChars < 8) {
      alert("Your password must be greater than 8 characters long.")
    }
    else if (getChars > 128) {
      alert("Your password must be less than 128 characters long.")
    }
    else {
    alert("Your password is " + password.join(""));
    }
  }
  
});
 