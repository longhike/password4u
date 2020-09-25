const choice = {
  letter: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  letnum: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  letnumchar: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$%^&_"
}
// number of characters div
const numChars = document.querySelector("#passLength");
// parameter div
const passparam = document.getElementById("_select"); 
// submit button div
const submBtn = document.querySelector("#_submit");
// hidden divs
const warning = document.getElementById('warning')
const result = document.getElementById('_result')

let password = [];

submBtn.addEventListener("click", function() {
  password = []
  // to get number of characters
  let getChars = parseInt(numChars.value);
  // to get parameter selection
  let getParam = passparam.options[passparam.selectedIndex].value;

  clearDivs(warning, result)
  checkAndAssign(getParam, getChars, choice, password)
  doPassword(getChars, warning, result, passparam, numChars)

});