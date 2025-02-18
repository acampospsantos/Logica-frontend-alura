let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    //VALIDAÇÕES
    if(amigo.value == ''){
        alert('## Informe o nome do amigo!! ##')
        return;
    }
    if(amigos.includes(amigo.value)){
        alert('## DIGITE UM NOME DIFERENTE!! ##');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}


function sortear(){
    //VALIDAÇÃO
    if(amigos.length < 4){
        alert('## ADICIONE AO MENOS 4 AMIGOS!! ##')
        return;
    }
    embaralha(amigos);    
    let sorteio = document.getElementById('lista-sorteio');
    for (let i=0; i < amigos.length; i++){
        if(i == amigos.length-1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista){
    for(let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){
    amigos = []
    lista = document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}