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
  let properties = Object.keys(x); // Obtener array de propierdades
  return properties;
}

console.log(enumerateProperties(person));
console.log(enumerateProperties(vehicle));


// Ejercicio 2
console.log("Ver pdf adjunto")

// Ejercicio 3

// declaracion de la clase InvertirCadena
class InvertirCadena {
  
  cadenaInvertir = "Vamos a dar vuelta este String";

  // metodo para hacer reverso de un string
  reverseString = () => { 
    let newString = "";

    if (this.cadenaInvertir=="") {
      throw new SyntaxError("Error, string vacio");
    }

    for (let i = this.cadenaInvertir.length - 1; i >= 0; i--) { 
      newString += this.cadenaInvertir[i]; // lo mismo que newString = newString + this.cadenaInvertir[i];
    }    

    return(newString);

  };

}

let invertirCadena = new InvertirCadena();

try {
  console.log(invertirCadena.reverseString());
}
catch (err) {
  console.log("Error catcheado:" + err.message);
}






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
