
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


montoElejido = prompt("Elije el  prestamos que ustd quiera 100, 3000, 5000");

cuotasElejidas = prompt ("Elije las cantidades de cuotas 1 , 3, 6, 12");

if(cuotasElejidas == 1){
montoTotal = montoElejido
}
else if(cuotasElejidas == 3){
montoTotal = montoElejido * 0.50
}
else if(cuotasElejidas == 6){
montoTotal = montoElejido * 2
}
else if(cuotasElejidas == 12){
montoTotal = montoElejido * 3
}
else{
    console.log("PERDISTE")
}
console.log(nombreDeCliente + " El monto total que tenes que abonar en "+ cuotasElejidas + " cuotas es de "+ montoTotal)


}
