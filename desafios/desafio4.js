//4º) Crie uma função que determine se um ano é bissexto

function verificaBissexto(){
    let ano = prompt('Digite um ano para verificação: ');

    // Verifica se o ano é um número válido
    if (isNaN(ano)) {
        console.log('Por favor, digite um ano válido.');
        return;
    }

    if(ano%4 == 0){
        if(ano%100 == 0 && ano%400 != 0){ //EXCETO
            console.log(ano + ' NÃO É BISSEXTO!');
        } else {
            console.log(ano + ' É BISSEXTO!');
        }
    } else {
        console.log(ano + ' NÃO É BISSEXTO!');
    }
}