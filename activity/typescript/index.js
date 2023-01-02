var PersonToArrayv1 = function (person) {
    var aResult;
    aResult = [];
    aResult.push(person.name);
    aResult.push(person.age);
    aResult.push(person.profession);
    return aResult;
    //return Object.values(person);
};
// version optimizada utilizando metodo Object.keys
var PersonToArray = function (person) {
    // return Object.values(person); .values no andaba con el compilador (tema de version()
    return Object.keys(person).map(function (key) { return person[key]; });
};
var aPerson = { name: "Jorge", age: 50, profession: "Ingeniero" };
// ambas versiones dan el mismo resultado
console.log(PersonToArrayv1(aPerson));
console.log(PersonToArray(aPerson));
function sumOrConcatenate(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x + "-" + y;
    }
    if (typeof x === "string" && typeof y === "number") {
        return x + "+" + String(y);
    }
    if (typeof x === "number" && typeof y === "string") {
        return String(x) + "+" + y;
    }
}
console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello 
console.log(sumOrConcatenate("hello", "world")); //hello-world
console.log(sumOrConcatenate("Jorge", 5));
// Funcion para comprobar si el parametro es parametro es Car o Motorcycle
// usando Type predicates
function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
// Funcion con parametro Car or Motorcycle, 
// que usa las funciones segun el tipo de Vehicle que le llega
function useVehicle(oneVehicle) {
    oneVehicle.turnOnEngine();
    if (isCar(oneVehicle)) {
        oneVehicle.pressPedal();
    }
    else {
        oneVehicle.openThrottle();
    }
}
var oneCar = {
    tires: 4,
    turnOnEngine: function () {
        console.log("Car is turning On !");
    },
    pressPedal: function () {
        console.log("Pressing Car pedal !");
    }
};
var oneMotorcycle = {
    tires: 2,
    turnOnEngine: function () {
        console.log("Motorcycle is turning On !");
    },
    openThrottle: function () {
        console.log("Motorcycle Full Throttle !");
    }
};
// Probar funcion useVehicle
useVehicle(oneCar);
useVehicle(oneMotorcycle);
// Ejercicio 4
