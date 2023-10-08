const carrito = ['Producto 1','Producto 2','Producto 3'];
console.log(carrito);

carrito.map(producto => {
    return 'El producto es ' + producto;
}
);

// La función map crea un nuevo array, sacado del array pasado

