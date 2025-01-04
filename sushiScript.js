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

  // Add a typing message container
  const messageElement = document.createElement('div');
  messageElement.classList.add('typing-message');
  sushiContainer.appendChild(messageElement);

  // Display the typing message
  typeMessage('Happy 6th Monthsary, my love!', messageElement, 100);

  // Sushi images as buttons
  const sushiImages = ['sushi.png', 'sushi1.png', 'sushi2.png', 'sushi3.png']; // Replace with your sushi image URLs
  for (let i = 0; i < sushiImages.length; i++) {
      const sushiImage = document.createElement('img');
      sushiImage.src = sushiImages[i];
      sushiImage.classList.add('clickable-sushi');
      sushiImage.style.position = 'absolute';
      sushiImage.style.left = `${Math.random() * 100}vw`;
      sushiImage.style.top = `${Math.random() * 100}vh`;
      sushiImage.style.zIndex = '10';
      document.body.appendChild(sushiImage);

      // Add a click event to trigger crunch animation
      sushiImage.addEventListener('click', () => {
          triggerCrunchAnimation(sushiImage);
      });
  }
}

function triggerCrunchAnimation(sushiImage) {
  sushiImage.classList.add('crunch'); // Add the crunch animation

  // Remove sushi image after the animation ends
  sushiImage.addEventListener('animationend', () => {
      sushiImage.remove();
  });
}



function typeMessage(message, targetElement, interval = 100) {
  let index = 0;
  const sushiContainer = document.body;

  const typingInterval = setInterval(() => {
      if (index < message.length) {
          targetElement.textContent += message[index];
          index++;

          // Emit sushi during typing
          const sushi = document.createElement('div');
          sushi.classList.add('sushi-emission');
          sushi.style.left = `${Math.random() * 100}vw`;
          sushi.style.backgroundImage = "url('sushi.png')"; // Replace with your sushi image URL
          sushiContainer.appendChild(sushi);

          // Remove sushi after animation
          sushi.addEventListener('animationend', () => {
              sushi.remove();
          });
      } else {
          clearInterval(typingInterval);
      }
  }, interval);
}

// Trigger typing and sushi emission on page load
window.onload = () => {
  const messageElement = document.querySelector('.typing-message');
  if (messageElement) {
      typeMessage('Welcome to the sushi celebration!', messageElement);
  }
};