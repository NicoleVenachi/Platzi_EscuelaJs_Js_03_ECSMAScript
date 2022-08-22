// *********** PArámetros por defectp ************

// antes de ECSMAScript

function previousFunction(name, age, country) {
  var  name = name || 'Nicole';
  var age = age || 22;
  var country = country || 'Col';
  console.log(name, age, country);
}

// Con ECSMAScript6

function escma6Function(name = 'Nicole', age = 22, country = 'MX') {
  console.log(name, age, country);
}

escma6Function();
escma6Function('Ludwing', 23, 'COL');

// template literals

let hello = 'HEllo';
let world = 'World';
let previousConcatenation = hello + ' ' + world;
console.log(previousConcatenation);

let templateLiteral = `${hello} ${world}`; //ECSMAScript6
console.log(templateLiteral);
