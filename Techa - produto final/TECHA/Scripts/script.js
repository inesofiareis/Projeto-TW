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


let form = document.getElementById("register");
let username = document.getElementById("user");
let email = document.getElementById("email");
let password = document.getElementById("psw");
let confirm = document.getElementById("psw-repeat");

let listNames = [];
let listEmails = [];



form.onsubmit = function () {

  let listNames = [];
  let listEmails = [];

  valido = true;
  for (let i = 0; i < listNames.length; i++) {
    if (listNames.length = 0) {
      nextStep(username.value, listNames);
    } else if (username.value === listNames[i]) {
      showError("Este user já existe!");
    } else {
      nextStep(username.value, listNames);
    }
  }

  for (let i = 0; i < listEmails.length; i++) {
    if (email.value === listEmails[i]) {
      showError("Este email já existe!")
    } else if (listEmails.length = 0) {
      nextStep(email.value, listEmails);
    } else {
      nextStep(email.value, listEmails);
    }

  }

  if (password.value.length > 20) {
    showError("Máximo de 20 caracteres")
  }

  if (password.value !== confirm.value) {
    showError("As passes não correspondem")
  }


  function showError(message) {
    alert(message);
    valido = false;
    return valido;
  }

  function nextStep(input, list) {
    list.push(input);
  }

  console.log(listEmails);
  console.log(listNames);

}