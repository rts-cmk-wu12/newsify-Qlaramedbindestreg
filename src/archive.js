import './scss/style.scss';

import logo from './img/newsify_logo1.png';

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.querySelector('.logo');
  logoElement.src = logo;
  logoElement.alt = 'Newsify Logo';


  const dropdownButtons = document.querySelectorAll('.dropdown-button');
  dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dropdownContent = button.nextElementSibling;
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  });
});
