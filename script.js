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
  
  // Add event listener to the header for background color change
  const header = document.querySelector('header');
  header.addEventListener('click', changeBackgroundColor);
  
  // Show additional information
  function showAdditionalInfo() {
    const additionalInfo = document.querySelector('.additional-info');
    additionalInfo.classList.toggle('hide');
  }
  
  // Add event listener to the "Interest and Skills" section for additional information
  const skillsHeader = document.querySelector('h2');
  skillsHeader.addEventListener('click', showAdditionalInfo);
  