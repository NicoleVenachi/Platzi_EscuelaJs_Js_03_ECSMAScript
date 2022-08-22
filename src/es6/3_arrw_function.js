
// Asignación de objetos
let name = 'Nicole';
let age = 23;

obj = {name: name, age: age};
es6Obj = {name, age}; // keys

console.log(obj);
console.log(es6Obj);

//_______ arrow functions __

const names = [
  {name: 'Sofía', age: 59},
  {name: 'Brayam', age: 22}
]

//notaciones
printNames = person => person.name;
// printNames = (name, age) => ({ name });
// printNames = name => {return name};

//instancia
let listOfNames = names.map(printNames);

// Promesas.

const helloPromise = () => {
  return new Promise ((resolve, reject) => {
    if (false) {
      resolve('Jey');
    }
    else {
      reject('Ups!')
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hola')) //anidar promesas
  .catch(error => console.log(error))


  