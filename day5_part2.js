const { readFile } = require("./helpers.js");
const { getRowOrColNumber, calculateSeatId } = require("./day5_part1.js");

/*

--- Day 5: Binary Boarding ---

Part 2: What is the ID of your seat?

*/

const seats = readFile("day5.txt");
const NUMBER_OF_ROWS = 128;
const NUMBER_OF_COLS = 8;

const findMissingSeat = () => {
    const seatIdList = [];
    seats.forEach((seat) => {
        const rowPartition = seat.slice(0, 7);
        const colPartition = seat.slice(7);
        const row = getRowOrColNumber(rowPartition, 0, NUMBER_OF_ROWS);
        const col = getRowOrColNumber(colPartition, 0, NUMBER_OF_COLS);
        const seatId = calculateSeatId(row, col);
        seatIdList.push(seatId);
    });

    seatIdList.sort((a, b) => a - b);
    for (let i = 1; i < seatIdList.length-1; i++) {
        if (seatIdList[i + 1] !== seatIdList[i] + 1) {
            return seatIdList[i] + 1;
        }
    }
    return -1;
}

console.log(findMissingSeat());