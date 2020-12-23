const { readFile } = require("./helpers.js");
const { formatPasswordPolicy } = require("./helpers.js");

/*

--- Day 2: Password Philosophy ---

Part 2: How many valid passwords?

Each policy actually describes two positions in the password,
where 1 means the first character, 2 means the second character, and so on.

Exactly one of these positions must contain the given letter.
Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

*/

const passwordPolicy = readFile("day2.txt");

const countValidPassword = () => {
    let validCount = 0;
    passwordPolicy.forEach((policy) => {
        const { password, letter, firstNum, secondNum } = formatPasswordPolicy(policy);
        if (isPasswordValid(password, letter, firstNum - 1, secondNum - 1)) {
            validCount++;
        }
    });
    return validCount;
}

const isPasswordValid = (password, letter, pos1, pos2) => {
    const isLetterAtPos1 = password.charAt(pos1) === letter;
    const isLetterAtPos2 = password.charAt(pos2) === letter
    return (isLetterAtPos1 && !isLetterAtPos2) ||
        (!isLetterAtPos1 && isLetterAtPos2);
}

console.log(countValidPassword());