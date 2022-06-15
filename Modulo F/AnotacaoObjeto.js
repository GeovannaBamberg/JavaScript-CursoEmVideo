// Objeto: 
 let amigo = {
    nome: 'julian',
    sexo: 'M',
    peso: 80,
    engordar(p=0){
        console.log("engordou")
        this.peso +=p
    } 
} 
amigo.engordar(3)
console.log(amigo.peso)


// Objetos podem Guardar varias variaveis e uma funcition sem usar nome Function
/* Chamando um elemento no objeto:
exemplo:
console.log(amigo.nome)

Uso do "this"{
    this.peso +=p
    é um comando interno para interagir com objeto

}
*/
