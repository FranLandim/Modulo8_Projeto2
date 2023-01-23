const form = document.getElementById('form-agendaContatos');
let linhas = '';

form.addEventListener('submit', function(event){
  event.preventDefault();

  adicionaLinha();
  atualizaTabel();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('numero-contato');
  let linha = '<tr>';
  linha += `<td> ${inputNomeContato.value}</td>`;
  linha += `<td> ${inputNumeroContato.value}</td>`;
  linha += '</tr>';

  linhas += linha;

  inputNomeContato.value = '';
  inputNumeroContato.value = '';
}

function atualizaTabel() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}