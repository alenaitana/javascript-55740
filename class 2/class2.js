// valores buleanos = logicos --> true | false

let verdadero = true;
let falso = false;

// operador relacionales //

//igualdad ==
let x = 70

console.log (30 ==30) /v
console.log (50 == 30) /f

// MAYOR > //

console.log (30 > 5);
console.log ( x + 10 > 80 -20)  /V
console.log ("A" > "a")

//MENOR //

console.log ( 60 < 40 );
console.log (10 + 20 < 50 );

//MAYOR o IGUAL >=

let edad = 18

console.log( edad >= 18)
console.log(30 + 30 >= 60);

//MENOR O IGUAL <=

console.log(30 <= 30);
console.log (120 <= X);

// != NO ES IGUAL = DISTINTO

console.log( 100 != 50); //V
console.log (x != x); // f



let nombre_urusario = prompt("ingresa tu nombre")
let nivel_edu = prompt("ingresa el nivel Primaria | Jardin")

if(nivel_edu == "jardin"){
    console.log("bienvenido/a al panel de usuario de jardin", nombre_urusario)
}

else if(nivel_edu == "Primaria"){
    console.log("bienvenido/a al panel de usuario de Primaria", nombre_urusario)
}

else{
    console.log("opcion incorrecta")
}
