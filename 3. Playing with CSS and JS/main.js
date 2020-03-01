
const inputs = document.querySelectorAll(".controls input");

function inputUpdate() {
    const suffix = this.dataset.sizing || ""; // .dataset is a property that opens acces to every "data" attributes set in the html (see for reference)
    // .sizing is simply what comes after the - on data: data-(whatever, free for naming)
    // || "" (or nothing) is used to prevent the an output on the hexa of "undefined"
    
    /* style.setProperty(propertyName, value, priority); --> identifies each element by names and change and changes its value when the DOM identifies a change of value.
    document.documentElement.style.setProperty(`--${this.name}`, this.value); --> changes the value inside the html but not in the actual DOM
    */ document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // adding sufix makes the trick (why?)
}
// Listening to every change on the selected inputs. only works with a "click-down and with a forEach, given that using queryselectorall to select multiple DOM elements returns a nodelist, with limited methods available to use"
inputs.forEach(input => input.addEventListener("change", inputUpdate));
// listens to every movement on the inputs
inputs.forEach(input => input.addEventListener("mousemove", inputUpdate));
