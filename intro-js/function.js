//Funciones declarativas

function saludar(nombre) {
    console.log(`Bienvenido: ${nombre}`);
}

saludar('Corte muñe');

//Funcion Expression

const cliente = function(nombreDev,skill) {
    console.log(`Mostrando los datos del desarrollador: ${nombreDev} / ${skill}`);
}

cliente('Luciano Sarli', 'Full Stack')

