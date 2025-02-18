//8º) Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

let array = ['Anderson', 'Giovanna', 'Vívian', 'Atencio'];
nome = 'Anderson'

verificaArray(array, nome)

function verificaArray(array, elemento){
    if(array.includes(elemento)){
        console.log(elemento + ' está no Array!');
    } else {
        console.log(elemento + ' NÃO está no Array!');
    }
}