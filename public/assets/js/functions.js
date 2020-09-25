// generate password (params are variable names to be passed in script)
    function doPassword (getChars, warning, result, passparam, numChars) {

        if (isNaN(getChars)) {
            warning.innerText = "Your character number must be a number"
        } 
        else if (getChars < 8) {
            warning.innerText = "Your password cannot be fewer than 8 characters long."
        }
        else if (getChars > 128) {
            warning.innerText = "Your password cannot be more than 128 characters long."
        }
        else {
            result.innerHTML = `Your password is: ${password.join("")}`;
            warning.innerText = ''
            passparam.value = 'dropLtr'
        }
        numChars.value = ''
    }

// generate password (params are variable names to be passed in script)
    function checkAndAssign (getParam, getChars, choice, password) {
        password
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
    }

    function doSplit (chars, userchoice) {
        for (i = 0; i < chars; i++) {
          var split = userchoice.split('')
          password.push(split[Math.floor(Math.random() * userchoice.length)])
        }
    }

// clear the warning and result divs (params are variable names to be passed in script)
    function clearDivs (warning, result) {
        warning.innerText = ''
        result.innerText = ''
    }