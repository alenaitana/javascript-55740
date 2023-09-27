

const contenidoTienda = document.getElementById("contenedorDeProducto")
const verCarrito = document.getElementById("verCarrito")
const carritoTabla = document.getElementById("carrito   ")


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
    contenidoTienda.appendChild(contenido)

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
  monstrarCarrito();
});

function monstrarCarrito() {
let carritoCuerpo = carritoTabla.querySelector("tbody");

carritoTabla.innerHTML ="";

carrito.forEach((producto) =>  {
    let row = document.createComment("tr");
    row.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>${producto.cantidad}</td>
    `;

    carritoCuerpo.appendChild(row)
});

carritoTabla.style.display = "table";

}

function agregarAlCarrito(producto){
let memoria = localStorage.getItem("productosComprados")
if(!memoria){
    carrito = [];
} else {
    carrito = JSON.parse(memoria);
}
let productoCarrito = carrito.find((item) => item.id === producto.id )

if (productoCarrito) {
    productoCarrito.cantidad += 1;
} else {
    productoCarrito.cantidad = 1;
    carrito.push(producto);
}
localStorage.setItem("productoComprados", JSON.stringify(carrito));
};
