const contenedorDeProducto = document.getElementById("contenedorDeProducto")
const verCarrito = document.getElementById("verCarrito")
const contenedorCarrito = document.getElementById("contenedorCarrito")



let carrito = []

productos.forEach((producto) =>{
    let contenido = document.createElement("div");
    contenido.innerHTML = `
        <img class="imgC" src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>${producto.precio} $</p>
        <button id="botonComprar" class="btb m-3">comprar</button>
        `;

    contenedorDeProducto.appendChild(contenido);
}); 

    function agregarAlCarrito(){

        let botonComprar = document.getElementById("botonComprar")

        botonComprar.addEventListener("click", () =>{
            carrito.push({
                    id : producto.id,
                    nombre : producto.nombre,
                    precio : producto.precio
            });
            console.log(carrito     )
        });
}

    
    
