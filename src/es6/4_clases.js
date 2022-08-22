//_______ Clases ________________

// CREO Clase
class calculator {
  //atributos
  constructor() {
    //por defecto, 0
    this.valueA = 0;
    this.valueB = 0;
  }
  //métodos
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

// INSTANCIO Clase
const calc = new calculator();
console.log(calc.sum(2, 2));

// Modulos
import { hello } from './4_module';

hello();

//Generadores
function* helloWorld () {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'Wold';
  }
}

const generatorHello = helloWorld() ;
console.log(generatorHello.next().value);
console.log(generatorHello.next().done); //false
console.log(generatorHello.next().value);
console.log(generatorHello.next().done); //true

