let email = document.getElementById("email");
let password = document.getElementById("password");
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

email.addEventListener("keyup", () => {
    if (!regexMail.test(email.value)) {
        email.classList.add("input-warning");
    } else {
        email.classList.remove("input-warning");
    }
});

console.log(regexMail.test(email));

  const charDecimal = /\d/;
  const charSpecial = /[$&@!]/;

password.addEventListener("keyup", () => {
    if (!charDecimal.test(password.value) && !charSpecial.test(password.value)) {
        password.classList.add("input-warning");
    } else {
        password.classList.remove("input-warning");
    }
});

