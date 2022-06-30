var moeda1 = document.getElementById('moeda1')
var moeda2 = document.getElementById('moeda2')
var valor1 = document.getElementById('valor1')
var valor2 = document.getElementById('valor2')


function converter() {
    var conv = ''
    if (valor1.value.length == 0) {
        window.alert('Insira um valor!')
    } else if (moeda1.value == 'Real' && moeda2.value == 'Dolar') {
        conv = valor1.value / 5.25
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})
    } else if (moeda1.value == 'Dolar' && moeda2.value == 'Real') {
        conv = valor1.value * 5.25
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    } else if (moeda1.value == 'Real' && moeda2.value == 'Euro') {
        conv = valor1.value / 5.47
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})
    } else if (moeda1.value == 'Euro' && moeda2.value == 'Real') {
        conv = valor1.value * 5.47
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    } else if (moeda1.value == 'Dolar' && moeda2.value == 'Euro') {
        conv = valor1.value * 0.95
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})
    } else if (moeda1.value == 'Euro' && moeda2.value == 'Dolar') {
        conv = valor1.value * 1.05
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})
     } else if (moeda1.value == 'Real' && moeda2.value == 'Libra') {
        conv = valor1.value / 6.32
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'GBP'})
    } else if (moeda1.value == 'Libra' && moeda2.value == 'Real') {
        conv = valor1.value * 6.32
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    } else if (moeda1.value == 'Dolar' && moeda2.value == 'Libra') {
        conv = valor1.value * 0.82
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'GBP'})
    } else if (moeda1.value == 'Libra' && moeda2.value == 'Dolar') {
        conv = valor1.value * 1.22
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})
    } else if (moeda1.value == 'Euro' && moeda2.value == 'Libra') {
        conv = valor1.value * 0.95
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'GBP'})
    } else if (moeda1.value == 'Libra' && moeda2.value == 'Euro') {
        conv = valor1.value / 1.16
        valor2.value = conv.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})
    }
    
}
