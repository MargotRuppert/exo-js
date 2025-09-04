// import collection from 'easter-egg-collection';

// console.log('Hello World from main.js')
// console.log(import.meta.env.VITE_SOME_KEY) // "123"
// console.log(import.meta.env.VITE_DB_PASSWORD) // undefined
// // Nom dynamique du site
// let nameOfSite = "Salut les copains";

// let title = document.getElementById("title");

// title.innerText = nameOfSite;

// // copyright date dynamique

// let date = new Date().getFullYear();

// document.getElementById("copyright").innerText =  `Copyright © ${date} - Tous droits réservés par ${nameOfSite}`

import { renderTimeline } from './services/timelineService.js';


document.addEventListener('DOMContentLoaded', () => {
    renderTimeline("#timeline");
  });
