// Tela 1: Mostrar GIF, depois texto e botão após 2 segundos
window.onload = function() {
    const shadow = document.getElementById('shadow');
    const attention = document.getElementById('attention');
    const continueBtn = document.getElementById('continue');

    shadow.classList.remove('hidden');
    setTimeout(() => {
        attention.classList.remove('hidden');
        continueBtn.classList.remove('hidden');
    }, 2000); // 2 segundos
};

// Mostrar Tela 2: Primeiro texto, depois segundo texto e botões após 2 segundos
function showScreen2() {
    document.getElementById('screen1').classList.add('hidden');
    const screen2 = document.getElementById('screen2');
    const apology = document.getElementById('apology');
    const invitation = document.getElementById('invitation');
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');

    screen2.classList.remove('hidden');
    apology.classList.remove('hidden');
    setTimeout(() => {
        invitation.classList.remove('hidden');
        yesBtn.classList.remove('hidden');
        noBtn.classList.remove('hidden');
    }, 2000); // 2 segundos
}

// Botão "Não" fugitivo
function moveButton() {
    const btn = document.getElementById('no');
    btn.style.position = 'absolute';
    btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    btn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
}

// Fogos de artifício e hino
function showFireworks() {
    document.getElementById('screen2').classList.add('hidden');
    const screen3 = document.getElementById('screen3');
    screen3.classList.remove('hidden');

    // Tocar hino
    const hino = document.getElementById('hino');
    hino.play();

    // Fogos de artifício
    const canvas = document.getElementById('fireworksCanvas');
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        canvas: canvas
    });
    setInterval(() => {
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: Math.random() },
            canvas: canvas
        });
    }, 500); // Fogos contínuos a cada 0.5s
}
