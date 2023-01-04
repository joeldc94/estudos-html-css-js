function contar(){
    var inicio = window.document.querySelector('input#txtinicio');
    var fim = window.document.querySelector('input#txtfim');
    var passo = window.document.querySelector('input#txtpasso');
    var res = window.document.querySelector('p#res');
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO: insira todos os parâmetros solicitados.');
        return;
    }else if(inicio.value == fim.value){
        window.alert('ERRO: insira valores diferentes para início e fim.');
        return;
    }else if(passo.value == 0){
        window.alert('ATENÇÃO: Não é possível calcular com passo = 0. Será apresentado o resultado com passo = 1!');
        passo.value = 1;
    }
    if(inicio.value > fim.value){
        window.alert('ATENÇÃO: O valor do início é menor que o valor do fim. Será apresentada uma contagem decrescente!');
        if(passo.value > 0)
            passo.value *= -1;
    }else{
        if(passo.value < 0)
            passo.value *= -1;
    }

    
    res.innerHTML=`Início: `;

    var cont = Number(inicio.value);
    if(passo.value>0){
        while(cont <= Number(fim.value)){
            res.innerHTML += `&#128073 ${cont} `;
            cont += Number(passo.value);
        }
    }
    else{
        while(cont >= Number(fim.value)){
            res.innerHTML += `&#128073 ${cont} `;
            cont += Number(passo.value);
        }
    }
    res.innerHTML += `&#128077 :Fim`;
}