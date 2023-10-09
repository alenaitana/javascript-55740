const mostrarCarrito = () => {


    modalContainer.innerHTML = ""
    modalContainer.style.display = "grid"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1>Carrito</i></h1>
    `
    
    modalContainer.append(modalHeader);
    
    const contenedorButton = document.createElement("h1")
    contenedorButton.innerText = "x";
    contenedorButton.className = "Contenedor-button"
    
    contenedorButton.addEventListener("click", () =>{
        modalContainer.style.display = "none"
    })
    
    modalHeader.append(contenedorButton);
    
    carrito.forEach((producto   ) => {
        let contenidoCarrito = document.createElement ("div")
        contenidoCarrito.className = "grid mb-2"
        contenidoCarrito.innerHTML = `
        <h3 class="text-center">${producto.nombre}</h3>
        <p class="text-center">$${producto.precio}</p>
        <h4 class="text-center">Cantidad ${producto.cantidad}</h4>
        <spam class="eliminar-producto  text-center"><i class=" text-center fa-regular fa-square-xmark fa-shake fa-2xl" style="color: #ffde0a;"></i></spam>
    `;  
    
    modalContainer.append(contenidoCarrito);
    
    let eliminar = contenidoCarrito.querySelector(".eliminar-producto");

    eliminar.addEventListener("click", ()=>{
        eliminarProducto(producto.id)
    })

});
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    
    const totalBuy = document.createElement("div")
    totalBuy.className = "text-center text-danger"
    totalBuy.innerText = `Total: $${total}`;
    
    modalContainer.append(totalBuy);


};

verCarrito.addEventListener("click", mostrarCarrito)

const eliminarProducto = (id) =>{
const buscaId = carrito.find((elemento) => elemento.id === id);

carrito = carrito.filter((carritoId) => {
return carritoId !== buscaId;

});

mostrarCarrito()
}