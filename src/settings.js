import './scss/style.scss';

let switchElm = document.querySelector("#switch");
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
})
