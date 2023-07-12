//Ejercicio 1
const sinParametros = () => {

  const resultado = 5 + 6;

  console.log(resultado);
}
sinParametros();

// Ejercicio 2
const dosParametros = (param1, param2) => {

  const multiplicacion = param1 * param2;
  const suma = param2 + 10;

  return [multiplicacion, suma];
}

const resultadoDosParametros = dosParametros(4, 7);
console.log(resultadoDosParametros);

// Ejercicio 3
const array = [1, 3, 5, 7];
const arrayPares = array.map((num) => num * 2);
console.log(arrayPares);

// Ejercicio 4
const obtenerLongitud = () => {
  const objeto = { 
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid" 
  }
  return Object.keys(objeto).length;
}

const longitudObjeto = obtenerLongitud();
console.log(longitudObjeto);

//Ejercicio 5

const arrayObj = [
   {
    name: "Spain",
    language: "Spanish"
  },{
    name: "Venezuela",
    language: "Spanish"
  },{
    name: "United kingdom",
    language: "English"
  },{
    name: "Nicaragua",
    language: "Spanish"
  },{
    name: "United States",
    language: "English"
  },{
    name: "Iceland",
    language: "English"
  },{
    name: "United Arab Emirates",
    language: "Arabic"
  }];

  const hablaHispana = arrayObj.filter((name) => name.language==="Spanish")
  console.log(hablaHispana);

  const hablaInglesa = arrayObj.filter((name) => name.language==="English")
  console.log(hablaInglesa);

  const united = arrayObj.filter((name) => name.name.includes("United"))
  console.log(united);