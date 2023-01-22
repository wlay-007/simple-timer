const timeBox = document.querySelector('.timer__seconds-count');
const buttonStart = document.querySelector('#start-button');
const buttonStop = document.querySelector('#stop-button');
const buttonClear = document.querySelector('#clear-button');
let buttonTest = true;
let seconds = 0;
let timerID;

//start button
buttonStart.addEventListener('click', function(){
    if(buttonTest){
        window.navigator.vibrate(200);
        timerID = setInterval(function(){
            seconds += 1;
            timeBox.innerText = seconds;
            buttonTest = false;
        }, 1000)
    }
})
//stop button
buttonStop.addEventListener('click', function(){
    window.navigator.vibrate(200);
    clearInterval(timerID);
    buttonTest = true;
})
// clear button
buttonClear.addEventListener('click', function(){
    window.navigator.vibrate(200);
    seconds = 0;
    clearInterval(timerID);
    timeBox.innerText = seconds;
    buttonTest = true;
})