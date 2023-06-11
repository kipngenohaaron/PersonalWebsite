// script.js
const skillsList = document.getElementById('skillsList');

skillsList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('selected');
  }
});
