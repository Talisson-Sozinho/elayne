document.addEventListener('DOMContentLoaded', (event) => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');

    yesBtn.addEventListener('click', () => {
        message.classList.remove('hidden');
    });

    noBtn.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
