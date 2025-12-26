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
