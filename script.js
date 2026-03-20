let balance = parseInt(localStorage.getItem('balance')) || 0;
let energy = 100;
const maxEnergy = 100;

function updateUI() {
    document.getElementById('balance').innerText = balance.toLocaleString();
    document.getElementById('energy-text').innerText = Math.floor(energy);
    document.getElementById('energy-bar').style.width = (energy / maxEnergy * 100) + '%';
    localStorage.setItem('balance', balance);
}

document.getElementById('coin').addEventListener('click', (e) => {
    if (energy >= 1) {
        balance += 1;
        energy -= 1;

        // Создаем вылетающий текст +1
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

// Регенерация энергии
setInterval(() => {
    if (energy < maxEnergy) {
        energy = Math.min(maxEnergy, energy + 1);
        updateUI();
    }
}, 1000);

// Управление окнами
function showTab(type) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    title.innerText = type === 'shop' ? 'Магазин' : 'Рефералы';
    modal.classList.remove('hidden');
}

function closeTab() {
    document.getElementById('modal').classList.add('hidden');
}

updateUI();
