// Criando uma tabela hash (objeto JavaScript)
let tabelaMemoriaDeCodigo = {};
let enderecoMemoriaCodigo = 0o00;

//valores redisradores de seguimentos
let regSeletoresDeSegmentos = {
    "CS": "10000",
    "DS": "20000",
    "SS": "30000",
    "ES": "40000",
    "FS": "50000",
    "GS": "60000",
};

// valores dos registradores de deslocamento
const ip = document.getElementById("valorEIP").textContent = "x";
const sp = document.getElementById("valorESP").textContent = "x";
const bp = document.getElementById("valorEBP").textContent = "x";
const di = document.getElementById("valorEDI").textContent = "x";
const si = document.getElementById("valorESI").textContent = "x";
let contadorColunas = 2;

// Função para adicionar uma nova coluna
function adicionarColuna() {
    let tabela = document.getElementById("tabelaRegDeslocamento");
    let linhas = tabela.rows;

    // Adiciona um novo cabeçalho (coluna no <thead>)
    let th = document.createElement("th");
    
    linhas[0].appendChild(th);

    // Adiciona células a cada linha da tabela (coluna no <tbody>)
    for (let i = 1; i < linhas.length; i++) {
        let novaCelula = linhas[i].insertCell(-1); // Insere no final da linha
        novaCelula.textContent = "0x" + Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase(); // Valor aleatório
    }

    contadorColunas++; // Atualiza o contador para nomear corretamente as próximas colunas
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







