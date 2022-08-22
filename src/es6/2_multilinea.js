// Multilínea

let lorem = 'dasdasdasd adsfasdf asdfasdfsadf asdfadsfasd asd \n'
+ 'as asd asdasd askdlasfjll'; //antes

let es6Lorem = 'Otra frase epica que para hacer
la multilinea simplemente dejo un espacio'; // es6

console.log(lorem);
console.log(es6Lorem);

// Destructuracióno
let person = {
  name: 'Nicole',
  age: 32,
  country: 'Col'
}

console.log(person.name, person.age); // en froma habitual

let {name, age, country} = person;  //desestructuracion
console.log(name, age, country);

// Operador de Propagación

let team1 = ['Sofía', 'Nicole', 'Isa'];
let team2 = ['Lina', 'Nathalia', 'Brayam'];

let education = ['David', ...team1, ...team2];
console.log(education);

// LET Y CONST
{
  var globalVar = 'global Var';
}
console.log(globalVar);

{
  let globalLet = 'global Let';
  console.log(globalLet);
}

const a = 'b';
a = 'a'; // Error

