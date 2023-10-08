// Function Expression

let viajando = function(destino) {
    return 'Viajando a la ciudad de ' + destino
}

let viaje = viajando('Paris')
console.log(viaje)

// Arrow Function

let viajando2 = (destino,duracion) => 'Viajando a la ciudad de ' + destino + ' por ' + duracion

let viaje2 = viajando2('Londres', '9 dias')

console.log(viaje2)


// Sacar el area de un triangulo a partir de una funcion Arrow
let area = (base,altura) => {
    a = base * altura;

    b = a/2;

    return `El area del triangulo es: ${b}`
}

let are = area(2,8)

console.log(are)