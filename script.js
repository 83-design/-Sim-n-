let balance = parseInt(localStorage.getItem('balance')) || 0;
let energy = 100;
const maxEnergy = 100;

function updateUI() {
    document.getElementById('balance').innerText = balance;
    document.getElementById('energy-text').innerText = `${energy} / ${maxEnergy}`;
    document.getElementById('energy-bar').style.width = (energy / maxEnergy * 100) + '%';
    localStorage.setItem('balance', balance);
}

document.getElementById('coin').addEventListener('click', (e) => {
    if (energy >= 2) {
        balance += 1;
        energy -= 2;
        updateUI();
    }
});

setInterval(() => { if (energy < maxEnergy) { energy++; updateUI(); } }, 1000);

function showScreen(name) {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('shop-screen').classList.add('hidden');
    document.getElementById('ref-screen').classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
}

function buySkin(skin, price) {
    if (balance >= price) {
        balance -= price;
        document.getElementById('coin').className = skin;
        updateUI();
    } else { alert("Мало Димон-коинов!"); }
}

function buyUpgrade(type, price) {
    if (balance >= price) {
        balance -= price;
        setInterval(() => { balance += 1; updateUI(); }, 1000);
        updateUI();
        alert("Авто-кликер запущен!");
    }
}
updateUI();

