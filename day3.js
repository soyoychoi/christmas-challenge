const { readFile } = require("./helpers.js");

/*

--- Day 3: Toboggan Trajectory ---

Part 1: How many trees would you encounter?
Starting at the top-left corner of your map and following a slope of right 3 and down 1

*/

const gridMap = readFile("day3.txt");
const TREE = "#";

const countTrees = (slopeX, slopeY, currentX, currentY) => {
    let numOfTrees = 0;
    const rowLength = gridMap[0].split("").length;
    while (currentY - slopeY < gridMap.length) {
        const row = gridMap[currentY - slopeY].split("");
        if (row[(currentX + slopeX) % rowLength] === TREE) {
            numOfTrees++;
        }
        currentY -= slopeY;
        currentX += slopeX;
    }
    return numOfTrees;
}

// Print number of trees
console.log("--- PART 1 ---");
console.log(countTrees(3, -1, 0, 0));

/*

Part 2: What do you get if you multiply together the number of trees
encountered on each of the listed slopes?

Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.

*/

const multiplyTreesEncountered = () => {
    return countTrees(1, -1, 0, 0) *
        countTrees(3, -1, 0, 0) *
        countTrees(5, -1, 0, 0) *
        countTrees(7, -1, 0, 0) *
        countTrees(1, -2, 0, 0);
}

console.log("--- PART 2 ---");
console.log(multiplyTreesEncountered());