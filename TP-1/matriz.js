var nombres = new Array();

nombres[0] = 'Luciano'
nombres[1] = 'Luis Gabriel'
nombres[2] = 'Donato'
nombres[3] = 'Fernando'
nombres[4] = 'Kazanski'

document.write(nombres[0] + "<br>")
document.write(nombres[1] + "<br>")
document.write(nombres[2] + "<br>")
document.write(nombres[3] + "<br>")
document.write(nombres[4] + "<br>")

var i;

const busquedaNombre = prompt('Ingresar el nombre a buscar en la lista');
if(!nombres.includes(busquedaNombre)){
    alert('El nombre no se encuentra en la lista!!');}
    else{
        alert('El nombre fue encontrado en la lista!!')
}