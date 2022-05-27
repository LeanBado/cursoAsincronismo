const algoPasa = () => {
    //retornar una promesa con dos argumentos (resolve=si se ejecuta, reject=si se rechaza)
    return new Promise((resolve, reject) => {
        //si es verdadero, vamos a devolver hey
        if (true) {
            resolve("siiiii")
        }
        //si no entonces devolvemos wooops
        else {
            reject("noooo")
        }
    })
}
//ejecutamos la funcion
algoPasa()
    //si estamos obteniendo un resolve
    .then(response => console.log(response))
    //si obtenemos un reject
    .catch(err => console.error(err))



const algoPasa2 = () => {
    // retuornamos la promesa
    return new Promise((resolve, reject) => {
        // Si es verdadero, devolvemos True en 2 segundos
        if(true) {
            setTimeout(() => {
                resolve("siiiiix2")
            }, 2000)
        } 
        // Si no entonces devolvemos el error
        // De esta forma "new Error" podemos debbugear mejor
        else {
            const error = new Error("noooox2")
            reject(error)
        }
    })
}
//ejecutamos la Funcion 2
algoPasa2()
    //Si obtenemos un resolve
    .then(response => console.log(response))
    //si obtenemos un reject
    .catch(err => console.error(err))



//ejecutamos todas las promesas
Promise.all([algoPasa(),algoPasa2()])
//Si obtenemos un resolve
.then(response => {
    console.log("resultados en arreglo: ", response);
})
//Si obtenemos un reject
.catch(err => {
    console.error(err)
}) 