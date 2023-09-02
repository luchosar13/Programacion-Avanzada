/*console.log('Hola Mundo desde JavaScript')

// Ejercicio 1
console.log('---------------------------------------------')

const nombre = 'Luciano'
const apellido = 'Sarli'
edad = 22

console.log('Mi nombre es ' + nombre + apellido + ' y mi edad es de ' + edad + ' anios')

// Ejercicio 2
console.log('---------------------------------------------')

const num1 = prompt('Ingrese el primer numero a analizar')

const num2 = prompt('Ingrese el segundo numero a analizar')

const div = num1/num2

console.log('La division de los dos numeros es igual a: ' + div)*/

// Ejercicio 3 y 4
console.log('---------------------------------------------')

const nom = prompt('Ingrese su nombre')

const genero = prompt('Ingrese su genero (F/M)')

const edad = prompt('Ingrese su edad')

const gen_mayuscula = genero.toUpperCase();

if (gen_mayuscula == 'M' && edad >= 65) {
    console.log('Es jubilado')
} else {
    if (gen_mayuscula == 'F' && edad >= 60)
    console.log('Es jubilada')
}

// Ejecicio 5
console.log('---------------------------------------------')

var i;

const nomb = prompt('Ingrese su nombre')

const gene = prompt('Ingrese su genero (F/M)')

const ed = prompt('Ingrese su edad')

const ge_mayuscula = gene.toUpperCase();

for(i = 1; i <= 2; i++)
{
if (ge_mayuscula == 'M' && ed >= 65) {
    console.log('Es jubilado')
} else {
    if (ge_mayuscula == 'F' && ed >= 60)
    console.log('Es jubilada')
}
}



