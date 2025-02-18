//6º) Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

array = ['Antsu', 'Gi', 'Viv']

tamanho = retornaTamanhoArray(array);
console.log(tamanho);

function retornaTamanhoArray(array){
    tamanho = array.length;
    return tamanho;
}