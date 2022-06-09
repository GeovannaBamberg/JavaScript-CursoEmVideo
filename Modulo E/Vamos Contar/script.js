function contar() {

    var contagemInicial = Number(document.getElementById("entradaInicial").value)
    var contagemFinal = Number(document.getElementById("entradaFinal").value)
    var contadorPassos = Number(document.getElementById("entradaPassos").value)
    var resposta = document.querySelector("div#resposta")


    
    if (contagemInicial == "" || contagemFinal== "") {
        resposta.innerHTML=(`<p>Impossivel calcular, revise os dados acima </p><br>`)

    } else if (contadorPassos== "" || contadorPassos<=0){
        contadorPassos=1
        alert("Você não colocou quantidade de passos, automaticamente será alterado para 1")
        resposta.innerHTML=(`Começará a contagem:<br>`)

        for (contador= contagemInicial; contador <= contagemFinal; contador+=contadorPassos) {

            resposta.innerHTML+=(`👉${contador} <br>`)
        } 

        for (contador= contagemInicial; contador >= contagemFinal; contador-=contadorPassos) {
            resposta.innerHTML+=(`👉${contador} <br>`)
        }
    } else {
        resposta.innerHTML=(`Começará a contagem: <br>`)

        for (contador= contagemInicial; contador <= contagemFinal; contador+=contadorPassos) {

            resposta.innerHTML+=(`👉${contador} <br>`)
        } 

        for (contador= contagemInicial; contador >= contagemFinal; contador-=contadorPassos) {
            resposta.innerHTML+=(`👉${contador} <br>`)
        }
       
    }
    resposta.innerHTML+=(`Fim da contagem 🏁<br>`)
}