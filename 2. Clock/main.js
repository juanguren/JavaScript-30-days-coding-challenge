
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

 function setDate() {
   const now = new Date(); //gets entire date
   const seconds = now.getSeconds(); // refines it for getting just seconds
   const secondsDegrees = ((seconds / 60) * 360) + 90; // this operations transforms the obtained seconds into degrees for the clock to interpret as movement.
   // 90 is added to offset the default value given in the .hand class. 90 deg
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   console.log(seconds);
   
   const minutes = now.getMinutes();
   const minsDegrees = ((minutes / 60) * 360) + 90;
   minuteHand.style.transform= `rotate(${minsDegrees}deg)`;

   const hours = now.getHours(); 
   const hourDegrees = ((hours / 60) * 360) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;     
 }

 setInterval(setDate, 1000); // necessary method that executes a function given in a specific amount of time.
 // In this case, seconds, which is 1000 ms