
//object.enties()

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

//object.values()
const values = Object.values(data);
console.log(values);

//string.padStart(maxlength, 'nuevosCaracteres')

const stringArb = 'food';
console.log(stringArb.padStart(12, '--------'));

