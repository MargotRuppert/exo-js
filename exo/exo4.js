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


let text = document.getElementById("texte");
let btn = document.getElementById("btn");
let div = document.getElementById("div");

text.addEventListener('keyup', ()=>{
    if (text.value.length >= 5) {
        btn.setAttribute("disabled", "");
    } else {
        btn.removeAttribute("disabled", "");
    }
})

text.addEventListener("keyup",()=>{
    div.innerText = text.value;
    localStorage.setItem("Mon super texte", text.value);
})

if (localStorage.getItem("Mon super texte")){
    document.getElementById("texte").value = localStorage.getItem("Mon super texte");
}