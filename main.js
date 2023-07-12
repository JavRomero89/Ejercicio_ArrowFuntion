// Función flecha sin parámetros de entrada
const sinParametros = () => {
    // Crear variable y asignarle una operación
    const resultado = 5 + 3;
  
    // Mostrar resultado por pantalla
    console.log(resultado);
  };
  
  sinParametros();
  
  // Función flecha con dos parámetros de entrada
  const dosParametros = (param1, param2) => {
    // Declarar variables y realizar operaciones
    const multiplicacion = param1 * param2;
    const suma = param2 + 10;
  
    // Retornar un array con las variables
    return [multiplicacion, suma];
  };
  
  const resultadoDosParametros = dosParametros(4, 7);
  console.log(resultadoDosParametros);
  
  // Utilizar .map() para obtener todos los números pares en un nuevo array
  const arrayOriginal = [1, 3, 5, 7];
  const arrayPares = arrayOriginal.map((num) => num * 2);
  console.log(arrayPares);
  
  // Función flecha sin parámetros que retorna la longitud de un objeto
  const obtenerLongitud = () => {
    const objeto = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
    return Object.keys(objeto).length;
  };
  
  const longitudObjeto = obtenerLongitud();
  console.log(longitudObjeto);
  