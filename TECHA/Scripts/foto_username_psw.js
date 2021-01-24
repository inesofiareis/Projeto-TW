
let button = document.getElementById('alterarbtn');

button.addEventListener('click', function (event) {
    let username = document.getElementById('n_user').value;         //pega o username mudado/colocado no html 'gestão_conta'
    let label_nome_espaco = document.getElementById('label_nome');  //pega o 'espaço' do 'registar/nome' nos htmls
    label_nome_espaco.innerHTML = username                          //preenche/substitui o espaço com o username obtido
    event.preventDefault()  
});