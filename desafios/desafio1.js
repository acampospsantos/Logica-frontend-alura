//1º) Crie uma função que valide se um número é positivo, negativo ou zero.
function validaNumero() {
    let numero;
    numero = prompt('Digite um número: ');
    numero = parseInt(numero);

    if (numero < 0) {
        console.log('O número ' + numero + ' é negativo!');
    } else if (numero == 0) {
        console.log('O número ' + numero + ' é zero!')
    } else { //numero > 0
        console.log('O número ' + numero + ' é positivo!');
    }
}