// script.js

// Function to create floating hearts
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    if (!heartsContainer) return;

    for (let i = 0; i < 20; i++) { // Create 20 hearts
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10s
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heartsContainer.appendChild(heart);
    }
}

// Mute button functionality
function setupMuteButton() {
    const music = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');

    if (music && muteBtn) {
        muteBtn.addEventListener('click', () => {
            if (music.paused) {
                music.play();
                muteBtn.textContent = 'Mute Music';
            } else {
                music.pause();
                muteBtn.textContent = 'Play Music';
            }
        });
    }
}

// Popup functionality for final page
function setupPopup() {
    const yesBtn = document.getElementById('yes-btn');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    if (yesBtn && popup && closePopup) {
        yesBtn.addEventListener('click', () => {
            popup.style.display = 'flex';
        });

        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }
}

// Page load animations (fade in)
function fadeInPage() {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s';
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    setupMuteButton();
    setupPopup();
    fadeInPage();
});