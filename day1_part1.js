const { readFile } = require("./helpers.js");

/*

--- Day 1: Report Repair ---

Part 1: Find the product of two entries that sum to 2020

*/

const SUM = 2020;
const numberList = readFile("day1.txt");

const findDifference = () => {
    const numberMap = {};
    for (let i = 0; i < numberList.length; i++) {
        const difference = SUM - numberList[i];
        if (numberMap[difference]) {
            return difference;
        }
        numberMap[numberList[i]] = i;
    }
    return false;
}

const findProduct = () => {
    return findDifference() * (SUM - findDifference());
}

// Print out result
console.log(findProduct());