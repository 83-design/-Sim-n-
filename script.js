let balance = parseInt(localStorage.getItem('balance')) || 0;
let energy = 100;
const maxEnergy = 100;

function updateUI() {
    document.getElementById('balance').innerText = Math.floor(balance);
    document.getElementById('energy-text').innerText = `${energy}`;
    document.getElementById('energy-bar').style.width = (energy / maxEnergy * 100) + '%';
    localStorage.setItem('balance', balance);
}

const coin = document.getElementById('coin');

coin.addEventListener('click', (e) => {
    if (energy >= 2) {
        balance += 1;
        energy -= 2;
        
        // Вибрация (если поддерживается)
        if (window.navigator.vibrate) window.navigator.vibrate(10);

        // Создаем +1
        const plusOne = document.createElement('div');
        plusOne.innerText = '+1';
        plusOne.className = 'plus-one';
        plusOne.style.left = e.clientX + 'px';
        plusOne.style.top = e.clientY + 'px';
        document.body.appendChild(plusOne);

        setTimeout(() => plusOne.remove(), 800);
        updateUI();
    }
});

// БЫСТРЫЙ РЕГЕН (3 единицы в секунду)
setInterval(() => {
    if (energy < maxEnergy) {
        energy += 3;
        if (energy > maxEnergy) energy = maxEnergy;
        updateUI();
    }
}, 1000);

function showScreen(name) {
    // Для простоты — если это не игра, скрываем всё остальное
    // В реальном приложении тут были бы переключения экранов
    alert("Раздел " + name + " откроется в следующем обновлении!");
}

updateUI();
