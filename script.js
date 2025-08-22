document.addEventListener("DOMContentLoaded", function() {
    // Typing-Effekt mit Typed.js
    var typed = new Typed('#typing', {
        strings: ["Hello — I'm Michael."],
        typeSpeed: 100,
        loop: false
    });

    // Parallax-Effekt für Wolken
    const clouds = document.querySelectorAll('.cloud');
    new simpleParallax(clouds, {
        orientation: 'up',
        scale: 1.2,
        overflow: false
    });

    // Dark-Mode-Toggle 
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    const topCloud = document.getElementById('top-cloud');
    const botCloud = document.getElementById('bot-cloud');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
            topCloud.src = 'images/cloud-dark.png';
            botCloud.src = 'images/cloud-dark.png';
            if (sun) sun.style.display = 'none';
            if (moon) moon.style.display = 'block';
        } else {
            toggleButton.textContent = '🌙';
            topCloud.src = 'images/cloud-light.png';
            botCloud.src = 'images/cloud-light.png';
            if (sun) sun.style.display = 'block';
            if (moon) moon.style.display = 'none';
        }
    });

    // Initiale Anzeige für Sonne und Mond
    if (sun) sun.style.display = 'block';
    if (moon) moon.style.display = 'none';
});