


// Vai buscar os elementos pelo seu ID e pela classe
const popup = document.querySelector('#popup');
const popupBtn = document.querySelector('#button-carrinho');
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


function funcao1() {
  let nome1 = document.getElementById("texto1").innerHTML; //pega o nome do item
  let nome = nome1.toString();
  let valor1 = document.getElementById('texto1a').innerHTML; //pega o valor do item
  let valor = valor1.toString();
  let nome_valor = nome + ' ' + valor;
  alert(`O item ${nome}, com valor correspondente a ${valor}, foi adicionado ao carrinho.`);
  nome_valor_espaco = document.getElementById('card'); //pega o 'espaço' do div onde irá aparecer o nome/valor
  nome_valor_espaco.innerHTML = nome_valor; //preenche o espaço com o obtido

  let imagem = document.getElementById('rato1').src
  document.getElementById('img_carrinho').src=imagem
}
function funcao2() {
  let nome1 = document.getElementById("texto2").innerHTML; //pega o nome do item
  let nome = nome1.toString();
  let valor1 = document.getElementById('texto2a').innerHTML; //pega o valor do item
  let valor = valor1.toString();
  let nome_valor = nome + ' ' + valor;
  alert(`O item ${nome}, com valor correspondente a ${valor}, foi adicionado ao carrinho.`);
  nome_valor_espaco = document.getElementById('card'); //pega o 'espaço' do div onde irá aparecer o nome/valor
  nome_valor_espaco.innerHTML = nome_valor; //preenche o espaço com o obtido

  let imagem = document.getElementById('rato2').src
  document.getElementById('img_carrinho').src=imagem
}
function funcao3() {
  let nome1 = document.getElementById("texto3").innerHTML; //pega o nome do item
  let nome = nome1.toString();
  let valor1 = document.getElementById('texto3a').innerHTML; //pega o valor do item
  let valor = valor1.toString();
  let nome_valor = nome + ' ' + valor;
  alert(`O item ${nome}, com valor correspondente a ${valor}, foi adicionado ao carrinho.`);
  nome_valor_espaco = document.getElementById('card'); //pega o 'espaço' do div onde irá aparecer o nome/valor
  nome_valor_espaco.innerHTML = nome_valor; //preenche o espaço com o obtido

  let imagem = document.getElementById('rato3').src
  document.getElementById('img_carrinho').src=imagem
}
function funcao4() {
  let nome1 = document.getElementById("texto4").innerHTML; //pega o nome do item
  let nome = nome1.toString();
  let valor1 = document.getElementById('texto4a').innerHTML; //pega o valor do item
  let valor = valor1.toString();
  let nome_valor = nome + ' ' + valor;
  alert(`O item ${nome}, com valor correspondente a ${valor}, foi adicionado ao carrinho.`);
  nome_valor_espaco = document.getElementById('card'); //pega o 'espaço' do div onde irá aparecer o nome/valor
  nome_valor_espaco.innerHTML = nome_valor; //preenche o espaço com o obtido

  let imagem = document.getElementById('rato4').src
  document.getElementById('img_carrinho').src=imagem
}
function funcao5() {
  let nome1 = document.getElementById("texto5").innerHTML; //pega o nome do item
  let nome = nome1.toString();
  let valor1 = document.getElementById('texto5a').innerHTML; //pega o valor do item
  let valor = valor1.toString();
  let nome_valor = nome + ' ' + valor;
  alert(`O item ${nome}, com valor correspondente a ${valor}, foi adicionado ao carrinho.`);
  nome_valor_espaco = document.getElementById('card'); //pega o 'espaço' do div onde irá aparecer o nome/valor
  nome_valor_espaco.innerHTML = nome_valor; //preenche o espaço com o obtido

  let imagem = document.getElementById('rato5').src
  document.getElementById('img_carrinho').src=imagem
}
function funcao6() {
  let nome1 = document.getElementById("texto6").innerHTML; //pega o nome do item
  let nome = nome1.toString();
  let valor1 = document.getElementById('texto6a').innerHTML; //pega o valor do item
  let valor = valor1.toString();
  let nome_valor = nome + ' ' + valor;
  alert(`O item ${nome}, com valor correspondente a ${valor}, foi adicionado ao carrinho.`);
  nome_valor_espaco = document.getElementById('card'); //pega o 'espaço' do div onde irá aparecer o nome/valor
  nome_valor_espaco.innerHTML = nome_valor; //preenche o espaço com o obtido

  let imagem = document.getElementById('rato6').src
  document.getElementById('img_carrinho').src=imagem
}
