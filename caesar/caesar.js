// Input: (string, int)
const caesar = function(msg, shift) {
    
    // Convert shift to int
    shift = parseInt(shift);

    // Convert msg to array
    msg = msg.split('')

    // Store shiftet msg in new array
    let shiftedMsg = [];

    // Replace each letter with shifted unicode value
    msg.forEach(letter => {

        let unicode = letter.charCodeAt();
        let newUniCode = 0;
        
        // Check whether uppercase or lowercase
        if (unicode >= 65 && unicode <= 90) {
            newUniCode = ((unicode - 65 + shift) % 26) + 65;
        }
        else if (unicode >= 97 && unicode <= 122) {
            newUniCode = ((unicode - 97 + shift) % 26) + 97;
        }
        else {
            newUniCode = unicode
        }

        // Push shifted letter to shiftedMsg
        const shiftedLetter = String.fromCharCode(newUniCode);
        console.log("shiftedLetter: ", shiftedLetter);
        shiftedMsg.push(shiftedLetter);
    });

    // Covert array back to string
    shiftedMsg = shiftedMsg.join('');

    return shiftedMsg
}

export { caesar };
//module.exports = caesar;

