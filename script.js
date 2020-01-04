// select all inputs
const inputs = document.querySelectorAll('.controls input');

// dataset property provides access to all custom data attibutes set on an element
function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // empty string prevents appending of undefined for the color input
}

// listen for a change and mousemove event on each input 
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));