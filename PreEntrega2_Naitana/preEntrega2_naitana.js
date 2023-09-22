
class Producto {
    constructor(nombre, color, stock, precio) {
        this.nombre = nombre
        this.color = color
        this.stock = stock
        this.precio = precio
    }

    get_info() {
        console.log("nombre: ", this.nombre);
        console.log("color: ", this.color);
        console.log("stock: ", this.stock);
        console.log("precio: ", this.precio);
    }

    get_stock() {
        if (this.stock <= 0)
            return false

        else {
            return true
        }
    }

    actualizacion_stock(cantidad) {
        if (this.stock >= cantidad) {
            this.stock = this.stock - cantidad;
            return true
        }
        else {
            console.log("No tenemos esa cantidad de stock")
        }
    }


}

let listaProductos = [];

listaProductos.push(new Producto("Fanzine", "variado", 6, 600));
listaProductos.push(new Producto("Sticker", "variado", 50, 300));
listaProductos.push(new Producto("Revista", "variado", 6, 600));
listaProductos.push(new Producto("Remeras", "Amarilla", 10, 5000));
listaProductos.push(new Producto("TotteBag", "Blanco y Negro", 15, 3500));

console.log(listaProductos.length)
console.log(listaProductos)


alert("Bienvenido al Mundo Warholiana, elije tu producto")
let clienteCompra = prompt("Escribi el producto que queres")
let cantidadDelProducto = prompt("Decinos cuantos/as queres comprar")

let productoBuscado = listaProductos.find(function (producto) {
    return producto.nombre === clienteCompra;
});


if (productoBuscado) {
    if (productoBuscado.actualizacion_stock(cantidadDelProducto)) {
        console.log(
            `Usted busca ${cantidadDelProducto} ${productoBuscado.nombre}(s) y deberá pagar un total de ${cantidadDelProducto * productoBuscado.precio}`
        );
    } else {
        console.log("nose a podido realizar la compra");
    }
} else {
    console.log("No encontramos tu producto")
}
º