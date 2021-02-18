function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

export const arithmetic = {
  add,
  substract,
};

/* export default sirve para exportar alguna función o variable 
que quiero que se ejecute por defecto cuando la importe en otro
archivo. Se importa sin destructuración {} 
Solo se puede usar una vez en el archivo. */
