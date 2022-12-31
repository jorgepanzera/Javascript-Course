var PersonToArrayv1 = function (person) {
    var aResult;
    aResult = [];
    aResult.push(person.name);
    aResult.push(person.age);
    aResult.push(person.profession);
    return aResult;
    //return Object.values(person);
};
// version optimizada utilizando metodo Object.values
var PersonToArray = function (person) {
    // return Object.values(person); .values no andaba con el compilador
    return Object.keys(person).map(function (key) { return person[key]; });
};
var aPerson = { name: "Jorge", age: 50, profession: "Ingeniero" };
// ambas versiones dan el mismo resultado
console.log(PersonToArrayv1(aPerson));
console.log(PersonToArray(aPerson));
// Ejercicio 2
// Ejercicio 3
// Ejercicio 4
