export const leapYears = function(year) {
    const divBy4 = (year % 4 == 0);
    const divBy100 = (year % 100 == 0);
    const divBy400 = (year % 400 == 0);

    let leapYear = false;


    console.log("year: ", year);
    console.log("divBy4: ", divBy4);
    console.log("divBy100: ", divBy100);
    console.log("divBy400: ", divBy400);

    if (divBy4) {
        leapYear = true
        
        if (divBy100) {
            leapYear = false
            
            if (divBy400) {
                leapYear = true
            }
        }
    }



    return leapYear
}

//module.exports = leapYears
