* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
}

body {
    background: #000;
    color: #fff;
    font-family: 'Arial', sans-serif;
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.top-nav {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    font-size: 14px;
    background: #1c1c1e;
}

.stats-cards {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    gap: 5px;
}

.card {
    background: #2c2c2e;
    flex: 1;
    padding: 10px;
    border-radius: 12px;
    font-size: 10px;
    text-align: center;
    border: 1px solid #3a3a3c;
}

.main-balance {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 36px;
    font-weight: bold;
    margin-top: 20px;
}

.coin-area {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.coin-circle {
    width: 280px;
    height: 280px;
    background: linear-gradient(180deg, #2c3e50, #000);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 40px rgba(44, 62, 80, 0.8);
}

#coin {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background: url('coin.jpg') center/cover;
    border: 8px solid #3a3a3c;
    position: relative;
    transition: transform 0.05s ease;
}

.dimon-text {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    color: #f3ba2f;
    font-weight: bold;
    font-size: 20px;
    text-shadow: 2px 2px 5px #000;
}

#coin:active { transform: scale(0.95); }

.energy-section {
    padding: 0 25px 100px 25px; /* Отступ под меню */
}

.energy-text { font-weight: bold; font-size: 18px; margin-bottom: 5px; }

.energy-bar-bg {
    width: 100%;
    height: 12px;
    background: #3a3a3c;
    border-radius: 10px;
    margin-top: 10px;
}

#energy-bar {
    width: 100%;
    height: 100%;
    background: #f3ba2f;
    border-radius: 10px;
    transition: width 0.2s;
}

.bottom-menu {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: #1c1c1e;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #3a3a3c;
}

.nav-item {
    text-align: center;
    font-size: 10px;
    color: #8e8e93;
}

.nav-item.active { color: #f3ba2f; }

/* Анимация +1 */
.plus-one {
    position: absolute;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    pointer-events: none;
    animation: up 0.7s ease-out forwards;
}

@keyframes up {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-130px); opacity: 0; }
}
