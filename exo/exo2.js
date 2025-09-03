console.log(document);

let allParag = document.getElementsByTagName('p');
console.log('La HTMLCollection',allParag);

let lesParagsuper = document.getElementsByClassName('super');
console.log('lePsuper',lesParagsuper);

let lePcool = document.getElementById('cool');
console.log('lePcool',lePcool);

// //? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé)
let lePremierP = document.querySelector('p');

console.log('lePremierP via querySelector : ',lePremierP);

let tousLesP = document.querySelectorAll('p')[0];
console.log('tousLesP via querySelectorAll : ',tousLesP);

let lePremierId = document.querySelector('#cool');
console.log('1er Id via querySelector : ',lePremierId);
let laPremierClass = document.querySelector('.super');
console.log('1er Classe via querySelector : ',laPremierClass);
let touteLesClasses = document.querySelectorAll('.super')
console.log('toutes Classe via querySelectorAll : ',touteLesClasses);

// //! Placer des elements dans une page web
// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let allParagraphes = document.querySelectorAll('p');
let laDiv = document.querySelector('.vide');
let premierH1 = document.querySelector('h1');
// //! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
document.body.insertBefore(allParagraphes[2],premierH1);