// PROBLEM 1  FIND THE MAXIMUM OF THREE NUMBER

let findMax = (a, b, c) => {
    let max
    if (a >= b && a >= c) {
        max = a
    } else if (b >= a && b >= c) {
        max = b
    } else max = c

    return max
}
console.log(findMax(5, 29, 30))

// PROBLEM 2 CHECK IF A NUM IS A POSITIVE, NEGATIVE OR ZERO

let checkNum = (num = 0) => {
    if (num < 0) return 'Number is a Negative'
    if (num > 0) return 'Number is a positive'
    return 'Number is a Zero'
}
console.log(checkNum(10))
console.log(checkNum(-8))
console.log(checkNum(0))

// PROBLEM 3 CALCULATE ELECTERCITY BILL

let calculateBill = (unit) => {
    let totalBill
    if (unit <= 100) {
        totalBill = unit * 5
    } else if (unit > 100 && unit <= 200) {
        totalBill = unit * 7
    } else if (unit > 200 && unit <= 300) {
        totalBill = unit * 10
    } else {
        totalBill = unit * 12
    }
    return totalBill
}

console.log(calculateBill(500))

// PROBLEM 4 CHECK IF A CHARACTER IS A VOWEL OR CONSTANT

let checkVowel = (char) => {
    char = char.toLowerCase()
    if (char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'a') {
        return 'Char is a vowel'
    } else {
        return 'Char is not a vowel'
    }
}
console.log(checkVowel('b'))

// PROBLEM 5 CHECK LEAP YEAR

const checkLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(
    checkLeapYear(2004)
        ? 'This year is a leap year'
        : 'This year is not a leap year'
);