import { fetchMostPopularByViews } from "./js/fetch";
//const { fetchMostPopularByViews } = require ("./fetch");

const popularNews = await fetchMostPopularByViews();

import img1 from '../img/Onboarding 1.png';
document.getElementById('image').src = img1;

import logo from '../img/newsify_logo 1.png';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);

