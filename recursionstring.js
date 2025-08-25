// string-recursion.js

function reverseString(str) {
    if (str === "") return "";  // base case
    return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("good")); // doog
