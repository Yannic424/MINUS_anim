let startButton = document.querySelector('#startAnimation');

let lettreM = document.querySelector('#lettreM');
let lettreI = document.querySelector('#lettreI');
let lettreN = document.querySelector('#lettreN');
let lettreU = document.querySelector('#lettreU');
let lettreS = document.querySelector('#lettreS');

document.querySelector("#lettreM").style.color = "red;"

startButton.addEventListener('click', () => {
    lettreM.classList.add('animateM');
    lettreI.classList.add('animateI');
    lettreN.classList.add('animateN');
    lettreU.classList.add('animateU');
    lettreS.classList.add('animateS');
});