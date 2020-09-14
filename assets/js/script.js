var choice = {
  letter: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  letnum: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  letnumchar: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$%^&_"
}
// number of characters div
var numChars = document.querySelector("#passLength");
// parameter div
var passparam = document.getElementById("_select"); 
// submit button div
var submBtn = document.querySelector("#_submit");
// hidden divs
var warning = document.getElementById('warning')
var result = document.getElementById('_result')

var password = [];

submBtn.addEventListener("click", function() {
  clearDivs()
  // to get number of characters
  var getChars = parseInt(numChars.value);

  // to get parameter selection
  var getParam = passparam.options[passparam.selectedIndex].value;

  // if selection is letters only:
  if (getParam === "dropLtr") {
    doSplit(getChars, choice.letter)
  }
  // if selection is numbers only:
  else if (getParam === "dropNum") {
    doSplit(getChars, choice.number)
  }
  // if selection is letters and numbers:
  else if (getParam === "dropLtrNum") {
    doSplit(getChars, choice.letnum)
  }
  // if the selection is letters, numbers and characters:
  else if (getParam === "dropLtrNumChar") {
    doSplit(getChars, choice.letnumchar)
  }
  doPassword(getChars)
});

function doPassword (data) {
  
    if (isNaN(data)) {
      warning.innerText = "Your character number must be a number"
    } 
    else if (data < 8) {
      warning.innerText = "Your password cannot be fewer than 8 characters long."
    }
    else if (data > 128) {
      warning.innerText = "Your password cannot be more than 128 characters long."
    }
    else {
      result.innerHTML = `Your password is: ${password.join("")}`;
      warning.innerText = ''
      passparam.value = 'dropLtr'
    }
    numChars.value = ''
}

function doSplit (chars, userchoice) {
  password = []
  for (i = 0; i < chars; i++) {
    var split = userchoice.split('')
    password.push(split[Math.floor(Math.random() * userchoice.length)])
  }
}

function clearDivs () {
  warning.innerText = ''
  result.innerText = ''
}