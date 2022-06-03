var horaAtual = new Date()
var hora = horaAtual.getHours()
console.log(`agora são exatamente ${hora} horas.`)

if (hora<=12) {
    console.log("bom dia")
    
} else {
    if (hora <=18){
        console.log("boa tarde")
    } else{
        if (hora<=24){
            console.log ("boa noite")
        } else{
            console.log("não existe este horario")
        }
        
    } 
}