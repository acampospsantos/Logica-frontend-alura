//Queremos recuperar campos que estão a partir do HTML pelo id
//id == identificador único
//Os três campos que queremos: quantidade, de, ate
function sortear() {
    //document é uma variável global do JavaScript - representa o documento(a página HTML)
    let quantidade = parseInt(document.getElementById('quantidade').value); //um elemento vai ser buscado pelo id
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //let numero = obterNumeroAleatorio(quantidade, de, ate)
    //alert(numero);
    let sorteados = [];
    let numero;

    if (de > ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }

        sorteados.push(numero);
    }

    //alert(sorteados);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    //Apóx exibir o resultado... vamos alterar o estilo do botão reiniciar
    alterarStatusBotao();
}


function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


function obterNumeroAleatorio(min, max) {
    //return parseInt(Math.random() * (max - min) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}