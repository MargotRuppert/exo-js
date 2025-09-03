console.log('Hello World from main.js')
// Nom dynamique du site
let nameOfSite = "Salut les copains";

let title = document.getElementById("title");

title.innerText = nameOfSite;

// copyright date dynamique

let date = new Date().getFullYear();

document.getElementById("copyright").innerText =  `Copyright © ${date} - Tous droits réservés par ${nameOfSite}`