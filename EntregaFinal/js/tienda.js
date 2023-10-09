const contenedorDeProducto = document.getElementById ("contenedorDeProducto");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];    



    productos.forEach((producto) =>{
        let contenido = document.createElement ("div")
        contenido.className ="contenido-producto"
        contenido.innerHTML = `
            <img class="imgC" src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p> $${producto.precio} </p>
            `;
    
            contenedorDeProducto.append(contenido)
    
            let comprar = document.createElement("button")
            comprar.className ="mb-4 btn btn-warning"
            comprar.innerText = "Agregar Al carrito"
    
            contenido.append(comprar)
    
            comprar.addEventListener("click", () =>{
    
            const repetido = carrito.some((repetidoProducto) => repetidoProducto.id === producto.id);
    
            if (repetido){
                carrito.map((prod) =>{
                    if(prod.id === producto.id){
                        prod.cantidad++
                    }
                })
            }else{
                carrito.push ({
                    id : producto.id,
                    nombre : producto.nombre,
                    precio : producto.precio,
                    cantidad : producto.cantidad,
                });
                guardadoLocal();
            }
            })
    });
    



const guardadoLocal  = () =>{
localStorage.setItem("carrito", JSON.stringify(carrito)) 
}

JSON.parse(localStorage.getItem("carrito"))


