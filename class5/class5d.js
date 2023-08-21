
class ProductoNuevo{

    constructor( nombre, precio, stock){
        this.nombre = nombre,
        this.precio = precio,
        this.stock = stock
    
    }
    
    get_datos(){
        console.log("DAME LOS DATOS DEL");
        console.log("Nombre:", this.nombre);
        console.log("Precio:", this.precio);
        console.log("stock:", this.stock);
    
    }   
    
    get_stock(){
        if(this.stock > 0){
            return true
        }
        else{
            return false
        }

    }

}

let productoUno = new producto(pc, 60000, 1);
let productoDos = new producto(zapatilla, 120000, 7)



