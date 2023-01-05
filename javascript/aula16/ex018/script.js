
var arrInput = [];
function adicionar(){
    var valor = window.document.querySelector('input#txtNum');
    var lista = window.document.querySelector('select#listaNum');
    var res = window.document.querySelector('div#res');
    var reinicio = window.document.querySelector('input#btnRein');
    
    var numeroInserido;
    if(valor.value.length > 0){
        numeroInserido = Number(valor.value);
    } else {
        window.alert('ERRO: Digite um valor para adicionar.');
        return;
    }
    if(numeroInserido >= 1 && numeroInserido <= 100){
        if(arrInput.indexOf(numeroInserido) < 0){ //pesuisa o valor no array. retorna -1 se não encontrar, senao retorna o index da posiçao onde ancontrou o valor
            arrInput.push(numeroInserido);
            lista.innerHTML += `<option value="v${arrInput.length}">Valor ${numeroInserido} adicionado</option>`;
            valor.value = '';
            res.innerHTML = '';
            if(arrInput.length > 0){
                reinicio.removeAttribute('disabled', '');
                reinicio.setAttribute('enabled', '');
            }
        } else {
            window.alert('ERRO: Este valor já foi adicionado.');
            valor.value = '';
            return;
        }        
    } else {
        window.alert('ERRO: Digite um número entre 1 e 100 para adicionar.');
        return;
    }
}

function analisar(){
    if(arrInput.length < 1){
        window.alert('ERRO: Adicione valores para analisar.');
        return;
    }
    var res = window.document.querySelector('div#res');
    arrInput.sort();
    var comprimento = arrInput.length;
    var maiorValor = arrInput[arrInput.length-1];
    var menorValor = arrInput[0];
    var soma = 0;
    for(var i in arrInput){
        soma += arrInput[i];
    }
    var media = soma/arrInput.length;
    //comprimento
    //maior
    //menor
    //soma
    //media
    res.innerHTML = `
        <p>Ao todo foram adicionados ${comprimento} números:</p>
        <p>O maior valor informado foi ${maiorValor}.</p>
        <p>O menor valor informado foi ${menorValor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores informados é ${media}.</p>
    `

}

function reiniciar(){
    if(arrInput.length == 0){
        window.alert('Não á valores para reiniciar. Insira seus números.')
    }
    const empt = [];
    arrInput = empt;
    var lista = window.document.querySelector('select#listaNum');
    var res = window.document.querySelector('div#res');
    var reinicio = window.document.querySelector('input#btnRein');

    res.innerHTML = '';
    lista.innerHTML = '';
    reinicio.removeAttribute('enabled', '');
    reinicio.setAttribute('disabled', '');
}