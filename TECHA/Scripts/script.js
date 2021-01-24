var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("button")

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "400px";
  z.style.left = "0px";
}


/* const form = document.querySelector("#register");
const username = document.querySelector("#user");
const email = document.querySelector("#email");
const password = document.querySelector("#psw");
const confirm = document.querySelector("#psw-repeat");


verify();




function verify() {
  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = confirm.value.trim();

  let listNames = []
  let listEmails = []


  for (let i = 0; i < listNames.length; i++) {
      if (listNames.length === 0) {
        aprovado(userValue, listNames);
      } else if (userValue === listNames[i]) {
        showError(userValue, "Este user já existe!");
      } else {
        aprovado(userValue, listNames);
      }
  }

    for (let i = 0; i < listEmails.length; i++) {
      if (emailValue === listEmails[i]) {
        showError(email, "Este email já existe!")
      } else if (listEmails.length === 0) {
        aprovado(userValue, listNames);
      } else {
        aprovado(email, listEmails);
      }

    }
    if (passwordValue == "") {
      showError(password, "Máximo de 20 caracteres")
    } else {
      serSucesso(password);
    }

    if (passwordValue !== password2Value) {
      showError(confirm, "As passes não correspondem")
    } else {
      serSucesso(confirm);
    }



    function showError(input, whatShows) {
      input.placeholder = whatShows;
    }

    function aprovado(input, list) {
      input.push(list);
    }


    function serSucesso(input) {
      input;
    }
   } */

function validateForm() {

  const form = document.getElementbyId("register");
  const username = document.getElementbyId("user");
  const email = document.getElementbyId("email");
  const password = document.getElementbyId("psw");
  const confirm = document.getElementbyId("psw-repeat");

  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = confirm.value.trim();
    

  alert(userValue);
  }