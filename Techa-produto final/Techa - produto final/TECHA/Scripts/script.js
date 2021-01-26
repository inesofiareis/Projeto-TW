


let x = document.getElementById("login")
let y = document.getElementById("register")
let z = document.getElementById("button")

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
let usernameLogin = document.getElementById("user-log");
let passwordLogin = document.getElementById("psw-log");
let email = document.getElementById("email");
let password = document.getElementById("psw");
let confirm = document.getElementById("psw-repeat");



form.onsubmit = function () {

 if (username.value.length < 3 || username.value.length > 10){
    showError("O username deve ter entre 3-10 caracteres.");

  } else if (password.value.length > 20) {
    showError("Máximo de 20 caracteres");

  } else if (password.value !== confirm.value) {
    showError("As passes não correspondem");
  }else {
    nextStep(`Bem vindo à TECHA ${username.value.trim()}!`);
    location.href='homepage.html';
  };


  function showError(message) {
    alert(message);
  }

  function nextStep(message) {
    alert(message);
    }
}
