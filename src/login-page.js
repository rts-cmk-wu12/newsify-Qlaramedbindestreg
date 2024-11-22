import './scss/style.scss';

import logo from './img/newsify_logo1.png';
const logoSection = document.querySelector('.logo-container');

document.addEventListener('DOMContentLoaded', () => {
    const logoElement = document.createElement('img');
    logoElement.src = logo;
    logoElement.classList.add('logo-login'); 
    logoElement.alt = 'Newsify Logo';
    logoSection.prepend(logoElement);
  });