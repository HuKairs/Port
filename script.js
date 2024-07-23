document.querySelectorAll('.text-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width * 10 - 5;
        const offsetY = (e.clientY - rect.top) / rect.height * 10 - 5;

        item.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});
