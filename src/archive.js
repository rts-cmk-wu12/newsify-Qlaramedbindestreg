import './scss/style.scss';


import logo from './img/newsify_logo1.png';

document.addEventListener('DOMContentLoaded', () => {
 
  const createLogoElement = () => {
    const logoElement = document.createElement('img');
    logoElement.src = logo; 
    logoElement.classList.add('logo-home'); 
    logoElement.alt = 'Newsify Logo';
    return logoElement;
  };


  const logoSection = document.querySelector('.logo-container2'); 
  if (logoSection) {
    const mainLogoElement = createLogoElement();
    logoSection.prepend(mainLogoElement);
  }


  const dropdownButtons = document.querySelectorAll('.dropdown-button');
  dropdownButtons.forEach(button => {
    const logoElement = createLogoElement(); 
    button.prepend(logoElement); 
  });
});



