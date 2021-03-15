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
caesarInputText.addEventListener('keyup', repeatStringClick);
caesarInputNum.addEventListener('keyup', repeatStringClick);

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
