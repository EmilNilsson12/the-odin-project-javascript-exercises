export const repeatString = function(str, repeats) {
    if (repeats >= 0) {

        let returnStr = '';
        for (let i = 0; i < repeats; i++) {
            returnStr += str;
        }
        return returnStr
    }
    else {
        return "ERROR"
    }
}

//module.exports = repeatString
