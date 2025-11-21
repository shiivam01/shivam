function createConfetti() {
    const container = document.querySelector(".confetti-container");

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Random horizontal position
        confetti.style.left = `${Math.random() * 100}%`;

        // Random animation delay
        confetti.style.animationDelay = `${Math.random() * 5}s`;

        // Random color
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        container.appendChild(confetti);
    }
}

createConfetti();

