
const tipo = ['desayuno', 'comida', 'cena']
const desayuno = [['tostada con aguacate', 'tostada con mermelada'], ['cafe','te'], ['zumo de naranja','zumo de melocoton']]
const comida_cena = [['alubias', 'pasta'], ['ensalada','patatas fritas'], ['pan', 'tostada']]
const comentarios = ['¡Muy bien elegido!', '¡Buena opción!', '¡Es muy nutritivo lo seleccionado!']
var choice;
var num_comentario;
var precio_total;
var seleccion;

seleccion = true
while (seleccion) {
    choice = prompt('Qué quieres desayuno, comida o cena?')
    if (tipo.includes(choice)){
        seleccion = false
    }
}

if (choice == 'desayuno') {
    precio_total = 9.95
    for (var i=0; i <desayuno.length; i++ ){
        if (i==0) {
            seleccion = true
            while (seleccion) {
                var primero = prompt(`Los platos principales son: ${desayuno[i][0]} o ${desayuno[i][1]}`)
                if (desayuno[i].includes(primero)) {
                    seleccion = false
                }
            }   
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
            alert('El precio del desayuno es 9,95€ con dos acompañamientos.')
        } else if (i==1){
            seleccion = true
            while (seleccion) {
                var primer_acomp = prompt(`El primer acompañamiento puede ser: ${desayuno[i][0]} o ${desayuno[i][1]}`)
                if (desayuno[i].includes(primer_acomp)) {
                    seleccion = false
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else {
            seleccion = true
            while (seleccion) {
                var segundo_acomp = prompt(`El segundo acompañamiento puede ser: ${desayuno[i][0]} o ${desayuno[i][1]}`)
                if (desayuno[i].includes(segundo_acomp)) {
                    seleccion = false
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        }
    }
} else if (choice == 'comida') {
    precio_total = 17.95
    for (var i=0; i <comida_cena.length; i++ ){
        if (i==0) {
            seleccion = true
            while (seleccion) {
                var primero = prompt(`Los platos principales son: ${comida_cena[i][0]} o ${comida_cena[i][1]}`)
                if (comida_cena[i].includes(primero)) {
                    seleccion = false
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
            alert('El precio de la comida es 17,95€ con dos acompañamientos.')
        } else if (i==1){
            seleccion = true
            while (seleccion) {
                var primer_acomp = prompt(`El primer acompañamiento puede ser: ${comida_cena[i][0]} o ${comida_cena[i][1]}`)
                if(comida_cena[i].includes(primer_acomp)) {
                    seleccion = false
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else {
            seleccion = true
            while (seleccion) {
                var segundo_acomp = prompt(`El segundo acompañamiento puede ser: ${comida_cena[i][0]} o ${comida_cena[i][1]}`)
                if(comida_cena[i].includes(segundo_acomp)) {
                    seleccion = false
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        }
    }
} else if (choice == 'cena') {
    precio_total = 14.95
    for (var i=0; i <comida_cena.length; i++ ){
        if (i==0) {
            seleccion = true
            while (seleccion) {
                var primero = prompt(`Los platos principales son: ${comida_cena[i][0]} o ${comida_cena[i][1]}`)
                if(comida_cena[i].includes(primero)) {
                    seleccion = false
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
            alert('El precio de la comida es 14,95€ con dos acompañamientos.')
        } else if (i==1){
            seleccion = true
            while (seleccion) {
                var primer_acomp = prompt(`El primer acompañamiento puede ser: ${comida_cena[i][0]} o ${comida_cena[i][1]}`)
                if(comida_cena[i].includes(primer_acomp)) {
                    seleccion = false
                }
            } 
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else {
            seleccion = true
            while (seleccion) {
                var segundo_acomp = prompt(`El segundo acompañamiento puede ser: ${comida_cena[i][0]} o ${comida_cena[i][1]}`)
                if(comida_cena[i].includes(segundo_acomp)) {
                    seleccion = false
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        }
    }
} else {
    choice = prompt('Debes introudicr la opción como se escribe en la siguiente pregunta. Qué quieres desayuno, comida o cena?')
}

alert(`El precio total es de ${precio_total}€.`)




