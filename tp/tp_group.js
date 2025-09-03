const teamData = [
    {
        Name: "Margot",
        Email: "margot.ruppert@gmail.com",
        Img: "https://picsum.photos/200",
    },
    {
        Name: "Lucas",
        Email: "lulu.delpeyrou@gmail.com",
        Img: "https://picsum.photos/200",
    },
    {
        Name: "Maxime",
        Email: "maxime.cloarec@gmail.com",
        Img: "https://picsum.photos/200",
    },
]

let users = document.getElementById("userProfile");

teamData.forEach(user => {
    let card = document.createElement("div")
    card.classList.add("card-sm");
    card.classList.add("card-border");
    card.classList.add("bg-zinc-100");
    card.classList.add("text-neutral");
    card.classList.add("w-fit");
    card.classList.add("rounded-box")
    for (const key in user) {
        if(key != "Img"){
            let text= document.createElement('p');
            text.classList.add("p-4")
            text.innerText = user[key];
            card.append(text);
        } else {
            let img = document.createElement('img');
            img.classList.add("p-4")
            img.src = user[key];

            card.append(img);
        }
    }
    users.append(card);
});

