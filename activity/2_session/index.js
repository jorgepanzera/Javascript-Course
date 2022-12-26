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

  invertirCadena.nuevoMetodo?.();

}
catch (err) {
  console.log("Error catcheado:" + err.message);
}



// Ejercicio 4

class Login {
  constructor(username, password) {
      this.username = username;
      this.password = password;
  }

  login() {
    if (this.username=="admin" && this.password=="passwd") {
      alert("Ejercicio 4 - User logged in.");
    } else {
      alert("Ejercicio 4 - User or Password incorrect.");
    };
      
  }
}


let login = new Login("admin", "passwd") 
login.login(); // alert -> User logged in
let logbad = new Login("pepe", "bad") 
logbad.login(); // alert -> User or passwd incorrect


// Ejercicio 5

// Agregar listener para loginSuccess
        
let bLogSuccess = document.getElementById("loginSuccess");

bLogSuccess.addEventListener('click', () => {
  let login = new Login("admin", "passwd");
  login.login();
  });

// Agregar listener para loginFailure
// Otra forma de hacerlo, concatenando el addEventListener al resultado del getElementById
document.getElementById("loginFailure").addEventListener('click', () => {
                                          let login = new Login("pepe", "bad") ;
                                          login.login();
                                        });

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("Promise - User logged in");
        } else {
          rejected("Promise - Error: invalid username or password");
        }
      }, 200);
    });
};


// Agregar listener a loginSuccessAsync
document.getElementById("loginSuccessAsync").addEventListener('click', async () => {
  try {
    let response = await loginWitUsername("admin", "passwd");
    console.log(response);
     }
  catch(err) {
      console.log("Error en loginSuccessAsync");
      console.log(err);
    }     
  });


// Agregar listener a loginFailureAsync
document.getElementById("loginFailureAsync").addEventListener('click', async () => {
  try {
    let response = await loginWitUsername("pepe", "bad");
    console.log(response);
     }
  catch(err) {
        console.log("Error en loginFailureAsync");
        console.log(err);
    }      
  });

