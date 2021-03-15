export const sumAll = function(start, end) {
    console.log("start: ", start)
    console.log("end: ", end)

    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }

    if (typeof start != "number" || typeof end != "number" || start < 0 || end < 0) {
        return "ERROR"
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
        console.log("i: ", i)
        console.log("Sum: ", sum)
    }



    return sum
}


console.log(sumAll(-10, 4))
//module.exports = sumAll
