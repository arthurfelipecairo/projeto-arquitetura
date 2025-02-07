// Criando uma tabela hash (objeto JavaScript)
let tabelaMemoriaDeCodigo = {};
let enderecoMemoriaCodigo = 0o00;

let regSeletoresDeSegmentos = {
    "CS": "10000",
    "DS": "20000",
    "SS": "30000",
    "ES": "40000",
}

// Inicializar a exibição da tabela
atualizarTabelas();

// Função para atualizar a exibição da tabela HTML
function atualizarTabelas() {
    atualizarTabelaMemoriaDeCodigo();
    atualizarTabelaReg();
}

function atualizarTabelaMemoriaDeCodigo() {
    const tabelaBody = document.querySelector("#hashTable tbody");
    tabelaBody.innerHTML = ""; // Limpa a tabela antes de atualizar

    for (const chave in tabelaMemoriaDeCodigo) {
        let linha = document.createElement("tr");

        console.log(linha);

        let colunaChave = document.createElement("td");
        colunaChave.textContent = chave;

        let colunaValor = document.createElement("td");
        colunaValor.textContent = tabelaMemoriaDeCodigo[chave];

        linha.appendChild(colunaChave);
        linha.appendChild(colunaValor);
        tabelaBody.appendChild(linha);
    }
}

function atualizarTabelaReg() {
    const tabelaBody = document.querySelector("#tabelaRegSeletoriesDeSeg tbody");
    tabelaBody.innerHTML = ""; // Limpa a tabela antes de atualizar

    for (const chave in regSeletoresDeSegmentos) {
        let linha = document.createElement("tr");

        console.log(linha);

        let colunaChave = document.createElement("td");
        colunaChave.textContent = chave;

        let colunaValor = document.createElement("td");
        colunaValor.textContent = regSeletoresDeSegmentos[chave];

        linha.appendChild(colunaChave);
        linha.appendChild(colunaValor);
        tabelaBody.appendChild(linha);
    }
}

// Adicionar novo item à tabela hash
document.getElementById("addButton").addEventListener("click", () => {
    const valorInput = document.getElementById("valorInput").value.trim();

    if (valorInput === "") {
        alert("Por favor, digite um valor antes de adicionar!");
        return;
    }

    const chave = enderecoMemoriaCodigo.toString(8);
    enderecoMemoriaCodigo += 1;
    tabelaMemoriaDeCodigo[chave] = valorInput;
    
    document.getElementById("valorInput").value = ""; // Limpa o campo de entrada
    atualizarTabelas();
});

// Remover o último item da tabela hash
document.getElementById("removeButton").addEventListener("click", () => {
    const chaves = Object.keys(tabelaMemoriaDeCodigo);
    if (chaves.length > 0) {
        delete tabelaMemoriaDeCodigo[chaves[chaves.length - 1]];
        atualizarTabelas();
    }
});


