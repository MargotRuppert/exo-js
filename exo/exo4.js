// let titre = document.querySelector("h1");
// console.log(titre);

// let statut = false;

// titre.addEventListener("click", () => {
//     if (statut == false){
//         titre.innerText = "haha prout";
//         statut = true;
//     } else {
//         titre.innerText = "Voici mon titre";
//         statut = false;
//     }
// });
import collection from 'easter-egg-collection';

// let text = document.getElementById("input-text");
// let btn = document.getElementById("btn");
// let div = document.getElementById("renderKey");

// text.addEventListener('keyup', ()=>{
//     if (text.value.length >= 5) {
//         btn.setAttribute("disabled", "");
//     } else {
//         btn.removeAttribute("disabled", "");
//     }
// })

// text.addEventListener("keyup",()=>{
//     div.innerText = text.value;
//     localStorage.setItem("Mon super texte", text.value);
// })

// if (localStorage.getItem("Mon super texte")){
//     document.getElementById("input-text").value = localStorage.getItem("Mon super texte");
// }

import { marked } from 'marked';
import DOMPurify from 'dompurify';
// Lessons Event Clavier
const inputTextElement = document.getElementById('input-text');
const renderKeyElement = document.getElementById('renderKey');
// console.log(inputTextElement);
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // console.log(eventDuclavier);
    console.log('eventDuclavier.key', eventDuclavier.key);
    renderKeyElement.innerHTML = DOMPurify.sanitize (marked.parse(inputTextElement.value));
    // renderKeyElement.textContent += eventDuclavier.key;
});
