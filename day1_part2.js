const { readFile } = require("./helpers.js");

/*

--- Day 1: Report Repair ---

Part Two: Find product of three entries that sum to 2020

*/

const SUM = 2020;
const numberList = readFile("day1.txt").map(string => parseInt(string));

// Sort list in ascending order
numberList.sort((a, b) => a - b);

const findProductOfThree = () => {
    for (let i = 0; i < numberList.length - 2; i++) {
        let p1 = i + 1;
        let p2 = numberList.length - 1;
        while (p1 < p2) {
            const tempSum = numberList[i] + numberList[p1] + numberList[p2];
            if (tempSum === SUM) {
                return numberList[i] * numberList[p1] * numberList[p2];
            } else if (tempSum < SUM) {
                p1++;
            } else {
                p2--;
            }
        }
    }
    return false;
}

console.log(findProductOfThree());