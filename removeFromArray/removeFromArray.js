export const removeFromArray = function(inputArr, ...valuesToFilter) {
    const [...arrOfValues] = valuesToFilter;
    console.log("inputArr before filtering: ", inputArr)
    console.log("arrOfValues: ", arrOfValues);


    let remove;
    do {
        remove = false

        // Loop through arrOfValues and find each in inputArr
        inputArr.forEach(value => {
            
            // Loop through elements in inputArr
            // If value from arrOfValues is found in inputArr
            // remove it from inputArr
            
            const found = arrOfValues.find(element => {
                return element == value
            });
            
            if (found != undefined) {
                inputArr.splice(inputArr.indexOf(value), 1);
                remove = true;
            }
        });
    } while (remove)
        
        console.log("inputArr after filtering: ", inputArr)

    return inputArr
}


//module.exports = removeFromArray
