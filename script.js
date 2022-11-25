function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var idade = ano - Number(fAno.value)

    if (Number(fAno.value) > ano || idade > 120) {
        window.alert('[ERRO] Ano inválido! Tente novamente...')
    } else {
        var fSex = document.getElementsByName(`radsex`)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            if (idade >=0 && idade < 10) {
                genero = 'Criança'
                img.setAttribute('src', 'bebeHomem.jpg')
            } else if (idade < 21) {
                genero = 'Jovem'
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade < 50) {
                genero = 'Homem'
                img.setAttribute('src', 'adultoHomem.jpg')
            } else {
                genero = 'Senhor'
                img.setAttribute('src', 'idosoHomem.jpg')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                genero = 'Criança'
                img.setAttribute('src', 'bebeMulher.jpg')
            } else if (idade < 21) {
                genero = 'Jovem'
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 50) {
                genero = 'Mulher'
                img.setAttribute('src', 'adultoMulher.jpg')
            } else {
                genero = 'Senhora'
                img.setAttribute('src', 'idosoMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}