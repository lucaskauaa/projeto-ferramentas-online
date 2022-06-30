var texto = document.getElementById('texto')
var res = document.getElementById('res')


function maiusc() {
    texto.value = texto.value.toUpperCase()
    if (texto.value.length != 0) {
        let textores = texto.value.length
        res.innerHTML = ''
        res.innerHTML += `Caracteres: ${textores}`
    } else {
        res.innerHTML = 'Caracteres: 0'
    }
}

function minusc() {
    texto.value = texto.value.toLowerCase()
    if (texto.value.length != 0) {
        let textores = texto.value.length
        res.innerHTML = ''
        res.innerHTML += `Caracteres: ${textores}`
    } else {
        res.innerHTML = 'Caracteres: 0'
    }
}

function limpar() {
    texto.value = " "
    res.innerHTML = 'Caracteres: 0'
}