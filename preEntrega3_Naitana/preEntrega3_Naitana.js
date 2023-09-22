class producto {
    constrouctor(nombre, descripcion, precio){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precii = precio;
    }
}

let producto1 = new producto(`tote-bag`, `Este producto es especial para cargar todo lo que necesites`, `5.000`)

console.log(producto1.nombre)




let tituloPrincipal = document.getElementById ("titulo")

console.log("titulo")

tituloPrincipal.innerHTML = "WAROLIANA"

let cajaSaludo = document.createElement ("div")
cajaSaludo.textContent = "Hola bienvenidos a mi mundo"


let cajaParrafo = document.createElement ("p")
cajaParrafo.textContent = "Esta es mi historia..."

cajaSaludo.appendChild(cajaParrafo)
document.body.appendChild(cajaSaludo)