let countBtn = document.getElementById("btn");
let phrase = document.querySelector("p");
let total = localStorage.getItem("Nombre mensonge") || 0;
phrase.innerText = `Nombre de mensonges : ${total}`;


countBtn.addEventListener("click", ()=>{
    total ++;
    phrase.innerText = `Nombre de mensonges : ${total}`;
    localStorage.setItem("Nombre mensonge", total);
})


