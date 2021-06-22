// 1) *When click on START timer will start from 00 seconds until the user click STOP
// 2) *When click on START again, it will start from the same time it was stopped last time
// 3) *When click on RESET, the timer will be reset to the 00:00:00 time

/*Initialise variable*/
let hours = 0;
let minutes =0;
let seconds = 0;


let countdownDisplay = document.querySelector('.countdown_timer');
let startBtn = document.querySelector(".timer__buttonstart");
let resetBtn  = document.querySelector(".timer__buttonreset");
/*new Variable to assign value*/

let newHours = 0;
let newMinutes = 0;
let newSeconds = 0 ;
let timer = 0;

/*Logic to Increment timer counter @start button*/

startBtn.addEventListener('click',()=>{

    if(timer === 0){

        timer=setInterval(()=>{

            if (seconds/60 === 1){

                seconds=0;
                minutes+=1;
            }
            else
            {
                seconds+=1;
            }
            if(minutes/60===1){

                minutes=0;
                hours+=1;
            }

            newSeconds = seconds;
            newMinutes = minutes;
            newHours   = hours;

            /* logic to display timer in two digits*/
                     
            if(seconds<10){
                newSeconds = "0" + seconds;
            } 
            if(minutes<10){
                newMinutes = "0" + minutes;
            } 
            if(hours<10){
                newHours = "0" + hours;
            }
            countdownDisplay.innerHTML=`${newHours}:${newMinutes}:${newSeconds}`;

        },100)

        startBtn.innerHTML="STOP";

    }
    else
    {
        startBtn.innerHTML="START";
        clearInterval(timer);
        timer=0;
    }



})

/* reset buttton logic*/

resetBtn.addEventListener('click',()=>{

    window.clearInterval(timer);
    hours   = 0;
    minutes = 0;
    seconds = 0;
    countdownDisplay.innerHTML = "00:00:00";
    startBtn.innerHTML = "START";
    timer = 0 ;



})
