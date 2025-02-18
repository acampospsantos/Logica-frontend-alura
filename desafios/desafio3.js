//3º) Desenvolva uma função que valide se uma string é vazia ou não.
function validaString(){
    let string = prompt('Digite uma string: ');

    if(string == ''){
        console.log('A String está vazia!');
    } else {
        console.log('A String não é vazia!');
    }    
}