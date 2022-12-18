// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
console.log("Ejercicio 2 - Ver pdf adjunto");

// Ejercicio 3
console.log("Ejercicio 3 - Ver pdf adjunto");

// Ejercicio 4
console.log("Ejercicio 4 - Divisibles por 7 entre 1 y 100 ");
for (let i=1; i<=100; i++) {
    if ((i%7)==0) {
        console.log(`${i} es divisible entre 7`);
    }
}

// Ejercicio 5
console.log("Ejercicio 5 - Ver pdf adjunto");


// Ejercicio 6
console.log("Ejercicio 6 - Objeto con métodos");

// constructor function
function Formatter () {
    this.prefix = "Hello",
    this.append = function(cadenaAppend) {
        console.log(this.prefix + " " + cadenaAppend);
    }
}

// create object
let  formatter = new Formatter();

// metodo append
formatter.append("para todos los colegas");

// agregar metodo con prototype
Formatter.prototype.toLowerString = function(cadenaLower) {
    cadenaLower.toString();
    console.log(cadenaLower.toLowerCase());
    }

let formatter2 = new Formatter();

formatter2.toLowerString("CONVERTIR todo A MINUSculas");

/*
let formatterBase = {
    prefix: "Hello",
    append: function(cadenaAppend) {
        console.log(formatterBase.prefix + " " + cadenaAppend);
    }
}


let formatter = Object.create(formatterBase);

formatter.append("para todos los colegas");

// agregar metodo usando prototype
formatter.prototype.toLowerString = function (x) {
    console.log(x.toLowerCase);
    } 

formatter.toLowerString("CONVERTIR a minucUSLAS");


car.stop = function() {
    console.log("Stop the engine...");
}

console.log(vehicle);
console.log(car);

*/