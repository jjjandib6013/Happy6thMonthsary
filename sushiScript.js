let bounceCount = 0;

function bounceSushi() {
  const sushi = document.querySelector('.sushi');
  const shadow = document.querySelector('.shadow');

  bounceCount++;

  if (bounceCount >= 5) {
    sushiShatterAnimation();
    return;
  }

  sushi.classList.add('bounce');
  shadow.classList.add('bounce');

  sushi.addEventListener(
    'animationend',
    () => {
      sushi.classList.remove('bounce');
      shadow.classList.remove('bounce');
    },
    { once: true }
  );
}

function sushiShatterAnimation() {
  const sushi = document.querySelector('.sushi');
  const shadow = document.querySelector('.shadow');

  // Remove shadow
  shadow.style.display = 'none';

  // Add shattering effect
  sushi.classList.add('shatter');

  // After animation, call sushiShatter()
  sushi.addEventListener(
    'animationend',
    () => {
      sushiShatter();
    },
    { once: true }
  );
}

function sushiShatter() {
  const sushiContainer = document.querySelector('.sushi-container');
  sushiContainer.innerHTML = ''; // Clear the sushi container

  window.location.href = 'slider.html';
}