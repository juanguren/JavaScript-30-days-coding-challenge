
window.addEventListener("keydown", playDrum);

function playDrum(e){ // event recognizes keys being pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // selects <audio> in the positions of the keyCode data type found on each <audio>
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // selects <audio> in the positions of the keyCode data type found on each <audio>
    
    if (!audio){ // stops the function from running if the pressed key has no keyCode associated with the ones at <audio>. Also prevents error: "Uncaught TypeError: Cannot set property 'currentTime' of null"
        return;  
    } 
    audio.currentTime = 0; // prevents having to wait until current audio file is over to play it again. It resets the counter. Basically: Multiple presses for true rythm
    audio.play();
    key.classList.add("playing"); // adds class for transforming keys in html when pressed  
}
/* the css class is added correctly but its yellow stays in the html key and the point is to make it go away,
    so we must add an event that listens for THE END OF THE TRANSITION:
*/  

function removeTransition(e) {
    //console.log(e);
    if(e.propertyName !== "transform"){ // propertyName returns the name of the CSS property. (always) associated with transitions
        return; // skips it if it´s not a transform property (see console log for understanding)
    } 

    this.classList.remove("playing"); // we use this for lacking an specific variable. This, IS whatever we are calling inside the function. In this case, it is the .key <div>
}

const keys = document.querySelectorAll(".key");

/*keys.addEventListener("transitionend", function(e){}); normal event calling doesn´t work because
the keys being inside an array, they must be looped over to attach the eventlistener: */

keys.forEach(key => { // loop with anonymous arrow function. "key" as parameter
    key.addEventListener("transitionend", removeTransition);
}); 

