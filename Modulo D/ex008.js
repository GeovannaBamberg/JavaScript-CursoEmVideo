var velocidade = Number(prompt("Qual a velocidade que você estava ao ser parada?"))
var velocidadePermita = 60

if (velocidade <= 60) {
    console.log(`Sua velocidade é ${velocidade}, esta na linha permetida, continue com segurança`)
    
}else{
    console.log (`Sua velocidade é ${velocidade}, você ultrapassou ${velocidadePermita} KM, MULTADO!`)
}