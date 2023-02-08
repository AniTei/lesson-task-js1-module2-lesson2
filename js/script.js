// to make a fork


/* # JavaScript 1 - Module 2

## Lesson Task 2 Question



Add a click event to the button that disables the button and starts a counter.

Count to 7 and update `span.count` with the value of the count.

Once 7 is reached stop the count and enable the button.
 */

/* a PLan, 
first select the button 
create clickevent, start with console log
//successfully added an onclick event and logged something

disableing could be done with a timeout, disable is a style, a pseudo class


start a counter, meaning loop change of content, that replaces prev content, then goes back to default?


span.count is the div holding the number, 
ok lets try it
*/

const startBtn = document.querySelector("button")
const countingNum = document.querySelector (".count")


///////// I ACTUALLY MADE THE COUNT GO FROM 0-7 when clicking start!!!

let counting = 0;


startBtn.onclick = function () {

    event.target.disabled = true;
    console.log("ready set go!");

    counting = 0;

    const time = 500;
    const payshuns = setInterval (param, time)
    function param () {
    
        counting++;
    
        if(counting === 7) {
            clearInterval(payshuns);
            startBtn.disabled = false;

        }
            console.log(counting);
    
            countingNum.innerHTML = counting;

        
    }


   // can I assign the whole setInterval to the buttonclick? yes! 

}    


    
    //startBtn.style.disabled
    //how do I add the pseudo class disabled, in the function, 
    //should also put it in a setTimeout at some point
    // for now I will focus on the counting

    


//////////////////// FASIT

/* 
let counter = 0;
///// YES V GOOD, also, you can put this one outside the onclick

const button = document.querySelector("button");
const countContainer = document.querySelector(".count");
///// YES V GOOD

button.onclick = function () {
//// YES V GOOD

    event.target.disabled = true;
    ////// I DIDNT FIGURE THIS ONE OUT, I THOUGHT ABOUT TARGET, BUT NOT WHAT TO USE IT FOR
    ////// I WAS COMPLETELY LOST ABOUT THE DISABLED PART
    ////// EVENT BECOMES LINETHROUGH IN MY CODE, IS IT BECASE I PUT TH FUNCTION ON ITS OWN? BUT IT WORKS

    // reset counter
    counter = 0;
    ////// DIDNT HAVE THIS ONE, DONT SEE HOW IT WORKS, BUT UNDERSTAND THE NEED

    const intervalId = setInterval(function () {
        ////// HAD THIS ONE, BUT WROTE THE setInterval SEPERATE FROM THE FUNCTION AND TIME

        counter++; // add 1 to counter
        ////// HAD THIS ONE

        countContainer.innerHTML = counter;
        ////// HAD THIS ONE, BUT PUT counter IN BACKTICKS, NOT REALLY SURE WHY

        if (counter === 7) {
            ////// HAD THIS ONE

            clearInterval(intervalId);
            ////// HAD THIS ONE

            button.disabled = false;
            //////DID NOT HAVE THIS ONE
            //////IT NEEDS TO BE INSIDE THE IF-STATEMENT
            /// MEANING, WHEN THE counter REACHES 7, TURN OFF THE DOSABLED
        }
    }, 1000);
}; */

/////////////////// OPPSUMMERING
// DET JEG I HOVEDSAK IKKE KLARTE PÅ EGENHÅND VAR "DISABLED" DELEN, RESTEN VAR FAKTISK VELDIG BRA!!!