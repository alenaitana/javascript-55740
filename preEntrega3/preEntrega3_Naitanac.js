

const contenidoTienda = document.getElementById("contenedorDeProducto")
const verCarrito = document.getElementById("verCarrito")
const headerCarrito =document


let carrito = []

productos.forEach((producto) => {
    let contenido = document.createElement("div");
    contenido.className = "card  mb-4 "
    contenido.innerHTML = `
        <img src="">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>${producto.precio}</p>
    `;
    contenedorDeProducto.append(contenido)

    let comprar = document.createElement("button")
    comprar.className = "comprar"
    comprar.innerText = "comprar";

    contenido.append(comprar)

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : producto.id,
            img : producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
        });
        console.log(carrito)
    });

});

verCarrito.addEventListener("click", () =>{
    let headerCarrito = document.createElement("tbody");
    headerCarrito.className = "ver-carrito";
    headerCarrito.innerHTML = `
    <h1 class="ver-carrito">crrito.</h1>
    `;
    verCarrito.append(headerCarrito)
});

function agregarAlCarrito(producto){
let memoria = localStorage.getItem("productosComprados")
if(!memoria){
    let nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    localStorage.setItem("productosComprados",[nuevoProducto])
}
};
