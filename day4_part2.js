const { readFile } = require("./helpers.js");
const { formatPassport } = require("./helpers.js");

/*

--- Day 4: Passport Processing ---

Part 2: How many passports are valid?

byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.

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

const isValidWithNewRules = (passport) => {
    const isByrValid = parseInt(passport["byr"]) >= 1920 && parseInt(passport["byr"]) <= 2002;
    const isIyrValid = parseInt(passport["iyr"]) >= 2010 && parseInt(passport["iyr"]) <= 2020;
    const isEyrValid = parseInt(passport["eyr"]) >= 2020 && parseInt(passport["eyr"]) <= 2030;

    const hgtUnit = passport["hgt"].slice(passport["hgt"].length-2);
    const isHgtValid = (hgtUnit === "cm" || hgtUnit === "in") &&
        (hgtUnit === "cm" ?
        parseInt(passport["hgt"]) >= 150 && parseInt(passport["hgt"]) <= 193 :
        parseInt(passport["hgt"]) >= 59 && parseInt(passport["hgt"]) <= 76);

    const isHclValid = passport["hcl"].charAt("0") === "#" &&
        passport["hcl"].slice(1).length === 6 &&
        new RegExp(/^[a-f0-9]+$/).test(passport["hcl"].slice(1));

    const isEclValid = passport["ecl"].length === 3 &&
        ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(passport["ecl"]);

    const isPidValid = passport["pid"].length === 9 &&
        new RegExp(/^[0-9]+$/).test(passport["pid"]);

    return isByrValid && isIyrValid && isEyrValid && isHgtValid &&
        isHclValid && isEclValid && isPidValid;
}

const countValidPassports = () => {
    let validCount = 0;
    passports.forEach((passport) => {
        if (isValid(formatPassport(passport)) &&
            isValidWithNewRules(formatPassport(passport))) {
            validCount++;
        }
    })
    return validCount;
}

console.log(countValidPassports());