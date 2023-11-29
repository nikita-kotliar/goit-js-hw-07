function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
    
    boxesContainer.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        boxesContainer.appendChild(box);
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
    

    createButton.addEventListener('click', () => {
        const amount = parseInt(input.value, 1);

        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
            input.value = '';
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });

    destroyButton.addEventListener('click', () => {
        destroyBoxes();
    });
});


