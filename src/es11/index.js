
//________ Dynamic Import  ___________

const button = document.getElementById('btn');

button.addEventListener('click', async function() {
    const module = await import('./file.js');
    module.hello();
})


//________  Big int ___________

//la n activa big int
const aBigNumber = 9007199254740991n;

const anotherBigBumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigBumber);
//________  Promise.allSettled() ___________

const promise1 = new Promise((resolve, reject) => {
    reject('reject')
})
const promise2 = new Promise((resolve, reject) => {
    resolve('resolve')
})
const promise3 = new Promise((resolve, reject) => {
    resolve('resolve')
})

//arreglo de promesas
Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))


//________  globalThis ___________

//antes
console.log(window);
console.log(self);
console.log(frames);
console.log(this);

//ahora

console.log(globalThis)

//________  Null Operator ___________

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'asd' ?? 'default string';
console.log(fooo2);

//________  Optional Chaining ? ___________

//al llamar API, cargaría User
const user = {};

// tendría que accder aun valor
// no es accesable porque no existe aún.
console.log(user?.profile?.email)

if(user?.profile?.email){
    console.log(`email ${user?.profile?.email}`)
}
else{
    console.log('Fail')
}



//________   ___________