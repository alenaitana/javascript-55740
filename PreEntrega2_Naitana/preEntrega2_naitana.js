
class Producto{
    constructor(nombre, color, stock, precio){
        this.nombre = nombre
        this.color = color
        this.stock = stock
        this.precio = precio
    }

    get_stock(){
        if(this.stock <= 0)
        return false
    
    else{
        return true
        }
    }
    
    actualizacion_stock(cantidad){
        if(this.stock >= cantidad){
            this.stock = this.stock - cantidad;
        return true
    }
    else{
        console.log("No tenemos esa cantidad de stock")
    }

}
}

let listaProductos =[];

listaProductos.push(new Producto ("Fanzine", "variado", 6, 600));
listaProductos.push(new Producto ("Sticker", "variado", 50, 300));
listaProductos.push(new Producto ("Revista", "variado", 6, 600));
listaProductos.push(new Producto ("Remeras", "Amarilla", 10, 5000));
listaProductos.push(new Producto ("TotteBag", "Blanco y Negro", 15, 3500));

console.log(listaProductos.length)
console.log(listaProductos)

if(listaProductos != undefined){

}
else
{console.log("No tenemos ese producto", listaProductos)
}



console.log(alert("Bienvenido al Mundo Warholiana, elije tu producto"))
let clienteCompra = prompt("Escribi el producto que queres")
let productoFind = clienteCompra.find(listaProductos)

