function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const colorSpan = document.querySelector('.color');
  const changeButton = document.querySelector('.change-color');

  changeButton.addEventListener('click', function () {
      const randomColor = getRandomHexColor();

      body.style.backgroundColor = randomColor;
      colorSpan.textContent = randomColor;
  });
});