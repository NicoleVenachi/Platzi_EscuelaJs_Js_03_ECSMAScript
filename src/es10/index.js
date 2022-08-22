
//_______.flat(depth)_____

let array = [1,2,3, [1,2,3, [1,2,3]]];


console.log(array.flat(2));

//_______.flatMap(fn)____

let arrayNew = [1,2,3,4,5];
console.log(arrayNew.flatMap((value) => [value, value * 2]));


//________.trimStart()_____

const hello = '       Hello World';

console.log(hello);
console.log(hello.trimStart());

//________.trimEnd()_____

const helloEnd = 'Hello World        ';

console.log(helloEnd);
console.log(helloEnd.trimEnd());

//____ Optional Catch Building ______

try{
    
}
catch{
    console.log(error);
}

//_______Object.fromEntries()__________

let entries = [["name", "Nicole"], ["age", 24]];
console.log(Object.fromEntries(entries));

//___ Descripción de símbolo____

const mySymbol = 'My Simbool';
let symbol = Symbol(mySymbol);

console.log(symbol.description);


