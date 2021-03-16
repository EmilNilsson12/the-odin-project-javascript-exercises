export const sumAll = function(start, end) {

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
    }



    return sum
}


//module.exports = sumAll
