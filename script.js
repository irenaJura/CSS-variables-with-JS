// select all inputs
const inputs = document.querySelectorAll('.controls input');

// dataset property provides access to all custom data attibutes set on an element
function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // empty string prevents appending of undefined for the color input
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // document.documentElement returns the Element that is the root element of the document
    // setProperty method sets a new value for a property on a CSS style declaration object
}

// listen for a change and mousemove event on each input 
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));