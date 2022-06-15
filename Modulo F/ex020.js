let numeros = [5,8,4]

/*console.log(`Nosso vetor é ${numeros}`)
numeros[3]=7
// um vetor de 3 elementos com 3 valores diferentes: elemento 0 = 5, elemento 1=8, elemento 2= 4
console.log(`Nosso vetor adicionou ${numeros}`)

console.log(`Nosso vetor tem  ${numeros.length} elementos`)

numeros.sort()
console.log(`Nosso vetor organizado em ordem crescente ${numeros}`) */

numeros.push(1)
numeros[6] = 2
/*for (let contador = 0; contador < numeros.length; contador++) {
    console.log(`A posição ${contador} tem o valor ${numeros[contador]} `)
} */
numeros.push(5)

for(let contador in numeros){
    console.log(`A posição ${contador} tem o valor ${numeros[contador]} `)

}

let pesquisa = numeros.indexOf(5)

if (pesquisa == -1){
    console.log ("Não existe")

}
else{
console.log(`A posição que este elmento esta no array é: ${pesquisa}`)
}
var botao= addEventListener("onclick")