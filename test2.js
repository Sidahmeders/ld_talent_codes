// CODE 2
/*
Write a function that takes as input a filename. 
The function parses the file reading line by line and determines if
the line contains a single valid number. 
It should return a list of all the numbers found in the file. 

Example input file:
==========================================
#This is an input file with some textArray and numbers
10
  -50
Some more numbers follow
3.1457
12  00 47
1.25E-7
-20000
==========================================

Above function should return [10, -50, 3.1457, 1.25E-7, -20000]
*/

const fs = require('fs')
function readFileSync(pathToFile) {
    const textArray = fs.readFileSync(pathToFile).toString().split('\n')
    return textArray
}

const pathToFile = './test2.file.txt' // make sure you substitute 'pathToFile' with the actual path to a file in your filesystem.
const textArray = readFileSync(pathToFile)

function getListOfAllNumbersFromText(textArray) {
    let listOfValidNumbers = [],
        validNumber

    for (let textLine of textArray) {
        validNumber = getValidNumbers(textLine)
        validNumber = validNumber ? getTextWithoutWhiteSpace(validNumber[0]) : null

        validNumber ? listOfValidNumbers.push(validNumber[0]) : ''
    }

    return listOfValidNumbers
}

function getValidNumbers(textLine) {
    // regular expression to search for valid numbers in a text
    const regex = RegExp(/-?[\d-E](?!\S)?.+/, 'g')
    return textLine.match(regex)
}

function getTextWithoutWhiteSpace(textLine) {
    // regular expression that returns a text with no space in between
    const regex = RegExp(/^\s*\S+\s*$/, 'g')
    return textLine.match(regex)
}

let result = getListOfAllNumbersFromText(textArray)
console.log(result)
