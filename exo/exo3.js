//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John SEAGAL',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

const card = document.createElement("article");
const img  = document.createElement("img");
const titre = document.createElement("h2");
const mail = document.createElement("p");
const age = document.createElement("p");
const birthday = document.createElement("p");
const active = document.createElement("p");

img.src = userData.img;
titre.innerText = userData.name;
mail.innerText = userData.email;
age.innerText = userData.age;
birthday.innerText = userData.dob;
active.innerText = userData.active;
card.append(img, titre, mail, age, birthday, active);

const main = document.querySelector(".userProfile");
main.appendChild(card);

card.style.background = "linear-gradient(60deg, rgba(93,87,194,1) 0%, rgba(201,98,183,1) 50%, rgba(255,235,103,1) 100%)";
card.style.width = "300px";
card.style.paddingLeft = "3%";
card.style.paddingRight = "3%";
card.style.paddingTop = "30px";
card.style.paddingBottom = "15px";
card.style.color = "white";
card.style.boxShadow = "0px 20px 30px #555";
img.style.width = "100%";
main.style.display = "flex";
main.style.justifyContent = "center";