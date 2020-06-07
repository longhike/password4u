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
    var splitLtr = choiceLtr.split("");
      console.log(splitLtr);
      var ltrPass = splitLtr[Math.floor(Math.random()) * splitLtr.length];
      alert(ltrPass.toString);

   }
    
  // if selection is numbers only:
  else if (getParam.value = "dropNum") {

  }
  // if selection is letters and numbers:
  else if (getParam.value = "dropLtrNum") {

  }
  // if the selection is letters, numbers and 
  else if (gegParam.value = "dropLtrNumChar"){

  }

  // alert("omg, the button works!");
});

// ex function to substring

// function myFunction() {
//     var str = "Hello world!";
//     var res = str.substring(0, 10);
//     document.getElementById("demo").innerHTML = res;
//   }


// console.log(choiceLtrNumChar.split(""));
// console.log(typeof numChars);
 