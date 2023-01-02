function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO: Verifique o ano e tente novamente!');
    } else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = ' Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'homem_crianca.png');
            } else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'homem_jovem.png');
            } else if(idade >= 21 && idade < 60){
                img.setAttribute('src', 'homem_adulto.png');
            } else {
                img.setAttribute('src', 'homem_idoso.png');
            }
        } else if(fsex[1].checked){
            genero = 'a Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'mulher_crianca.png');
            } else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'mulher_jovem.png');
            } else if(idade >= 21 && idade < 60){
                img.setAttribute('src', 'mulher_adulta.png');
            } else {
                img.setAttribute('src', 'mulher_idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos um${genero} de ${idade} anos!`;
        res.appendChild(img);
    }
}