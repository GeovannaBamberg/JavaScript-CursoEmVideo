function contar() {

    var contagemInicial = Number(document.getElementById("entradaInicial").value)
    var contagemFinal = Number(document.getElementById("entradaFinal").value)
    var contadorPassos = Number(document.getElementById("entradaPassos").value)
    var resposta = document.querySelector("div#resposta")
    
    if (contagemInicial== "" || contagemFinal== "") {
        alert("não dar para começar sem inicio e sem fim.")

    } else if (contagemInicial<=contagemFinal){
        resposta.innerHTML=(`Começará a contagem: <br>`)

        for (contador= contagemInicial; contador <= contagemFinal; contador+=contadorPassos) {

            resposta.innerHTML+=(`${contador} <br>`)
            
        } 
    } else if(contagemInicial>contagemFinal){
        resposta.innerHTML=(`Começará a contagem: <br>`)

        for (contador= contagemInicial; contador >= contagemFinal; contador= contador-contadorPassos) {

            resposta.innerHTML+=(`${contador} <br>`)
        }

    }
 
    }
