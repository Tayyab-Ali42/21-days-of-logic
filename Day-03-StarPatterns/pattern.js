// PROBLEM 1 PRINT RIGHT-ANGLED STAR PATTERN
// ROW = 5

let rightAngled = (num) => {
    for (let i = 1; i <= num; i++) {
        let stars = ''
        for (let j = 1; j <= i; j++) {
            stars += '*'
        }
        console.log(stars)
    }
}

// rightAngled(5);


// PROBLEM 2 PRINT INVERTED RIGHT-ANGLED TRIANGLE



let invertedRightAngled = (num) => {
    for (let i = 1; i <= num; i++) {
        let stars = ''
        for (let j = 1; j <= num - (i - 1); j++) {
            stars += '*'
        }
        console.log(stars)
    }
}


invertedRightAngled(5)