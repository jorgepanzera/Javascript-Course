// Ejercicio 1
interface Person {
    name: string;
    age: number;
    profession: string;
}

type aNumberOrString = Array<number | string> 

let PersonToArrayv1 = (person: Person): aNumberOrString => {
    let aResult : aNumberOrString
    aResult = []
    aResult.push(person.name)
    aResult.push(person.age)
    aResult.push(person.profession)
    return aResult
    //return Object.values(person);
}

// version optimizada utilizando metodo Object.keys
let PersonToArray = (person: Person): aNumberOrString => {
    // return Object.values(person); .values no andaba con el compilador (tema de version()
    return Object.keys(person).map(key => person[key]);
}

let aPerson : Person = { name:"Jorge", age: 50, profession: "Ingeniero"}

// ambas versiones dan el mismo resultado
console.log(PersonToArrayv1(aPerson))
console.log(PersonToArray(aPerson))

// Ejercicio 2

type NumberOrString = number | string

function sumOrConcatenate(x: NumberOrString, y: NumberOrString) : NumberOrString {
    if (typeof x === "number" && typeof y === "number") {
        return x + y
    }
    if (typeof x === "string" && typeof y === "string"){
        return x + "-" + y
    }
    if (typeof x === "string" && typeof y === "number"){
        return x + "+" + String(y)
    }
    if (typeof x === "number" && typeof y === "string"){
        return String(x) + "+" + y
    }
}

console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello 
console.log(sumOrConcatenate("hello", "world")); //hello-world
console.log(sumOrConcatenate("Jorge",5)); 


// Ejercicio 3

interface Vehicle {
    tires: number;
    turnOnEngine() : void
}

interface Car extends Vehicle {
    pressPedal(): void
}

interface Motorcycle extends Vehicle {
    openThrottle(): void
}

// Funcion para comprobar si el parametro es parametro es Car o Motorcycle
// usando Type predicates
function isCar(vehicle: Car | Motorcycle): vehicle is Car {
    return (vehicle as Car).pressPedal !== undefined;
}

// Funcion con parametro Car or Motorcycle, 
// que usa las funciones segun el tipo de Vehicle que le llega
function useVehicle(oneVehicle: Car | Motorcycle) : void {
    oneVehicle.turnOnEngine()
    if (isCar(oneVehicle)){
        oneVehicle.pressPedal()
    } else {
        oneVehicle.openThrottle()
    }
}

let oneCar : Car = {
    tires:4,
    turnOnEngine():void {
        console.log("Car is turning On !")
    },
    pressPedal():void{
        console.log("Pressing Car pedal !")
    }
}

let oneMotorcycle: Motorcycle = {
    tires:2,
    turnOnEngine():void {
        console.log("Motorcycle is turning On !")
    },    
    openThrottle():void{
        console.log("Motorcycle Full Throttle !")
    }
}

// Probar funcion useVehicle
useVehicle(oneCar)
useVehicle(oneMotorcycle)

// Ejercicio 4

// Verificar si todos los componentes del array son number o string
// dado que hay que usar un tipo generico T y no un Union Type, la forma de 
// no tener en cuenta elementos de otro tipo es controlando los elementos del array

const removeFirstEntry = <T>(arr: Array<T>) : Array<T> => {
    for (let i=0; i < arr.length; i++){
        if ( !(typeof arr[i] === "number" || typeof arr[i] === "string") ){
            throw new Error("Array con elementos de tipo no soportados")
        }
    }
    arr.shift() // remover primer elemento
    return arr
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];

const newUnsupportedArray = removeFirstEntry(unsupportedArray); //--> will fail