document.addEventListener('DOMContentLoaded', () => {
    const gifs = document.querySelectorAll('.floating-gif');
    const gallery = document.querySelector('.gallery-container');
    // Initialize random positions and movement factors
    // gifs.forEach(gif => {
    // //   const initialX = Math.random() * 100 - 50; // Range: -50 to 50
    // //   const initialY = Math.random() * 100 - 50;
    //   const speed = Math.random() * 2 + 1; // Range: 1 to 3
  
    // //   gif.dataset.initialX = initialX;
    // //   gif.dataset.initialY = initialY;
    //   gif.dataset.speed = speed;
  
    //   // Set initial position
    // //   gif.style.transform = `translate(${initialX}px, ${initialY}px)`;
    // });
  
    let mouseX = 0, mouseY = 0;
    let scrollY = window.scrollY;
    // Update mouse position
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 25;
      mouseY = (e.clientY - window.innerHeight / 2) / 25;
    });
  
    // Update scroll position
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    });
  
    // Animation loop
    function animate() {
      gifs.forEach(gif => {
        const initialX = parseFloat(gif.dataset.initialX);
        const initialY = parseFloat(gif.dataset.initialY);
        const speed = parseFloat(gif.dataset.speed);
  
        // Calculate new positions based on mouse and scroll
        const x = initialX + mouseX * speed;
        const y = initialY + mouseY * speed + scrollY * 0.05 * speed;
  
        gif.style.transform = `translate(${x}px, ${y}px)`;
      });
  
      requestAnimationFrame(animate);
    }
  
    animate();
  });


// BELT

  var loader = document.getElementById("pre-loader");
        window.addEventListener("load", function(){

            setTimeout(function(){
                loader.style.animation ="fade-out 1s ease";
            }, 0001);

            setTimeout(function(){
                loader.style.display = "none";
            }, 0001);
        });


        // Get the floating image element
const floatingImage = document.getElementById('floating-image');

// Define the starting point (scroll offset in pixels)
const startPoint = 300; // Adjust this value as needed

// Show the image when the user scrolls past the starting point
window.addEventListener('scroll', () => {
    if (window.scrollY > startPoint) {
        floatingImage.style.display = 'block';
    } else {
        floatingImage.style.display = 'none';
    }
});

// Move the image vertically with the mouse
window.addEventListener('mousemove', (event) => {
    if (window.scrollY > startPoint) {
        floatingImage.style.top = `${event.clientY}px`; // Update vertical position
    }
});

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Get the vertical scroll position
  const background = document.querySelector('.background'); // Select the background element
  background.style.backgroundPositionY = `${scrollPosition * -0.5}px`; // Move the background at 30% speed
});

if (window.innerWidth > 768) {
  document.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      background.style.backgroundPositionY = `${scrollPosition * -0.6}px`;
  });
}



