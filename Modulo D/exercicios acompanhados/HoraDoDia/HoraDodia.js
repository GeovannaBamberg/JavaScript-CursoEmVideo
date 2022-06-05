function carregar(){
    var resposta = document.getElementById("resposta")
    var foto = document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()

    resposta.innerHTML=(`Agora são ${hora} horas`)
    if (hora>=0 && hora<12){
        foto.src="/Modulo D/exercicios acompanhados/HoraDoDia/asserts/manhã.jpg"

        document.body.style.background="#FFF0D7"
       
        
    } else{
        if (hora>=12 && hora<18) {
            foto.src=("/Modulo D/exercicios acompanhados/HoraDoDia/asserts/tarde.jpg")
            foto.alt=("foto da tarde")

            document.body.style.background="#FEBC80"
        } else {
            foto.src=("/Modulo D/exercicios acompanhados/HoraDoDia/asserts/noite.jpg")
            foto.alt=("foto da noite")
            document.body.style.background="#1E383E"
            document.body.style.color ="white"
            resposta.style.color="black"
        }
    }

}