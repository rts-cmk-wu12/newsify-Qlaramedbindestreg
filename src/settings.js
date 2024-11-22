import './scss/style.scss';

import logo from './img/newsify_logo1.png';

document.addEventListener('DOMContentLoaded', () => {

  const logoSection = document.querySelector('.logo-container-settings');
  const logoElement = document.createElement('img');
  logoElement.src = logo;
  logoElement.classList.add('logo-home'); 
  logoElement.alt = 'Newsify Logo';
  logoSection.prepend(logoElement);


  const createLogoElement = () => {
    const categoryLogo = document.createElement('img');
    categoryLogo.src = logo;
    categoryLogo.classList.add('logo-home'); 
    categoryLogo.alt = 'Category Logo';
    return categoryLogo;
    
  };

  const categoryNames = document.querySelectorAll('.category-name');
  categoryNames.forEach(categoryName => {
      const categoryLogo = createLogoElement(); 
      categoryName.prepend(categoryLogo); 
  });
});


/*let switchElm = document.querySelector("#switch");
let rootElm = document.documentElement;
let darkMode = localStorage.getItem("darkmode");
let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;

function enableLightmode() {
    rootElm.setAttribute("data-mode", "light")
    switchElm.checked = false
}

function enableDarkmode() {
    rootElm.setAttribute("data-mode", "dark")
    switchElm.checked = true
}

if(matched || darkMode == "true") {
    enableDarkmode();
} 

if ( darkMode == "false"){
     enableLightmode();
}

switchElm.addEventListener("click", function() {
    console.log(switchElm.checked)

    if(switchElm.checked) {
        enableDarkmode()
        localStorage.setItem("darkmode", switchElm.checked )

    } else{
        enableLightmode()
        localStorage.setItem("darkmode", switchElm.checked )
    }
})*/
