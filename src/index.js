import bar from './bar.js'

bar();

import './scss/style.scss';


import Onboarding1 from './img/Onboarding1.png';
import Onboarding2 from './img/Onboarding2.png';
import Onboarding3 from './img/Onboarding3.png';
import logo from './img/newsify_logo1.png';

document.addEventListener('DOMContentLoaded', () => {

  const img = document.createElement('img');
  img.src = logo; 
  img.alt = 'logo';
  img.classList.add('logo');
  
  document.querySelector('.logo-section').appendChild(img);


  setTimeout(() => {
    document.querySelector('.logo-section').style.display = 'none'; 
    document.querySelector('.slider').classList.remove('hidden'); 
  }, 1500); 

 
  const sliderElement = document.querySelector('.slider');
  const slides = Array.from(sliderElement.querySelectorAll('.slider--slide'));

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


  const radioElements = Array.from(document.querySelectorAll('.scrollbar__radio'));
  const continueButton = document.querySelector('.continue');

  const sliderWidth = Math.ceil(sliderElement.getBoundingClientRect().width);

  radioElements.forEach((element, index) =>
    element.addEventListener('change', () => {
      sliderElement.scrollTo(sliderWidth * index, 0);
    })
  );

  continueButton.addEventListener('click', () => {
    const checkedRadio = radioElements.find(radio => radio.checked);
    const nextRadioButton = checkedRadio?.parentElement?.nextElementSibling;

    if (nextRadioButton === null || !nextRadioButton) {
      window.location = './login-page.html';
    } else {
      nextRadioButton.querySelector('input').click();
    }
  });
});
