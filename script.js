/* -- Text container tilt effect -- */
document.querySelectorAll('.text-container').forEach(container => {
  container.onmousemove = event => {
    const { offsetX, offsetY, target } = event;
    const { clientWidth, clientHeight } = target;

    const rotateX = ((offsetY / clientHeight) - 0.5) * 20; // Adjust the multiplier for more/less tilt
    const rotateY = ((offsetX / clientWidth) - 0.5) * -20; // Adjust the multiplier for more/less tilt

    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  container.onmouseleave = () => {
    container.style.transform = 'rotateX(0) rotateY(0)';
  };
});
