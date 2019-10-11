document.getElementById("generate").addEventListener("click", Generator);
document.getElementById("copy").addEventListener("click", popCopy);

function popCopy(){
    var copyPassword = document.getElementById("password");
    copyPassword.select();
    document.execCommand("copy");
}

function Generator(){
    var passwordLength = prompt("Password Length?");

    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Password must be between 8 and 128 characters. Password Length?");
    }
    var wantsNumber = prompt("Numbers?");
    while (wantsNumber !== "Y" && wantsNumber !== "N") {
        wantsNumber = prompt("Answer with Y or N. Numbers?");
    }
    var wantsAlpha = prompt("Uppercase Letters?");
    while (wantsAlpha !== "Y" && wantsAlpha !== "N") {
        wantsAlpha = prompt("Answer with Y or N. Uppercase Letters?");
    }
    var wantsLowerAlpha = prompt("Lowercase Letters?");
    while (wantsLowerAlpha !== "Y" && wantsLowerAlpha !== "N") {
        wantsLowerAlpha = prompt("Answer with Y or N. Uppercase Letters?");
    }
    var wantsSpecial = prompt("Special Characters?");
    while (wantsSpecial !== "Y" && wantsSpecial !== "N") {
        wantsSpecial = prompt("Answer with Y or N. Special Characters?")
    }
    
    var specialObj = { 0: "!", 1: "#", 2: "$", 3: "%", 4: "&", 5: "\'", 6: "\(", 7: "\)", 8: "\*", 9: "\+", 10: "\,", 11: "\-", 12: "\.", 13: "\/", 14: "\:", 15: "\;", 16: "\<", 17: "\=", 18: "\>", 19: "\?", 20: "@", 21: "[", 22: "\\", 23: "]", 24: "^", 25: "_", 26: "`", 27: "{", 28: "|", 29: "}", 30: "~" };
    var alphaObj = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L", 12: "M", 13: "N", 14: "O", 15: "P", 16: "Q", 17: "R", 18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X", 24: "Y", 25: "Z" };
    var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    function Randomizer(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from - used this to translate user's answer into an array
        var arrayLength = Array.from({ length: passwordLength }, (v, i) => i);
        var i;

        //random number generation
        var numPasswordArray = [];

        for (i = 0; i < arrayLength.length; i++) {
            numPasswordArray[i] = Math.floor(Math.random() * 10);
        }

        var numPassword = numPasswordArray.join("");
        //alert(numPassword);

        //random uppercase letter generation

        var alphaPasswordArray = [];
        var alphaPassword = [];

        for (i = 0; i < arrayLength.length; i++) {
            alphaPasswordArray[i] = Math.floor(Math.random() * 25);
            alphaPassword += alphaObj[alphaPasswordArray[i]];
        }

        //alert(alphaPassword);

        //random lowercase letter generation
        var lowerAlphaPasswordArray = [];
        var lowerAlphaPassword = [];

        for (i = 0; i < arrayLength.length; i++) {
            lowerAlphaPasswordArray[i] = Math.floor(Math.random() * 25);
            lowerAlphaPassword += alphaObj[alphaPasswordArray[i]];
            lowerAlphaPassword = lowerAlphaPassword.toLowerCase();
        }
        console.log(lowerAlphaPassword);


        //random special character generation

        var specialPasswordArray = [];
        var specialPassword = [];

        for (i = 0; i < arrayLength.length; i++) {
            specialPasswordArray[i] = Math.floor(Math.random() * 30);
            specialPassword += specialObj[specialPasswordArray[i]];
        }

        //alert(specialPassword);

        //add them all together, parse, re-randomize, divide
        //var totalPassword = numPassword + alphaPassword + specialPassword + lowerAlphaPassword
        //alert(totalPassword);
        //var parsedPassword = totalPassword.split("");
        //alert(parsedPassword);
        //console.log(typeof (parsedPassword));
        //var mixedPasswordObj = [];
        //var mixedPassword = [];
        //var finalPassword = [];

        //for (i = 0; i < passwordLength; i++) {
        //mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
        //mixedPassword += parsedPassword[mixedPasswordObj[i]];
        //}

        //alert(mixedPasswordObj);
        //alert(mixedPassword);

        if (wantsNumber === "Y" && wantsAlpha === "N" && wantsLowerAlpha === "N" && wantsSpecial === "N") {
            return numPassword;
            //alert(numPassword);
        }
        else if (wantsAlpha === "Y" && wantsNumber === "N" && wantsLowerAlpha === "N" && wantsSpecial === "N") {
            return alphaPassword;
            //alert(alphaPassword);
        }
        else if (wantsLowerAlpha === "Y" && wantsAlpha === "N" && wantsNumber === "N" && wantsSpecial === "N") {
            return lowerAlphaPassword;
            //alert(lowerAlphaPassword);
        }
        else if (wantsSpecial === "Y" && wantsNumber === "N" && wantsAlpha === "N" && wantsLowerAlpha === "N") {
            return specialPassword;
            //alert(specialPassword);
        }
        else if (wantsSpecial === "Y" && wantsNumber === "Y" && wantsAlpha === "N" && wantsLowerAlpha === "N") {
            var totalPassword = numPassword + specialPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            //console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "N" && wantsNumber === "Y" && wantsAlpha === "Y" && wantsLowerAlpha === "N") {
            var totalPassword = numPassword + alphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "N" && wantsNumber === "N" && wantsAlpha === "Y" && wantsLowerAlpha === "Y") {
            var totalPassword = alphaPassword + lowerAlphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "N" && wantsNumber === "Y" && wantsAlpha === "N" && wantsLowerAlpha === "Y") {
            var totalPassword = numPassword + lowerAlphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "Y" && wantsNumber === "N" && wantsAlpha === "Y" && wantsLowerAlpha === "N") {
            var totalPassword = specialPassword + alphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "Y" && wantsNumber === "N" && wantsAlpha === "N" && wantsLowerAlpha === "Y") {
            var totalPassword = lowerAlphaPassword + specialPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "Y" && wantsNumber === "Y" && wantsAlpha === "Y" && wantsLowerAlpha === "N") {
            var totalPassword = specialPassword + numPassword + alphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "Y" && wantsNumber === "Y" && wantsAlpha === "N" && wantsLowerAlpha === "Y") {
            var totalPassword = specialPassword + numPassword + lowerAlphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "Y" && wantsNumber === "N" && wantsAlpha === "Y" && wantsLowerAlpha === "Y") {
            var totalPassword = specialPassword + alphaPassword + lowerAlphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
        else if (wantsSpecial === "N" && wantsNumber === "Y" && wantsAlpha === "Y" && wantsLowerAlpha === "Y") {
            var totalPassword = numPassword + alphaPassword + lowerAlphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);


        }
        else {
            var totalPassword = numPassword + alphaPassword + specialPassword + lowerAlphaPassword
            //alert(totalPassword);
            var parsedPassword = totalPassword.split("");
            //alert(parsedPassword);
            console.log(typeof (parsedPassword));
            var mixedPasswordObj = [];
            var mixedPassword = [];
            var finalPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }

            //alert(mixedPasswordObj);
            return mixedPassword;
            //alert(mixedPassword);
        }
    }

    Randomizer(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial);

    var password = Randomizer(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial);

    function ValidatePassword(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial, specialObj, alphaObj, numArray){
    if (wantsNumber === "Y") {
        for (i = 0; i < numArray.length; i++) {
            if (password.includes(numArray[i])) {
                continue;
            }
            else {Randomizer(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial)}}}
    if (wantsAlpha === "Y") {
        for (i = 0; i < alphaObj.length; i++) {
            if (password.includes(alphaObj[i])) {
                continue;
            }
            else {Randomizer(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial)}}}
    if (wantsLowerAlpha === "Y") {
        for (i = 0; i < alphaObj.length; i++) {
            if (password.includes(alphaObj.toLowerCase()[i])) {
                continue;
            }
            else {Randomizer(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial)}}}
    if (wantsSpecial === "Y") {
        for (i = 0; i < specialObj.length; i++) {
            if (password.includes("9")) {
                alert("pass");
            }
            else alert("fail");}}}

    ValidatePassword(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial, specialObj, alphaObj, numArray);
    
    function insertPassword(password){
        event.preventDefault();
        var passwordText = password
    
        alert(passwordText);
        document.querySelector("#password").textContent = passwordText;
    
    }

    insertPassword(password)

    //alert(password);
    return password;}

