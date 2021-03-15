export const reverseString = function(str) {
    str = str.split('');

    let stringReversed = [];
    for (let letter of str) {
        stringReversed.unshift(letter)
    }
    stringReversed = stringReversed.join('');

    return stringReversed
}

//module.exports = reverseString
