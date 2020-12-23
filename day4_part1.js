const { readFile } = require("./helpers.js");
const { formatPassport } = require("./helpers.js");

/*

--- Day 4: Passport Processing ---

Part 1: How many passports are valid?

*/

const passports = readFile("day4.txt", "\n\n");
const NUM_OF_REQUIREMENTS = 8;

const isValid = (passport) => {
    const fields = Object.keys(passport);
    if (fields.length === NUM_OF_REQUIREMENTS) {
        return true;
    }
    if (fields.length === NUM_OF_REQUIREMENTS - 1 &&
        !passport["cid"]) {
            return true;
        }
    return false;
}

const countValidPassports = () => {
    let validCount = 0;
    passports.forEach((passport) => {
        if (isValid(formatPassport(passport))) {
            validCount++;
        }
    })
    return validCount;
}

console.log(countValidPassports());