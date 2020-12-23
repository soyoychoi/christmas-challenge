const { readFile } = require("./helpers.js");
const { formatPasswordPolicy } = require("./helpers.js");

/*

--- Day 2: Password Philosophy ---

Part 1: How many valid passwords?

The password policy indicates the lowest and highest
number of times a given letter must appear for the password to be valid.

*/

const passwordPolicy = readFile("day2.txt");

const countValidPassword = () => {
    let validCount = 0;
    passwordPolicy.forEach((policy) => {
        const { password, letter, firstNum, secondNum } = formatPasswordPolicy(policy);
        if (isPasswordValid(password, letter, firstNum, secondNum)) {
            validCount++;
        }
    });
    return validCount;
}

const isPasswordValid = (password, letter, minNum, maxNum) => {
    const letters = password.split("").filter(char => char === letter);
    return letters.length >= minNum &&
        letters.length <= maxNum;
}

// Print count of valid password
console.log(countValidPassword());