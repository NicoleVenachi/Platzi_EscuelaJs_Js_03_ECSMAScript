
//función asíncrona
const helloWorld = () =>{
    return new Promise((resolve,reject) => 
    {
        (false)
            //enviar el helloworld a los 2seg
            ? setTimeout(() => resolve('hello World'), 2000)
            : reject(new Error('Test Error'))
    })
}

// función asyc-await

const helloAsync = async () => {

    //en caso de que se resulva con éxito
    try{
        const hello = await helloWorld();
        console.log(hello)
    }
    catch(err) {
        console.error(err)
    }
}

helloAsync()

