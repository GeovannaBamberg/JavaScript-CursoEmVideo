// RECURSIVIDADE
function fatorial(numero){

    if (numero==1){
        return 1
    } else{
        return numero*fatorial(numero-1)
    }
}
console.log(fatorial(5))

/* O que acontece aqui é loop eterno, toda vez que function é chamada ela ssobe novamente eusa a ação, e sempre cai no "return numero*fatorial(numero-1)" ate chegar no parametro numero 1, é doido */

/* 
5! =5*4*3*2*1
5! = 5*4!

n= n *(n-1)
1!= 1
*/


