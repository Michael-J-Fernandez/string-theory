// ----- xify -----
// returns the same string, but with every character replaced by an 'x'
console.log("----- xify -----");


function xify(str) {

    let newStr = "";

    for (i = 0; i < str.length; i++){
    
        newStr += "x";
    }
    return newStr;
}

console.log(xify("123"));




// ----- yellingChars -----
// returns the given string with an exclamation point after each character
console.log("\n");
console.log("----- yellingChars -----");


function yellingChars(str) {

    let newStr = "";

    for (i = 0; i < str.length; i++){

        newStr += str[i] + "!";
    }
    return newStr;
}

console.log(yellingChars("1234567"));




// ----- indexedChars -----
// adds the index of each character before that character in the given string
console.log("\n");
console.log("----- indexedChars -----");


function indexedChars(str) {

    let newStr = "";

    for (i = 0; i < str.length; i++){

        newStr += i + str[i];
    }
    return newStr;
}

console.log(indexedChars("abcdefg"));




// ----- exclaim -----
// returns the given sentence with every question mark or period changed to an exclamation point
console.log("\n");
console.log("----- exclaim -----");


function exclaim(str) {

    let newStr = "";
    
    for (i = 0; i < str.length; i++){

        if (str[i] === "." || str[i] === "?") {
            newStr += "!";

        } else {

            newStr += str[i];
        }
    }
    return newStr;
}

console.log(exclaim("One. Two? Three. Four?"));



// ----- truncate -----
// shortens a long string to 15 characters plus an ellipsis (...)
console.log("\n");
console.log("----- truncate -----");


function truncate(str) {

    let newStr = "";

    for (i = 0; i <= 15; i++){

        newStr += str[i];

    }
    newStr += "(...)";
    return newStr;
}

console.log(truncate("11111111111111111111111"));



// ----- ciEmailify -----
// creates an email from a two-part name
console.log("\n");
console.log("----- ciEmailify -----");


function ciEmailify(name) {

    name = name.toLowerCase();
    let eMail = "";

    for (i = 0; i < name.length; i++){

        if (name[i] === " ") {

            eMail += ".";

        } else {

            eMail += name[i];
        }
    }
    eMail += "@codeimmersives.com";
    return eMail;
}

console.log(ciEmailify("Michael Fernandez"));




// ----- reverse -----
// reverses the given string
console.log("\n");
console.log("----- reverse -----");

function reverse(str) {

    newStr = "";

    for (i = str.length - 1; i >= 0; i--){
        
        newStr += str[i];
    }
    return newStr
}

console.log(reverse("0123456789"));



// ----- onlyVowels -----
// returns only the vowels from a word
console.log("\n");
console.log("----- onlyVowels -----");


function onlyVowels(str) {

    let newStr = "";

    for (i = 2; i < str.length; i++){

        if (str[i] === "A" ||
            str[i] === "a" ||
            str[i] === "E" ||
            str[i] === "e" ||
            str[i] === "I" ||
            str[i] === "i" ||
            str[i] === "O" ||
            str[i] === "o" ||
            str[i] === "U" ||
            str[i] === "u") {
            
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(onlyVowels("GwAaGwEeGwIiGwOoGwUu"));