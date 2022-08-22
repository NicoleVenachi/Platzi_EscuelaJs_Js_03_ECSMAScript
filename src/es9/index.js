
//_______Operador de Reposo_____
const obj = {
    name: "Nicole",
    age: 24,
    country: "Col"

}

//parte la meto en age y el resto lo encapsulo en all
let {age, ...all} = obj;
console.log(all)

//__________Unir objetos_____
const objFirst = {
    name: "Nicole",
    age: 24

}
const objTwo = {
    ...obj,
    country: "Col"
}

console.log(objTwo)

//.finally()

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
      if (true) {
        
        setTimeout(() => resolve('Jey'), 2000);
        
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

    .finally(() => console.log('Finalizó ejecución'))

//_____regex________

//year/month/date
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

//match para saber si están los datos
const match = regexData.exec('2018-04-20');

//puedo acceder a cada elemento (por bloques)
const year = match[1] ;
const month = match[2];
const day = match[3];

console.log(year, month, day)


