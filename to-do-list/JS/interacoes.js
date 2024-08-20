let contador = 0;
let input = document.getElementById("inputTarefas");
let add = document.getElementById("btn-add");
let section = document.getElementById("lista");

function addTarefa() {
    //PEGAR VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NULO NEM INDEFINIDO...
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})"         class="item-icone">
                <i id="icone_${contador}" class="bi bi-circle" style="font-size: 1.5em"></i>
            </div>
            <div onclick="marcarTarefa(${contador})"  class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick = "deletar(${contador})" class="delete"><i class="bi bi-trash"></i>Deletar</button>
            </div>
        </div>`;

        //ADICIONAR NOVO ITEM NO SECTION:
        section.innerHTML += novoItem;

        //LIMPAR O CAMPO INPUT:
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if (classe == "item") {
        item.classList.add("clicado");

        var icone = document.getElementById("icone_" + id);
        // Remove as partes antigas da classe
        icone.classList.remove("bi");
        icone.classList.remove("bi-circle");
        // Adiciona as partes novas da classe
        icone.classList.add("bi");
        icone.classList.add("bi-check-circle-fill");

        item.parentNode.appendChild(item)

    } else {
        item.classList.remove("clicado");

        var icone = document.getElementById("icone_" + id);
        // Adiciona as partes antigas da classe
        icone.classList.add("bi");
        icone.classList.add("bi-circle");
        // Remove as partes novas da classe
        icone.classList.remove("bi");
        icone.classList.remove("bi-check-circle-fill");
    }
}

input.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13):
    if (event.keyCode === 13) {
        event.preventDefault();
        add.click();
    }

})