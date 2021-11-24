function inserirValor(num) {
    document.querySelector('.display').value = document.querySelector('.display').value + num;
}

function igual() {
    if(document.querySelector('.display') == ' ') {

    } else {
        document.querySelector('.display').value = eval(document.querySelector('.display').value);
    }
}

function apagarTudo() {
    document.querySelector('.display').value = '';
}

function apagarUm() {
    let display = document.querySelector('.display').value;
    document.querySelector('.display').value = display.substring(0, display.length -1);
}