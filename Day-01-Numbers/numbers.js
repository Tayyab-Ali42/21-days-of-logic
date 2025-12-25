// PROBLEM 1  PRINT NUMBER FROM 1 TO N

function printNum() {
    const promptNum = prompt('Enter your number')
    for (let index = 1; index <= promptNum; index++) {
        console.log(index)
    }
}
printNum()