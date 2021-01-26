




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