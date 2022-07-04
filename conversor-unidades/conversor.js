var medida1 = document.getElementById('medida1')
var medida2 = document.getElementById('medida2')
var valor = document.getElementById('valor')
var res = document.getElementById('res')

function temperatura() {
    medida1.innerHTML = ''
    medida2.innerHTML = ''
    valor.value = ''
    res.value = ''
    var temp = ['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)']
    for (var c = 0; c < temp.length; c++) {
        var option = document.createElement('option')
        option.setAttribute('value',temp[c])
        option.text = temp[c]
        medida1.appendChild(option)
    }

    for (var c = 0; c < temp.length; c++) {
        var option = document.createElement('option')
        option.setAttribute('value',temp[c])
        option.text = temp[c]
        medida2.appendChild(option)
    }
}

function comprimento() {
    medida1.innerHTML = ''
    medida2.innerHTML = ''
    valor.value = ''
    res.value = ''
    var compr = ['Metro (m)', 'Quilômetro (km)', 'Centímetro (cm)', 'Milímetro (mm)']
    for(var c = 0; c < compr.length; c++) {
        var option = document.createElement('option')
        option.setAttribute('value',compr[c])
        option.text = compr[c]
        medida1.appendChild(option)
    }

    for(var c = 0; c < compr.length; c++) {
        var option = document.createElement('option')
        option.setAttribute('value',compr[c])
        option.text = compr[c]
        medida2.appendChild(option)
    }
}

function peso() {
    medida1.innerHTML = ''
    medida2.innerHTML = ''
    valor.value = ''
    res.value = ''
    var peso = ['Quilo (kg)', 'Grama (g)', 'Miligrama (mg)', 'Tonelada (t)']
    for (var c = 0; c < peso.length; c++) {
        var option = document.createElement('option')
        option.setAttribute('value',peso[c])
        option.text = peso[c]
        medida1.appendChild(option)
    }

    for (var c = 0; c < peso.length; c++) {
        var option = document.createElement('option')
        option.setAttribute('value',peso[c])
        option.text = peso[c]
        medida2.appendChild(option)
    }
}

function tempo() {
    medida1.innerHTML = ''
    medida2.innerHTML = ''
    valor.value = ''
    res.value = ''
    var tempo = ['Segundo', 'Minuto', 'Hora', 'Dia', 'Semana', 'Mês', 'Ano']
    for (var c = 0; c < tempo.length; c++) {
        var option = document.createElement('option')
        option.setAttribute('value',tempo[c])
        option.text = tempo[c]
        medida1.appendChild(option)
    }

    for (var c = 0; c < tempo.length; c++) {
        var option = document.createElement('option')
        option.setAttribute('value',tempo[c])
        option.text = tempo[c]
        medida2.appendChild(option)
    }
}

function converter() {
    var conv = ''
    if (valor.value.length == 0) {
        window.alert ('Insira um valor!')
    }else if (medida1.value == 'Celsius (°C)' && medida2.value == 'Celsius (°C)') {
        res.value = `${valor.value} °C`
    } else if (medida1.value == 'Fahrenheit (°F)' && medida2.value == 'Fahrenheit (°F)') {
        res.value = `${valor.value} °F`
    } else if (medida1.value == 'Kelvin (K)' && medida2.value == 'Kelvin (K)') {
        res.value = `${valor.value} K`
    } else if (medida1.value == 'Celsius (°C)' && medida2.value == 'Fahrenheit (°F)') {
        conv = 1.8 * valor.value + 32
        res.value = `${conv.toFixed(2)} °F`
    } else if (medida1.value == 'Fahrenheit (°F)' && medida2.value == 'Celsius (°C)') {
        conv = (valor.value - 32) / 1.8
        res.value = `${conv.toFixed(2)} °C`
    } else if (medida1.value == 'Celsius (°C)' && medida2.value == 'Kelvin (K)') {
        conv = Number(valor.value) + 273
        res.value = `${conv} K`
    } else if (medida1.value == 'Kelvin (K)' && medida2.value == 'Celsius (°C)') {
        conv = valor.value - 273
        res.value = `${conv} °C`
    } else if (medida1.value == 'Fahrenheit (°F)' && medida2.value == 'Kelvin (K)') {
        conv = ((valor.value - 32) * 5/9) + 273
        res.value = `${conv.toFixed(2)} K`
    } else if (medida1.value == 'Kelvin (K)' && medida2.value == 'Fahrenheit (°F)') {
        conv = (valor.value - 273) * 1.8 + 32
        res.value = `${conv.toFixed(2)} °F`
    }
}

/*function converter() {
    var conv = [1.8 * valor.value + 32, (valor.value - 32) / 1.8, Number(valor.value) + 273, valor.value - 273, ((valor.value - 32) * 5/9) + 273, (valor.value - 273) * 1.8 + 32]

    var temp = ['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)']
    for (var c = 0; c <= 6; c++) {
        var s = c + 1
        if (medida1 == temp[c] && medida2 == temp[s]) { 
            res.value = conv[0]
        }
    }
}*/