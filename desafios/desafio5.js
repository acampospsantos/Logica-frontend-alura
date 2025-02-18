//5º) Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
calculaMedia();
function calculaMedia(){
    let numero1;
    let numero2;

    numero1 = prompt('Digite o primeiro numero: ');
    if(isNaN(numero1)){
        console.log(numero1 + 'NÃO é um número válido!');
        return;
    }
    numero1 = parseInt(numero1);

    numero2 = prompt('Digite o segundo numero: ');
    if(isNaN(numero2)){
        console.log(numero2 + 'NÃO é um número válido!');
        return;
    }
    numero2 = parseInt(numero2);

    let media = (numero1 + numero2)/2
    console.log('A média entre ' + numero1 + ' e ' + numero2 + ' = ' + media);
}