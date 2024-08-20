let contador = 0;
let input = document.getElementById('inputTarefas');
let add = document.getElementById('btn-add');
let section = document.getElementById('lista');

function addTarefa() {
    //PEGAR VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NULO NEM INDEFINIDO...
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})"            class="item-icone">
                <span id="circle" class="material-symbols-outlined">
                    circle
                </span>
                <span id="check" class="material-symbols-outlined">
                    check_circle
                </span>
            </div>
            <div onclick="marcarTarefa(${contador})"  class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick = "deletar(${contador})" class="delete"><span class="material-symbols-outlined">
                        delete
                    </span>Deletar</button>
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
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item") {
        item.classList.add('clicado');

        document.getElementById('circle').style.display = 'none';
        document.getElementById('check').style.display = 'block';

 

    } else {
        item.classList.remove('clicado');

        document.getElementById('circle').style.display = 'block';
        document.getElementById('check').style.display = 'none';

    }
}

input.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13):
    if (event.keyCode === 13) {
        event.preventDefault();
        add.click();
    }

})