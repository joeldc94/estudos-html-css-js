function gerar(){
    var valor = window.document.querySelector('input#txtvalor');
    var tabela = window.document.querySelector('select#tabuada');

    if(valor.value.length == 0){
        window.alert('ERRO: Insira o valor para calcular');
        return;
    }
    tabela.innerHTML = '';
    var mult;
    for(var i = 0; i <= 10; i++){
        mult = valor.value * i;
        tabela.innerHTML += `<option value="a">${valor.value} x ${i} = ${mult}</option>`;
    }
}