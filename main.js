const form = document.querySelector("#form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando">';
const imgReprovado =
  '<img src="./images/reprovado.png" alt="emoji decepcionado">';
  const spanAprovado ='<span class="resultado aprovado">Aprovado</span>'
  const spanReprovado ='<span class="resultado reprovado">Reprovado</span>'
let linhas = "";
let notas = [];
let atividades = [];
const notaMinima = parseFloat(prompt("Digite a nota mínima"))


form.addEventListener("submit", (e) => {
  e.preventDefault();
  addLinha();
  atualizaTabela();
  atualizaMediaFinal()
});


function addLinha() {
  const inputNomeAtiv = document.querySelector("#nome-atividade");
  const inputNotaAtiv = document.querySelector("#nota-atividade");

  if (atividades.includes(inputNomeAtiv.value)) {
    alert(`A atividade ${inputNomeAtiv.value} já foi inserida`)
  } else {
    let linha = "<tr>";
    linha += `<td>${inputNomeAtiv.value}</td>`;
    linha += `<td>${inputNotaAtiv.value}</td>`;
    linha += `<td>${inputNotaAtiv.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += "</tr>";
  
    linhas += linha;
    notas.push(parseFloat(inputNotaAtiv.value));
    atividades.push(inputNomeAtiv.value);
  }7

  inputNomeAtiv.value = "";
  inputNotaAtiv.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    const campoMediaFinal = document.querySelector("#media-final");
    const campoResultFinal = document.querySelector("#media-final-result")
    campoMediaFinal.textContent = mediaFinal.toFixed(2)
    campoResultFinal.innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
  }
 function calculaMediaFinal(){
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
     return soma / notas.length;
 };