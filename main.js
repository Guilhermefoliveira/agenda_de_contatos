const form = document.getElementById("form-agenda");
const nomesLista = [];
const telefoneLista = [];
let linhas = "";
let nomeValido = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  gerarListaNomes();
});

function adicionaLinha() {
  const cadastrarNome = document.getElementById("nome");
  const cadastrarTelefone = document.getElementById("telefone");

  if (nomesLista.includes(cadastrarNome.value)) {
    alert(
      `O Contato ${cadastrarNome.value} do telefone ${cadastrarTelefone.value} já consta na agenda!`
    );
    cadastrarNome.value = "";
    cadastrarTelefone.value = "";
  } else {
    nomesLista.push(cadastrarNome.value);
    telefoneLista.push(cadastrarTelefone.value);

    let linha = "<tr>";
    linha += `<td>${cadastrarNome.value}</td>`;
    linha += `<td>${cadastrarTelefone.value}</td>`;
    linha += "</tr>";

    linhas += linha;

    cadastrarNome.value = "";
    cadastrarTelefone.value = "";
  }
}
function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

