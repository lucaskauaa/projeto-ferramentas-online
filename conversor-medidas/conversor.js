var medida1 = document.getElementById('medida1')
var medida2 = document.getElementById('medida2')

function temperatura() {
    medida1.innerHTML = ' '
    medida2.innerHTML = ' '
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
    medida1.innerHTML = ' '
    medida2.innerHTML = ' '
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
    medida1.innerHTML = ' '
    medida2.innerHTML = ' '
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
    medida1.innerHTML = ' '
    medida2.innerHTML = ' '
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