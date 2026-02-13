function yesClicked() {
    const message = document.getElementById('message');
    message.textContent = '❤️ Je suis si heureux ! Tu me rends vraiment heureux ! ❤️';
    message.style.fontSize = '1.8em';
    message.style.animation = 'pulse 1s infinite';
}

// Ajouter une animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);
