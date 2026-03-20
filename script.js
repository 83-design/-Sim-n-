let balance = parseInt(localStorage.getItem('balance')) || 0;
let energy = 100;
const maxEnergy = 100;

const balanceEl = document.getElementById('balance');
const energyBar = document.getElementById('energy-bar');
const energyText = document.getElementById('energy-text');
const coin = document.getElementById('coin');

function updateUI() {
    balanceEl.innerText = balance.toLocaleString();
    energyText.innerText = Math.floor(energy);
    energyBar.style.width = (energy / maxEnergy * 100) + '%';
    localStorage.setItem('balance', balance);
}

coin.addEventListener('click', (e) => {
    if (energy >= 1) {
        balance += 1;
        energy -= 1;

        // Создаем анимацию +1
        const plus = document.createElement('div');
        plus.innerText = '+1';
        plus.className = 'plus-one';
        plus.style.left = e.clientX + 'px';
        plus.style.top = e.clientY + 'px';
        document.body.appendChild(plus);
        setTimeout(() => plus.remove(), 700);

        updateUI();
    }
});

// Реген энергии как в Хамстере
setInterval(() => {
    if (energy < maxEnergy) {
        energy = Math.min(maxEnergy, energy + 1);
        updateUI();
    }
}, 1500);

updateUI();
