const movableDiv = document.getElementById('movableDiv');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

let positionX = 0;
const step = 15; // Adjust the movement step as needed

arrowLeft.addEventListener('click', () => {
  positionX -= step;
  movableDiv.style.left = positionX + 'px';
});

arrowRight.addEventListener('click', () => {
  positionX += step;
  movableDiv.style.left = positionX + 'px';
});