import greeting, { Greeting, PI, user, password } from "./constants.js";
// la palabra as  me permite generar un alias para identificar de otra forma
import { arithmetic as calculation } from "./arithmetics.js";

console.log("Archivo modulos.js");

console.log(PI, user, password);

// console.log(arithmetic.add(3, 4));
// console.log(arithmetic.substract(3, 4));
console.log(calculation.add(3, 4));
console.log(calculation.substract(3, 4));

greeting();

let greetingClass = new Greeting();

greetingClass;
