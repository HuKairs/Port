document.querySelectorAll('.text-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width * 10 - 5; // Horizontal tilt
        const offsetY = (e.clientY - rect.top) / rect.height * 10 - 5; // Vertical tilt

        // Apply tilt effect
        item.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});
