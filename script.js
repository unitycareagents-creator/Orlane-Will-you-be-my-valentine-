// Countdown Timer Script
const countdownDate = new Date('2025-09-17T00:00:00');

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const distance = countdownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "EXPIRED";
        // Trigger confetti
        triggerConfetti();
    }
}

setInterval(updateCountdown, 1000);

// YES and NO button handlers
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    alert('You clicked YES!');
});

noButton.addEventListener('click', () => {
    alert('You clicked NO!');
});

// Confetti animation
function triggerConfetti() {
    const colors = ['#FFC0CB', '#FFD700', '#00FF00', '#00CED1', '#FF69B4'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.position = 'absolute';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.height = '10px';
        confetti.style.width = '10px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        document.body.appendChild(confetti);
        // Add animation effect
        setTimeout(() => { confetti.remove(); }, 3000);
    }
}