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
    console.log(typeof getChars)
  // to get parameter selection
  var getParam = paramSamMain.options[paramSamMain.selectedIndex].value;
    console.log(getParam);

  // if function to get the proper alert given parameter selection

  // if selection is letters only:
  if (getParam.value = "dropLtr") {
    // take the string of all letter options and splits it into an array
    var splitLtr = choiceLtr.split(""); // this splits the string into an array, from which I can select password characters
      console.log(splitLtr); // logs it to the console as an array, showing this worked.
      // in here, I need to take the array and (1) add a for loop that loops number of times equal to the character input, and (2) take the returns of that loop into a new a ray, thats (3) combined into a string alerted to the browser.
   }
  // if selection is numbers only:
  else if (getParam.value = "dropNum") {
    // take the string of all number options and splits it into an array
    var splitNum = choiceNum.split(""); // this splits the string into an array, from which I can select password characters
      console.log(splitNum); // does NOT log it to the console - splitNum is returning splitLtr
      // in here, I need to take the array and (1) add a for loop that loops number of times equal to the character input, and (2) take the returns of that loop into a new a ray, thats (3) combined into a string alerted to the browser.
  }
  // if selection is letters and numbers:
  else if (getParam.value = "dropLtrNum") {
    // take the string of letter/number options and splits it into an array
    var splitLtrNum = choiceLtrNum.split(""); // this splits the string into an array, from which I can select password characters
      console.log(splitLtrNum); // does NOT log it to the console - splitLtrNum is returning splitLtr
      // in here, I need to take the array and (1) add a for loop that loops number of times equal to the character input, and (2) take the returns of that loop into a new a ray, thats (3) combined into a string alerted to the browser.
  }
  // if the selection is letters, numbers and characters:
  else if (gegParam.value = "dropLtrNumChar"){
    // take the string of letter/number/character options and splits it into an array
    var splitLtrNumChar = choiceLtrNumChar.split(""); // this splits the string into an array, from which I can select password characters
      console.log(splitLtrNumChar); // does NOT log it to the console - splitLtrNumChar is returning splitLtr
      // in here, I need to take the array and (1) add a for loop that loops number of times equal to the character input, and (2) take the returns of that loop into a new a ray, thats (3) combined into a string alerted to the browser.
  }
  // to show the button works
  alert("omg, the button works!");
});
 