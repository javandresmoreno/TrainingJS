export const PI = Math.PI;

export let user = "Javier";
export let password = "qwerty";

/* export default sirve para exportar alguna función o variable 
que quiero que se ejecute por defecto cuando la importe en otro
archivo. Se importa sin destructuración {} 
Solo se puede usar una vez en el archivo. */

const hello = () => console.log("Hola mi perro!");

export default function greeting() {
  console.log("Hello, JS Modules +ES6");
}

export class Greeting {
  constructor() {
    console.log("Hello, JS Classes +ES6");
  }
}
