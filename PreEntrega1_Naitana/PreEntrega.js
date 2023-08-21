
//PRESTAMOS INMEDIATOS
let nombreDeCliente = prompt("escribe tu nombre");

let edadDelCliente = prompt(nombreDeCliente + " cuantos años tienes?");

if (edadDelCliente >= 18){
    console.log ("Bienvenido " + nombreDeCliente + " a Prestamos inmediatos")
}
else{
    console.log (nombreDeCliente + " LO SENTIMOS ERES MENOR")
}

let montoElejido = 0
let cuotasElejidas;

while (edadDelCliente >= 18){

    montoElejido = prompt("Elije el  prestamos que ustd quiera 100, 3000, 5000")

    cuotasElejidas = prompt ("Elije las cantidades de cuotas 1 , 3, 6, 12")

    if(cuotasElejidas == 1){
        montoTotal = montoElejido
}
    if(cuotasElejidas == 3){
        montoTotal = montoElejido * 0.50
}
    if(cuotasElejidas == 6){
       montoTotal = montoElejido * 2
    
}
    if(cuotasElejidas == 12){
        montoTotal = montoElejido * 3

}
else{
    console.log("TE EQUIBOCASTE")
}

console.log(nombreDeCliente + " El monto total que tenes que abonar en "+ cuotasElejidas + " cuotas es de "+ montoTotal)

    console.log(nuevaOpcion = prompt( nombreDeCliente +" deseas adquirir otro Prestamo SI / NO"))

if( nuevaOpcion != no){
        montoElejido = prompt("Elije el  prestamos que ustd quiera 100, 3000, 5000")
    }
else{
    console.log("NOS VEMOS LA PROXIMA")
}
  
}







/*
let prestamoUno = 1000000
let PrestamoDos = 300000
let PrestamoTres = 500000

function calculoInteres( principal,tasa, tiempo){
    let interes = principal * tasa * tiempo;

    return interes;
}

let pincipal = prestamoUno
let tasa = 0.5
let tiempo = 7

function calculoInteres( interesCalculado, tiempo){
    let cuota = interesCalculado / tiempo 

    return cuota;
}

console.log (cuota)

let interesCalculado = calculoInteres(pincipal,tasa,tiempo)

let cuotaCalculada =  calculoDeCuota(principal, tiempo)


let sumaTotal = interesCalculado + pincipal
console.log("Termina devolviendo un total de : " + sumaTotal)

*/
