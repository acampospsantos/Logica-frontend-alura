//2º) Implemente uma função que verifique se uma pessoa é maior de idade.
function verificaIdade() {
    let idade;
    idade = prompt('Digite uma idade: ');
    idade = parseInt(idade);
    while (idade < 0 || idade > 120) {
        alert('## Digite uma idade válida! ##')
        idade = prompt('Digite uma idade: ');
        idade = parseInt(idade);
    }

    if (idade >= 18) {
        console.log('O usuário tem ' + idade + ' anos, logo é maior de idade!');
    } else { //idade < 18
        console.log('O usuário tem ' + idade + ' anos, logo é menor de idade!');
    }
}