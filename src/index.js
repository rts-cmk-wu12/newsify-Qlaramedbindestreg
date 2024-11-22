import bar from './bar.js'

bar();

import './scss/style.scss';

import Onboarding1 from './img/Onboarding1.png';
import Onboarding2 from './img/Onboarding2.png';
import Onboarding3 from './img/Onboarding3.png';
import logo from './img/newsify_logo1.png';

document.addEventListener('DOMContentLoaded', () => {
  const logoSection = document.querySelector('.logo-section');
  const slider = document.querySelector('.slider');
  const scrollbar = document.querySelector('.scrollbar');
  const buttons = document.querySelector('.buttons');
 

  // logo image above the app name
  const img = document.createElement('img');
  img.src = logo;
  img.alt = 'Newsify Logo';
  img.classList.add('logo');
  logoSection.prepend(img);


  // slider content
  const sliderContent = [
    {
      img: Onboarding1,
      title: "Stay Connected, Everywhere, Anytime",
      text: "Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.",
    },
    {
      img: Onboarding2,
      title: "Become a Savvy Global Citizen.",
      text: "Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!",
    },
    {
      img: Onboarding3,
      title: "Enhance your News Journey Now!",
      text: "Be part of our dynamic community and contribute your insights and participate in enriching conversations.",
    },
  ];

  // populate slider
  const slides = Array.from(slider.querySelectorAll('.slider--slide'));
  slides.forEach((slide, index) => {
    const content = sliderContent[index];
    if (content) {
      const imgDiv = slide.querySelector('div');
      const titleElement = slide.querySelector('h2');
      const textElement = slide.querySelector('p');

      imgDiv.style.backgroundImage = `url(${content.img})`;
      imgDiv.style.backgroundSize = 'cover';
      imgDiv.style.backgroundPosition = 'center';
      imgDiv.style.height = '200px';

      titleElement.textContent = content.title;
      textElement.textContent = content.text;
    }
  });

  // initially hide slider, scrollbar, and buttons
  slider.style.visibility = 'hidden';
  slider.style.opacity = '0';
  scrollbar.style.visibility = 'hidden';
  scrollbar.style.opacity = '0';
  buttons.style.visibility = 'hidden';
  buttons.style.opacity = '0';

  // show slider, scrollbar, and buttons after splash screen
  setTimeout(() => {
    logoSection.style.display = 'none'; 
    slider.style.visibility = 'visible';
    slider.style.opacity = '1';
    scrollbar.style.visibility = 'visible';
    scrollbar.style.opacity = '1';
    buttons.style.visibility = 'visible';
    buttons.style.opacity = '1';
  }, 1500); 
});

// slider
const sliderElement = document.querySelector('.slider');
const continueButton = document.querySelector('.continue');
const radioElements = Array.from(document.querySelectorAll('.scrollbar__radio'));

const sliderWidth = Math.ceil(sliderElement.getBoundingClientRect().width);

radioElements.forEach((element, index)=> element.addEventListener('change', () => {
    sliderElement.scrollTo(sliderWidth * index, 0);
}));

continueButton.addEventListener('click', () => {
   const checkedRadio = radioElements.find(radio => radio.checked);
   const nextRadioButton = checkedRadio.parentElement.nextElementSibling;

   if (nextRadioButton === null) {
    window.location = './login-page.html';
   } else {
    nextRadioButton.click();
   }


});

