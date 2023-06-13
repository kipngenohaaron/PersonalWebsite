// script.js
// Change background color
function changeBackgroundColor() {
    const body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();
  }
  
  // Generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Event listener for form submission
const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  displayMessage();
});

// Function to display a message after form submission
function displayMessage() {
  const messageContainer = document.createElement('div');
  messageContainer.textContent = 'Thank you for your message! We will get back to you soon.';
  messageContainer.classList.add('message');
  
  const section = document.querySelector('section');
  section.appendChild(messageContainer);

  // Reset form fields after submission
  contactForm.reset();
}
