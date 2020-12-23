// Helper function to read files
const fs = require("fs");

const readFile = (fileName) => {
    const content = fs.readFileSync(`inputs/${fileName}`, { encoding: "utf-8" });
    return content.split("\n").filter((string) => string.trim() !== "");
}

// Day 2
const formatPasswordPolicy = (data) => {
    const splitLine = data.split(": ");
    const policy = splitLine[0];
    const password = splitLine[1];

    const policySplitLine = policy.split(" ");
    const range = policySplitLine[0];
    const letter = policySplitLine[1];

    const rangeSplitLine = range.split("-");
    const firstNum = rangeSplitLine[0];
    const secondNum = rangeSplitLine[1];

    return {
        firstNum,
        secondNum,
        letter,
        password
    }
}

module.exports = {
    readFile,
    formatPasswordPolicy
}