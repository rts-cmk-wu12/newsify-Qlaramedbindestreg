import './scss/style.scss';

import logo from './img/newsify_logo1.png';
const logoSection = document.querySelector('.logo-container');

document.addEventListener('DOMContentLoaded', () => {
    const logoElement = document.querySelector('.logo');
    logoElement.src = logo;
    logoElement.alt = 'Newsify Logo';
    logoSection.append(img);
  });