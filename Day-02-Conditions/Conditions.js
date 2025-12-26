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
