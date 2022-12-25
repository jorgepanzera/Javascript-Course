// Ejercicio 1

let person = {
  name: 'Lucas',
  age: 27,
  profession: 'Developer',
}

let vehicle = {
  tires: 4,
  color: 'blue',
  power: 1600,
}

function enumerateProperties(x) {
  let properties = Object.keys(x);
  console.log(properties);
}

console.log(enumerateProperties(person));
console.log(enumerateProperties(vehicle));


// Ejercicio 2
conslog.log("Ver pdf adjunto")

// Ejercicio 3

// podemos simplemente capturar la cadena vacia denunciada con throw con un try/cath
// tambien se podria generar un CustomError extendiendo la clase Error, para ser mas especificos
// invertirCadena.nuevoMetodo, lo podriamos llamar con invertirCadena?.nuevoMetodo para que no falle


// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
