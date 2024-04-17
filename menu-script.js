
const tipo = ['desayuno', 'comida', 'cena']
const desayuno = [['tostada con aguacate', 'tostada con mermelada'], ['cafe','te'], ['zumo de naranja','zumo de melocoton']]
const comida_cena = [['alubias', 'pasta'], ['ensalada','patatas fritas'], ['pan', 'tostada']]
const comentarios = ['¡Muy bien elegido!', '¡Buena opción!', '¡Es muy nutritivo lo seleccionado!']
var choice;
var num_comentario;
var precio;
var seleccion;

seleccion = true
choice = prompt('Qué quieres desayuno, comida o cena?')
while (seleccion) {
    if (tipo.includes(choice)){
        seleccion = false
    } else {
        choice = prompt('La opción es incorrecta. Debes introducir una de las opciones como aparece en la siguiente pregutna: ¿Qué quieres desayuno, comida o cena?')
    }
}

if (choice == 'desayuno') {
    precio = 9.95
    for (var i=0; i <desayuno.length; i++ ){
        if (i==0) {
            seleccion = true
            var primero = prompt(`Los platos principales son: ${desayuno[i][0]} o ${desayuno[i][1]} e incluyne dos acompañamientos por ${precio}€.`)
            while (seleccion) {
                if (desayuno[i].includes(primero)) {
                    seleccion = false
                } else{
                    primero = prompt(`La selección es incorrecta. Escribe la opción como aparece a continuación: ${desayuno[i][0]} o ${desayuno[i][1]}. Recuerde que le precio es de ${precio} e incluye dos acompañamientos.`)
                }
            }   
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else if (i==1){
            seleccion = true
            var primer_acomp = prompt(`El primer acompañamiento puede ser: ${desayuno[i][0]} o ${desayuno[i][1]} y está incluido en el precio inicial de ${precio}€.`)
            while (seleccion) {
                if (desayuno[i].includes(primer_acomp)) {
                    seleccion = false
                } else {
                    primer_acomp = prompt(`La selección es incorrecta. Escribe una de las opciones como se muestra a continuación: ${desayuno[i][0]} o ${desayuno[i][1]} y está incluido en el precio inicial de ${precio}€..`)
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else {
            seleccion = true
            var segundo_acomp = prompt(`El segundo acompañamiento puede ser: ${desayuno[i][0]} o ${desayuno[i][1]} y está incluido en el precio inicial de ${precio}€.`)
            while (seleccion) {
                if (desayuno[i].includes(segundo_acomp)) {
                    seleccion = false
                } else {
                    segundo_acomp = prompt(`La selección es incorrecta. Escribe lo mismo que una de las siguientes opciones: ${desayuno[i][0]} o ${desayuno[i][1]} y está incluido en el precio inicial de ${precio}€.`)
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        }
    }
} else if (choice == 'comida') {
    precio = 17.95
    for (var i=0; i <comida_cena.length; i++ ){
        if (i==0) {
            seleccion = true
            var primero = prompt(`Los platos principales son: ${comida_cena[i][0]} o ${comida_cena[i][1]} e incluyen dos acompañamientos por un precio total de ${precio}€.`)
            while (seleccion) {  
                if (comida_cena[i].includes(primero)) {
                    seleccion = false
                } else {
                    primero = prompt(`La selección es incorrecta. Elige una de las siguientes dos opciiones: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else if (i==1){
            seleccion = true
            var primer_acomp = prompt(`El primer acompañamiento puede ser: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
            while (seleccion) {
                if(comida_cena[i].includes(primer_acomp)) {
                    seleccion = false
                } else {
                    primer_acomp = prompt(`No es correcta la selección. Elige una de estas dos opcines: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else {
            seleccion = true
            var segundo_acomp = prompt(`El segundo acompañamiento puede ser: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
            while (seleccion) {
                if(comida_cena[i].includes(segundo_acomp)) {
                    seleccion = false
                } else {
                    segundo_acomp = prompt(`La selección es incorrecta. Elige una de estas opciones: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        }
    }
} else if (choice == 'cena') {
    precio = 14.95
    for (var i=0; i <comida_cena.length; i++ ){
        if (i==0) {
            seleccion = true
            var primero = prompt(`Los platos principales son: ${comida_cena[i][0]} o ${comida_cena[i][1]} y están incluidos dos acompañamientos por un precio total de ${precio}€.`)
            while (seleccion) {
                if(comida_cena[i].includes(primero)) {
                    seleccion = false
                } else {
                    primero = prompt(`Incorrecto. Elige una de estas opciones: ${comida_cena[i][0]} o ${comida_cena[i][1]} y están incluidos dos acompañamientos por un precio total de ${precio}€.`)
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else if (i==1){
            seleccion = true
            var primer_acomp = prompt(`El primer acompañamiento puede ser: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
            while (seleccion) {
                if(comida_cena[i].includes(primer_acomp)) {
                    seleccion = false
                } else {
                    primer_acomp = prompt(`Tu selección no es correcta. Elige una de estas opciones: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
                }
            } 
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        } else {
            seleccion = true
            var segundo_acomp = prompt(`El segundo acompañamiento puede ser: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
            while (seleccion) {
                if(comida_cena[i].includes(segundo_acomp)) {
                    seleccion = false
                } else {
                    segundo_acomp = prompt(`Tu selección no es correcta. Elige una de estas opciones: ${comida_cena[i][0]} o ${comida_cena[i][1]} y está incluido en el precio inicial de ${precio}€.`)
                }
            }
            num_comentario = Math.floor(Math.random()*3)
            alert(comentarios[num_comentario])
        }
    }
}

alert(`El precio total es de ${precio}€ y has elegido ${primero}, ${primer_acomp} y ${segundo_acomp}. ¡Buen provecho!`)




