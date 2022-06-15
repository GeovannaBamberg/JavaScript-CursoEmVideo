// fatorial de um numero
// 5! = 5x4x3x2x1

function fatorial(numero){
    let fator = 1
    for (let contador= numero; contador >1; contador--) {
        
        fator *= contador
        
    }

    return fator
}

console.log (fatorial(5))