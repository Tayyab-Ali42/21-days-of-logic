// PROBLEM 1  PRINT NUMBER FROM 1 TO N

function printNum() {
    const promptNum = parseInt(prompt('Enter your number'))
    for (let index = 1; index <= promptNum; index++) {
        console.log(index)
    }
}
// printNum()

// PROBLEM 2 PRINT NUM FROM N TO 1 WITHOUT CHANGING THE LOOP CONDITION OF ABOVE QUESTION

function printNumSecondVer() {
    const promptNum = parseInt(prompt('Enter your number'))
    for (let index = 1; index <= promptNum; index++) {
        console.log(promptNum - index + 1)
    }
}
// printNumSecondVer()


// PROBLEM 3 PRINT ALL EVEN NUMBER FROM 1 TO N

function printEvenNum(num) {
    let result = []
    for (let index = 1; index <= num; index++) {
        index % 2 === 0 ? result.push(index) : ''
    }
    return result
}

const num = 30
// console.log(printEvenNum(num))