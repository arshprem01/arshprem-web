window.initAnimations = function () {
    // 1. Scroll Animations (Fade/Slide)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
    animatedElements.forEach(el => observer.observe(el));


    // 2. 3D Tilt & Spotlight Effect
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', handleTiltMove);
        card.addEventListener('mouseleave', handleTiltLeave);
    });

    // 3. Cinematic Text Reveal (Split text if not already split)
    const revealTexts = document.querySelectorAll('.reveal-text-container');
    revealTexts.forEach(container => {
        if (container.dataset.splitted === "true") return; // Avoid double split

        const text = container.textContent.trim();
        container.innerHTML = '';
        container.dataset.splitted = "true";

        // Split by words first to handle spacing correctly
        const words = text.split(' ');
        let globalCharIndex = 0;

        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'inline-block whitespace-nowrap overflow-hidden mr-2'; // mr-2 for space

            word.split('').forEach((char) => {
                const charSpan = document.createElement('span');
                charSpan.className = 'reveal-char';
                charSpan.textContent = char;
                // Stagger delay
                charSpan.style.animationDelay = `${globalCharIndex * 0.03}s`;
                wordSpan.appendChild(charSpan);
                globalCharIndex++;
            });

            container.appendChild(wordSpan);
        });
    });
};

function handleTiltMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight variables
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
}

function handleTiltLeave(e) {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
}

// Initialize
document.addEventListener('DOMContentLoaded', window.initAnimations);
document.addEventListener('turbo:load', window.initAnimations);
