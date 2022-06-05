function verificador(){

    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento= document.getElementById('caixaTxtAno').value 
    var resposta= document.getElementById("resposta")
    anoNascimento = Number(anoNascimento)

    if (anoNascimento==0 || anoNascimento>ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var elementoGeneros = document.getElementsByName("generos")
        var idade = ano - anoNascimento
        var genero = ''

        if (elementoGeneros[0].checked) {
            genero = "homem"
            if (idade>=0 && idade<10) {

                img.setAttribute('src', 'http://www.clinicacoutinho.com.br/wp-content/uploads/2021/04/dor_de_dente-980x653.jpeg')
                
            } else if (idade<21){
                img.setAttribute('src', 'https://eyc7xs8f99a.exactdn.com/blog/wp-content/uploads/adolescente-em-primeiro-plano.jpg')
            } else if (idade<50){
                img.setAttribute('src', 'https://img.freepik.com/fotos-gratis/homem-jovem-e-bonito-adulto-se-sentindo-serio-forte-e-rebelde-levantando-o-punho-protestando-ou-lutando-pela-revolucao_1194-305371.jpg')
            }else{

                img.setAttribute('src', 'https://media.istockphoto.com/photos/senior-man-smiling-at-home-picture-id1029340518?k=20&m=1029340518&s=612x612&w=0&h=ztScOmlnZTb308vwJlugITqKx_xJsdASF9Fge2KsQt8=')

            }
        } else if (elementoGeneros[1].checked){
            
            genero= "mulher"

            if (idade>=0 && idade<10) {

                img.setAttributee('src', 'https://leiturinha.com.br/blog/wp-content/uploads/2018/04/intelig%C3%AAncia-emocional.jpg')
                
            } else if (idade<21){

                img.setAttribute('src', 'hhttps://www.unicef.org/brazil/sites/unicef.org.brazil/files/styles/hero_mobile/public/br_leticia_pinheiro01.jpg?itok=Dm3AT8hX')
                
            } else if (idade<50){

                img.setAttribute('src', 'https://img.freepik.com/fotos-gratis/mulher-de-negocios-jovem-adulto-treinador-no-escritorio-fecha-as-orelhas-com-as-maos-os-bracos-as-palmas-das-maos_183314-4092.jpg?w=740')

            }else{

                img.setAttribute('src', 'https://img.freepik.com/fotos-gratis/mulher-africana-idosa-sorridente-retrato-de-rosto_53876-143107.jpg?w=2000')

            }

            
        }
        resposta.style.textAlign='center'
        resposta.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        resposta.appendChild(img)
    }

}
