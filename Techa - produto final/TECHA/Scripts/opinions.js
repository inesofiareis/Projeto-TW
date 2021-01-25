// Vai buscar os elementos pelo seu ID e pela classe
const popup = document.querySelector('#popup');
const popupBtn = document.querySelector('#button-ajuda');
const fecharBtn = document.querySelector('.fechar');

// Adiciona eventos a esses elementos
popupBtn.addEventListener('click', abrirPopup);
fecharBtn.addEventListener('click', fecharPopup);

// Abre ao clikar no botão
function abrirPopup() {
  popup.style.display = 'block';
}

// Fecha ao cickar na cruz
function fecharPopup() {
  popup.style.display = 'none';
}

const buttonSubmit = document.querySelector("#submit_opinion")
const personName = document.querySelector("#name")
const opinion = document.querySelector("#message")
const avaliacao = document.querySelector("#avaliacao")


function submetido() {

  alert("Muito Obrigado! A sua opinião será postada em breve.")


}

function carregar(event) {
  let imagem = document.getElementById('imagem_selecionada');
  imagem.src = URL.createObjectURL(event.target.files[0]);
  //é assim que se vai buscar o ficheiro e torna o file na source da imagem
}