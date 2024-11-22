import './scss/style.scss';

//import { fetchMostPopularByViews } from './fetchnytapi.js';

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


function renderArticles(articles, category, dropdownContent) {
  dropdownContent.innerHTML = ''; 
  const filteredArticles = articles.filter((article) =>
    article.section.toLowerCase().includes(category.toLowerCase())
  );

  if (filteredArticles.length === 0) {
    dropdownContent.innerHTML = `<p>No articles found for ${category}.</p>`;
    return;
  }


  filteredArticles.forEach((article) => {
    const articleElement = document.createElement('article');
    articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.abstract}</p>
      <a href="${article.url}" target="_blank">Read More</a>
    `;
    dropdownContent.appendChild(articleElement);
  });
}


async function initializeNewsDropdowns() {
  const data = await fetchMostPopularByViews(); 
  const articles = data.results || []; 


  const dropdowns = [
    { button: 'Europe', container: document.querySelector('.dropdown:nth-child(1) .dropdown-content') },
    { button: 'Health', container: document.querySelector('.dropdown:nth-child(2) .dropdown-content') },
    { button: 'Sport', container: document.querySelector('.dropdown:nth-child(3) .dropdown-content') },
    { button: 'Business', container: document.querySelector('.dropdown:nth-child(4) .dropdown-content') },
    { button: 'Travel', container: document.querySelector('.dropdown:nth-child(5) .dropdown-content') },
  ];

  dropdowns.forEach(({ button, container }) => {
    const buttonElement = document.querySelector(`.dropdown-button:contains("${button}")`);
    buttonElement.addEventListener('click', () => {
      renderArticles(articles, button, container);
    });
  });
}


document.addEventListener('DOMContentLoaded', initializeNewsDropdowns);
