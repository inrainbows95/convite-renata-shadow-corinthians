// Mostrar texto e botão após 4 segundos na primeira tela
window.onload = function() {
    setTimeout(function() {
        document.getElementById('text1').classList.remove('hidden');
        document.getElementById('continue').classList.remove('hidden');
    }, 4000); // 4 segundos
};

// Função para botão "Não" fugir
function moveButton() {
    var btn = document.getElementById('no');
    btn.style.position = 'absolute';
    btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    btn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
}

// Mostrar segunda tela
function showNext() {
    document.getElementById('initial').classList.add('hidden');
    document.getElementById('next').classList.remove('hidden');
    
    // Mostrar texto e botões após 4 segundos na segunda tela
    setTimeout(function() {
        document.getElementById('text2').classList.remove('hidden');
        document.getElementById('yes').classList.remove('hidden');
        document.getElementById('no').classList.remove('hidden');
    }, 4000); // 4 segundos
}

// Função final: Fogos, áudio e mensagem
function playFinal() {
    document.getElementById('next').classList.add('hidden');
    document.getElementById('final').classList.remove('hidden');
    
    // Tocar áudio do hino
    var audio = document.getElementById('hino');
    audio.play();
    
    // Mostrar e animar fogos
    document.getElementById('fireworks').classList.remove('hidden');
    initFireworks();
}

// Animação simples de fogos de artifício (adaptada de tutoriais online)
function initFireworks() {
    var canvas = document.getElementById('fireworks');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var particles = [];
    var colors = ['#FF1461', '#18FFBA', '#DC00FF', '#FFE700', '#FF851B']; // Cores vibrantes

    function createParticle(x, y) {
        return {
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: Math.random() * 50 + 50
        };
    }

    function explode() {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height / 2;
        for (var i = 0; i < 50; i++) {
            particles.push(createParticle(x, y));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(function(p, index) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // Gravidade
            p.life--;
            
            if (p.life <= 0) {
                particles.splice(index, 1);
            }
        });
        
        if (Math.random() < 0.1) {
            explode();
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}
