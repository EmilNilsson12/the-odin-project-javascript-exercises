import { caesar } from './caesar/caesar.js';


const caesarInputText = document.getElementById('input-caesar-text');
const caesarInputNum = document.getElementById('input-caesar-num');
const caesarBtn = document.getElementById('btn-caesar');
const outputCaesar = document.getElementById('output-caesar');


caesarBtn.addEventListener('click', () => {
        outputCaesar.innerHTML = `Ciphered message: <br />"${caesar(caesarInputText.value, caesarInputNum.value)}"`;
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
