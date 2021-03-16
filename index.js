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
        repeatStringOutput.innerHTML = `Message repeated ${repeatStringInputNum.value} times: <br />"${repeatString(repeatStringInputText.value, repeatStringInputNum.value)}"`;
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
        reverseStringOutput.innerHTML = `Message reversed: <br />"${reverseString(reverseStringInputText.value)}"`;
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
        sumAllOutput.innerHTML = `Sum of all numbers between "${sumAllInputNum1.value}" and "${sumAllInputNum2.value}": <br />${sumAll(parseInt(sumAllInputNum1.value), parseInt(sumAllInputNum2.value))}`;
});





import { leapYears } from './leapYears/leapYears.js';

const leapYearInput = document.getElementById('input-leap-year');
const leapYearBtn = document.getElementById('btn-leap-year');
const leapYearOutput = document.getElementById('output-leap-year');


leapYearBtn.addEventListener('click', () => {
        const isLeapYear = leapYears(parseInt(leapYearInput.value));

        if (isLeapYear) {
                leapYearOutput.innerHTML = `The year "${leapYearInput.value}" is a leap year!`;
        }
        else {
                leapYearOutput.innerHTML = `The year "${leapYearInput.value}" is not a leap year!`;
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
        const newTemp = ftoc(parseInt(ftocInput.value));
        tempConversionOutput.innerHTML = `${ftocInput.value} degrees farenheit is equal to ${newTemp} degrees celcius.`
});



import {
        add
        , subtract
        , sum
        , multiply
        , power
        , factorial
} from './calculator/calculator.js';



const factorialBtn = document.getElementById('btn-factorial');


const calculatorOutput = document.getElementById('output-calculator');


const addBtn = document.getElementById('btn-add');
addBtn.addEventListener('click', () => {
        const addInput = document.querySelectorAll('.input-add');
        calculatorOutput.innerHTML = `${addInput[0].value} + ${addInput[1].value} = ${add(parseInt(addInput[0].value), parseInt(addInput[1].value))}.`
});


const subtractBtn = document.getElementById('btn-subtract');
subtractBtn.addEventListener('click', () => {
        const subtractInput = document.querySelectorAll('.input-subtract');
        calculatorOutput.innerHTML = `${subtractInput[0].value} - ${subtractInput[1].value} = ${subtract(parseInt(subtractInput[0].value), parseInt(subtractInput[1].value))}.`
});


const sumBtn = document.getElementById('btn-sum');
sumBtn.addEventListener('click', () => {
        const sumInput = document.querySelectorAll('.input-sum');
        calculatorOutput.innerHTML = `Sum of nums: <br /> ${sumInput[0].value}`;

        const numsToSum = [
                parseInt(sumInput[0].value)
        ];
        for (let i = 1; i < sumInput.length; i++) {
                calculatorOutput.innerHTML += ` + ${sumInput[i].value} `;
                numsToSum.push(parseInt(sumInput[i].value));
        }
        calculatorOutput.innerHTML += ` = ${sum(numsToSum)} `;
});
const moreNumsSum = document.getElementById('more-nums-sum');
moreNumsSum.addEventListener('click', () => {
        moreNumsSum.insertAdjacentHTML('beforebegin', '<input type="number" class="input-sum">')
});


const multiplyBtn = document.getElementById('btn-multiply');
multiplyBtn.addEventListener('click', () => {
        const multiplyInput = document.querySelectorAll('.input-product');
        calculatorOutput.innerHTML = `Sum of nums: <br /> ${multiplyInput[0].value}`;

        const numsToMultiply = [
                parseInt(multiplyInput[0].value)
        ];
        for (let i = 1; i < multiplyInput.length; i++) {
                if(multiplyInput[i].value == '') continue;
                calculatorOutput.innerHTML += ` * ${multiplyInput[i].value} `;
                numsToMultiply.push(parseInt(multiplyInput[i].value));
        }
        calculatorOutput.innerHTML += ` = ${multiply(numsToMultiply)} `;

});
const moreNumsProduct = document.getElementById('more-nums-product');
moreNumsProduct.addEventListener('click', () => {
        moreNumsProduct.insertAdjacentHTML('beforebegin', '<input type="number" class="input-product">')
});

const powerBtn = document.getElementById('btn-power');
powerBtn.addEventListener('click', () => {
        const base = document.getElementById('input-power-base');
        const exponent = document.getElementById('input-power-exponent');
        
        const exponentiation = power(parseInt(base.value), parseInt(exponent.value));
        calculatorOutput.innerHTML = `${base.value} <sup>${exponent.value}</sup> is equal to ${exponentiation}`
});

factorialBtn.addEventListener('click', () => {
        const factorialInput = document.getElementById('input-factorial');
        
        const factorialResult = factorial(parseInt(factorialInput.value));
        calculatorOutput.innerHTML = `${factorialInput.value} factorial is equal to ${factorialResult}`
});


import { palindromes } from './palindromes/palindromes.js'

const palindromeInput = document.getElementById('input-palindrome');
const palindromeBtn = document.getElementById('btn-palindrome');
const palindromeOutputTrue = document.getElementById('output-palindrome-true');
const palindromeOutputFalse = document.getElementById('output-palindrome-false');


palindromeBtn.addEventListener('click', () => {
        const isPalindrome = palindromes(palindromeInput.value);

        if (isPalindrome) {
                palindromeOutputTrue.insertAdjacentHTML('afterbegin', `<li>${palindromeInput.value}</li>`)
        }
        else {
                palindromeOutputFalse.insertAdjacentHTML('afterbegin', `<li>${palindromeInput.value}</li>`)
        }
        palindromeInput.value = '';
        palindromeInput.focus();
});

//------------ Allows user to complete input with Enter key ------------
palindromeInput.addEventListener('keyup', palindromesClick);

function palindromesClick(evt) {
        if (evt.key == 'Enter') {
                evt.preventDefault();
                palindromeBtn.click();
        }
}
//------------ Allows user to complete input with Enter key ------------
