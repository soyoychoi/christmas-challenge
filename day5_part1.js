const { readFile } = require("./helpers.js");

/*

--- Day 5: Binary Boarding ---

Part 1: What is the highest seat ID on a boarding pass?

*/

const seats = readFile("day5.txt");
const NUMBER_OF_ROWS = 128;
const NUMBER_OF_COLS = 8;

const calculateSeatId = (row, column) => {
    return row * 8 + column;
}

const getRowOrColNumber = (code, low, high) => {
    const direction = code.charAt(0);
    if (code === "" || low === high) {
        return low;
    }
    const mid = parseInt((low + high) / 2);
    if (direction === "F" || direction === "L") {
        return getRowOrColNumber(code.slice(1), low, mid);
    }
    return getRowOrColNumber(code.slice(1), mid, high);
}

const getHighestSeatId = () => {
    let max = -1;
    seats.forEach(seat => {
        const rowPartition = seat.slice(0, 7);
        const colPartition = seat.slice(7);
        const row = getRowOrColNumber(rowPartition, 0, NUMBER_OF_ROWS);
        const col = getRowOrColNumber(colPartition, 0, NUMBER_OF_COLS);
        const seatId = calculateSeatId(row, col);
        max = seatId > max ? seatId : max;
    });
    return max;
}

console.log(getHighestSeatId());

module.exports = {
    getRowOrColNumber,
    calculateSeatId
}