var summation = function (num) {
    let result = 0;
    if (num > 0) {
        for (let i = 0; i <= num; i++) {
            result += i
        }
    }
    return result
}

console.log(summation(2));