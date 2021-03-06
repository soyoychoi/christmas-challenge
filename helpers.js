// Helper function to read files
const fs = require("fs");

const readFile = (fileName, splitBy="\n") => {
    const content = fs.readFileSync(`inputs/${fileName}`, { encoding: "utf-8" });
    return content.split(splitBy).filter((string) => string.trim() !== "");
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

// Day 4
const formatPassport = (passport) => {
    const passportInfo = passport.split("\n").join(" ").split(" ").filter((str) => str.trim() !== "");
    const passportObject = {};
    passportInfo.map((info) => {
        const fieldInfo = info.split(":");
        passportObject[fieldInfo[0].trim()] = fieldInfo[1].trim();
    });
    return passportObject;
}

module.exports = {
    readFile,
    formatPasswordPolicy,
    formatPassport
}