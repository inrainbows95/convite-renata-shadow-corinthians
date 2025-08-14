function moveButton() {
    var btn = document.getElementById('no');
    btn.style.position = 'absolute';
    btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    btn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
}

function moveButton2() {
    var btn = document.getElementById('no2');
    btn.style.position = 'absolute';
    btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    btn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
}

function showNext() {
    document.getElementById('initial').classList.add('hidden');
    document.getElementById('next').classList.remove('hidden');
}

function playHino() {
    document.getElementById('next').classList.add('hidden');
    document.getElementById('final').classList.remove('hidden');
    var iframe = document.getElementById('youtube');
    iframe.src = iframe.src;
}
