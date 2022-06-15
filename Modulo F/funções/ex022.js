function soma(n1=0,n2="oi") {
    return n1+n2
}

console.log(soma(2,4))

// se eu não colocar um parametro, será considerado undifid
console.log(soma(2))

//o retorno automaticamente será: NaN (não é um numero)

/* mas se a função receber

function soma(n1=0,n2=0) {
    return n1+n2
}

toda vez que o parametro não for passado, o numero que será usado será: 0 
funciona com strings tbm
*/

// 
