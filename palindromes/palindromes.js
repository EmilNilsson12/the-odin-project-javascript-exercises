export const palindromes = function(str) {
    str = str.toLowerCase();
    str = str.replace(/[^A-Za-z0-9]/g, '');
    str = str.split('');

    let strLen = str.length;
    let strMid = strLen / 2;
    


    let firstHalf;
    let secondHalf;
    if (strLen % 2 == 0) {
        firstHalf = str.splice(0, strMid)
        secondHalf = str.splice(0, strLen)
    }
    else {
        firstHalf = str.splice(0, strMid)
        secondHalf = str.splice(1, strLen)
    }

    
    firstHalf = firstHalf.join('')
    let secondHalfReversed = secondHalf.reverse().join('')
    
    if (firstHalf == secondHalfReversed) {
        return true
    }
    else {
        return false
    }

}


//module.exports = palindromes
