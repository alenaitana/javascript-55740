const contenidoTienda = document.getElementById("contenedorDeProducto");
const verCarrito = document.getElementById("verCarrito");
const carritoTabla = document.getElementById("carritoTabla"); // Corregido el ID

let carrito = [];

productos.forEach((producto) => {
    let contenido = document.createElement("div");
    contenido.className = "card mb-4";
    contenido.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>${producto.precio}</p>
    `;

    let comprar = document.createElement("button");
    comprar.className = "comprar";
    comprar.innerText = "comprar";

    contenido.appendChild(comprar);

    comprar.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    contenidoTienda.appendChild(contenido);
});

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

function agregarAlCarrito(producto) {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
}

function mostrarCarrito() {
    let carritoTabla = document.getElementById("carritoTabla");
    let carritoCuerpo = carritoTabla.querySelector("tbody");


    carritoCuerpo.innerHTML = "";

    carrito.forEach((producto) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
        `;

        carritoCuerpo.appendChild(row);
    });
}
