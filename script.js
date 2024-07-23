document.querySelectorAll('.text-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width * 20 - 10;
        const offsetY = (e.clientY - rect.top) / rect.height * 20 - 10;

        item.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});
