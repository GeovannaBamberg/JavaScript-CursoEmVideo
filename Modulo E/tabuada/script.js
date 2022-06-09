function calcularTabuada(){
    let multiplo= Number(document.getElementById("multiplo").value)
    let resposta= document.querySelector("select#resposta")

    resposta.innerHTML=(``)
    

    if (resposta=="") {
        multiplo= 0
        
        for (let contador = 0; contador <= 10; contador++) {
            let multiplicar= contador*multiplo
           resposta.innerHTML+=(`<option value="multiplo${contador}">${contador} X ${multiplo} = ${multiplicar}</option>`)
           
           /* let option = document.createElement("option")
            option.text= (`${contador} X ${multiplo} = ${multiplicar}`)
            resposta.appendChild(option)*/
        }
        
    } else {

        for (let contador = 0; contador <= 10; contador++) {
            let multiplicar= contador*multiplo
            resposta.innerHTML+=(`<option value="multiplo${contador}">${contador} X ${multiplo} = ${multiplicar}</option>`)

            /*let option = document.createElement("option")
            option.text= (`${contador} X ${multiplo} = ${multiplicar}`)
            option.value=(`tab${contador}`)
            resposta.appendChild(option)*/

        }

    }
}