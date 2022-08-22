//________  .replaceAll() ___________

const string = 'JS es ás,pero, con JS puedo...';

//antes
const replacedString = string.replace('JS', 'Pyrhon')

console.log(replacedString)

//ahora
const replacedStringAll = string.replaceAll('JS', 'Pyrhon')

console.log(replacedStringAll)

//________ Métodos Privados  ___________

class Message {
    #show(val) {
        console.log(val);
    }

    get #add(val){

    }

    set #add(val){

    }
}

const message = new Message();
message.show()

//________  Promise.any([]) ___________

const promise1 = new Promise((resolve, reject) => {
    reject('1')
})
const promise2 = new Promise((resolve, reject) => {
    resolve('2')
})
const promise3 = new Promise((resolve, reject) => {
    resolve('3')
})

Promise.any([promise1, promise2, promise3]);

//________  WeakRef ___________

class anyClass {
    
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    {...}

}

//________ Nuevos operadores de comparación  ___________

let isUndefined = undefined;
let isTrue = true;
let isFlase = false;

console.log(isTrue &&= isFlase);
console.log(isTrue ||= isFlase);
console.log(isUndefined ??= isFlase);


//________   ___________
//________   ___________