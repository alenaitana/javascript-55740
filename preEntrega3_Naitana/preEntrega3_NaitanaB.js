
class Tienda {
    constructor() {
this.productos = [];
    }

    agregarProducto(producto) {
    this.productos.push(producto);
    }


}

class Producto {
    constructor(nombre, descripcion, precio,cantidad, imgURL) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad
    this.imgURL = imgURL;  
    }
}

const warholianaTienda = new Tienda();

let producto1 = new Producto('Tote-Bag', 'Este producto es especial para cargar todo lo que necesites', 5000, 4, '/chicaFondoNegro.jpeg');
let producto2 = new Producto('Cuadernos', 'Es un Cuaderno es nuevo de la coleccion 2023, de hojas lisas, estampado con xilografia', 1500, 6);
let producto3 = new Producto('Remeras', 'Remeras batic con diseños unicos estampados Artesanlamente', 6500, 10);

warholianaTienda.agregarProducto(producto1);
warholianaTienda.agregarProducto(producto2);
warholianaTienda.agregarProducto(producto3);



contenedorTarjeta = document.getElementById("contenedorDeTarjeta");

warholianaTienda.productos.forEach(producto => {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("col-12")

    tarjeta.innerHTML += `
    <div class="container">
    <div class="row">
        <div class="col text-center">
            <div class="card-body pb-10">
                <img src="${producto.imgURL}" class="card-img-top" alt="imagen de totebag">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn btn-primary botonComprar">Comprar</a>
                </div>
        </div>
    </div>
    </div>`;

    contenedorTarjeta.appendChild(tarjeta);
    });

let carrito = [];   

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log("producto agregado a la lista",producto);
    }

    let btnComprar = document.querySelectorAll(".botonComprar");

    for( let boton of btnComprar ){
        boton.addEventListener("click", agregarAlCarrito)
    }

function mostrarCarrito(){

    let tabla = document.getElementById(" ");
    tabla.innerHTML = "";

    for ( let producto of carrito){

        let fila = document.createElement("tr");
        fila.innerHTML =`
        <td><p>${producto.nombre}</p></td>
        <td><p>${producto.cantidad}</p></td>
        <td><p>${producto.precio}</p></td>`;
        tabla.appendChild(fila);
    }       
}
