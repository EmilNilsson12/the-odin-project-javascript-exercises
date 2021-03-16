import { caesar } from './caesar/caesar.js';


const caesarInputText = document.getElementById('input-caesar-text');
const caesarInputNum = document.getElementById('input-caesar-num');
const caesarBtn = document.getElementById('btn-caesar');
const ceasarOutput = document.getElementById('output-caesar');


caesarBtn.addEventListener('click', () => {
        ceasarOutput.innerHTML = `Ciphered message: <br />"${caesar(caesarInputText.value, caesarInputNum.value)}"`;
})


//------------ Allows user to complete input with Enter key ------------
caesarInputText.addEventListener('keyup', caesarClick);
caesarInputNum.addEventListener('keyup', caesarClick);

function caesarClick(evt) {
        if (evt.key == 'Enter') {
            evt.preventDefault();
            caesarBtn.click();
        }
}
//------------ Allows user to complete input with Enter key ------------




import { helloWorld } from './helloWorld/helloWorld.js'
const helloWorldP = document.getElementById('output-hello-world');
helloWorldP.innerHTML = helloWorld();




import { repeatString } from './repeatString/repeatString.js';


const repeatStringInputText = document.getElementById('input-repeat-string-text');
const repeatStringInputNum = document.getElementById('input-repeat-string-num');
const repeatStringBtn = document.getElementById('btn-repeat-string');
const repeatStringOutput = document.getElementById('output-repeat-string');


repeatStringBtn.addEventListener('click', () => {
        repeatStringOutput.innerHTML =  `Message repeated ${repeatStringInputNum.value} times: <br />"${repeatString(repeatStringInputText.value, repeatStringInputNum.value)}"`;
})


//------------ Allows user to complete input with Enter key ------------
repeatStringInputText.addEventListener('keyup', repeatStringClick);
repeatStringInputNum.addEventListener('keyup', repeatStringClick);

function repeatStringClick(evt) {
        if (evt.key == 'Enter') {
            evt.preventDefault();
            repeatStringBtn.click();
        }
}
//------------ Allows user to complete input with Enter key ------------


import { reverseString } from './reverseString/reverseString.js';


const reverseStringInputText = document.getElementById('input-reverse-string-text');
const reverseStringBtn = document.getElementById('btn-reverse-string');
const reverseStringOutput = document.getElementById('output-reverse-string');


reverseStringBtn.addEventListener('click', () => {
        reverseStringOutput.innerHTML =  `Message reversed: <br />"${reverseString(reverseStringInputText.value)}"`;
})


//------------ Allows user to complete input with Enter key ------------
caesarInputText.addEventListener('keyup', reverseStringClick);
caesarInputNum.addEventListener('keyup', reverseStringClick);

function reverseStringClick(evt) {
        if (evt.key == 'Enter') {
            evt.preventDefault();
            reverseStringBtn.click();
        }
}
//------------ Allows user to complete input with Enter key ------------


import { removeFromArray } from './removeFromArray/removeFromArray.js';


import { sumAll } from './sumAll/sumAll.js';


const sumAllInputNum1 = document.getElementById('input-sum-all-1');
const sumAllInputNum2 = document.getElementById('input-sum-all-2');
const sumAllBtn = document.getElementById('btn-sum-all');
const sumAllOutput = document.getElementById('output-sum-all');


sumAllBtn.addEventListener('click', () => {
        sumAllOutput.innerHTML =  `Sum of all numbers between "${sumAllInputNum1.value}" and "${sumAllInputNum2.value}": <br />${sumAll(parseInt(sumAllInputNum1.value), parseInt(sumAllInputNum2.value))}`;
});





import { leapYears } from './leapYears/leapYears.js';

const leapYearInput = document.getElementById('input-leap-year');
const leapYearBtn = document.getElementById('btn-leap-year');
const leapYearOutput = document.getElementById('output-leap-year');


leapYearBtn.addEventListener('click', () => {
        const isLeapYear = leapYears(parseInt(leapYearInput.value));

        if (isLeapYear) {
                leapYearOutput.innerHTML =  `The year "${leapYearInput.value}" is a leap year!`;
        }
        else {
                leapYearOutput.innerHTML =  `The year "${leapYearInput.value}" is not a leap year!`;
        }
});


import { ftoc, ctof } from './tempConversion/tempConversion.js';


const ctofInput = document.getElementById('input-ctof');
const ctofBtn = document.getElementById('btn-ctof');
const ftocInput = document.getElementById('input-ftoc');
const ftocBtn = document.getElementById('btn-ftoc');

const tempConversionOutput = document.getElementById('output-temp-conversion');


ctofBtn.addEventListener('click', () => {
        const newTemp = ctof(parseInt(ctofInput.value));
        tempConversionOutput.innerHTML = `${ctofInput.value} degrees celcius is equal to ${newTemp} degrees farenheit.`
});

ftocBtn.addEventListener('click', () => {
        const newTemp = ctof(parseInt(ftocInput.value));
        tempConversionOutput.innerHTML = `${ftocInput.value} degrees farenheit is equal to ${newTemp} degrees celcius.`
});
