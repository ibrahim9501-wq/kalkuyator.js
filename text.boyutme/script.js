const increaseButton = document.getElementById('increaseFont');
const decreaseButton = document.getElementById('decreaseFont');
const colorInput = document.getElementById('colorInput');
const applyButton = document.getElementById('applyColor');
const textElement = document.getElementById('text');

let fontSize = 20; 
increaseButton.addEventListener('click', () => {
    fontSize += 2;
    textElement.style.fontSize = `${fontSize}px`;
});

decreaseButton.addEventListener('click', () => {
        fontSize -= 2;
        textElement.style.fontSize = `${fontSize}px`;
    }
);


applyButton.addEventListener('click', () => {
    const color = colorInput.value;
    textElement.style.color = color;
});
