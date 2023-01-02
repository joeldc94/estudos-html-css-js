function carregar(){
    var msg = window.document.getElementById('msg');
    var foto = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours();
    //var hora = 23;
    msg.innerHTML = `Agora são ${hora} horas!`;
    if(hora >= 0 && hora < 12){
        foto.src = 'foto_manha.png';
        document.body.style.background = '#c2a65c'
    } else if(hora >= 12 && hora < 20){
        foto.src = 'foto_tarde.png';        
        document.body.style.background = '#c98570'
    } else{
        foto.src = 'foto_noite.png';        
        document.body.style.background = '#202a45'
    }
}
