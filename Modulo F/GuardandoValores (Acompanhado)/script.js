var valores = []

var elementoSelect= document.getElementById("selecao")
var elementoResposta= document.getElementById("respostaDetalhada")

function isNumero(valor) {
    if (valor >= 1 && valor <=100) {
        return true
    } else{
        return false
    }
}

function inLista(valor, lista) {
    
    if (lista.indexOf(valor) == -1){

        return  true

    } else{
        return false
    }
}

function adicionar(){
    var numero= Number(document.getElementById("entradaValor").value)

    if (isNumero(numero) && inLista(numero, valores)){
        valores.push(numero)
        let item = document.createElement('option')
        item.text = (`valor ${numero} adicionado`)
        elementoSelect.appendChild(item)
        elementoResposta.innerHTML=''
    }
    else{
        alert("valor invalido ou ja encontrado na lista")
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length==0){
        alert("Adicione valores antes de finalizar!")
    } else{
        let quantidadeDeValores = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
    
        for (const posicao in valores) {

            soma+= valores[posicao]
          
            if (valores[posicao]> maior){
                maior = valores[posicao]
            }
            if (valores[posicao]< menor){
                menor = valores[posicao]
            }
        }
        
        media = soma/quantidadeDeValores
        elementoResposta.innerHTML=''
        elementoResposta.innerHTML+= (`<p> Ao todo, temos ${quantidadeDeValores} numeros cadastrados</p>`)
        elementoResposta.innerHTML+= (`<p> O maior valor informado foi ${maior} entre os numeros cadastrados</p>`)
        elementoResposta.innerHTML+= (`<p> O menor valor informado foi ${menor} entre os numeros cadastrados</p>`)
        elementoResposta.innerHTML+= (`<p> A soma de todos valores ${soma}</p>`)
        elementoResposta.innerHTML+= (`<p> A media dos valores ${media}</p>`)
    }
}