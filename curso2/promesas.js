//ejemplo de contar vacas
const cows = 15;

const countCows = new Promise(function(resolve, reject){
//solo si el número de vacas supera 10, se llama al resolve
//de lo contrario: se llama a reject
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There is no cows on the farm");
        }
    });

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó y terminó por completo la promesa
countCows.then((result) => {
console.log(result);
}).catch((error) => {
console.log(error);
}).finally(() => console.log("Finally"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true) //se usó operador ternario y se está forzando con true que se cumpla la condición
            ? setTimeout(() => resolve('Async!!', 2000))
            : reject(new Error('Error!')); //arroja "error" en caso de que la condición sea false
    });
}

const anotherFn = async () => { //la palabra async es para el cuerpo de la función
    //la palabra await estará dentro de la lógica a implementar
    const something = await fnAsync(); //aquí nos está regresando una promesa
    console.log(something); //se imprime mientras se espera
    console.log('Hello!');
}

console.log('Before'); //al ser la primera orden con solo console.log, 'Before' se imprime primero
anotherFn();//es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
console.log('After'); //aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de segundo al imprimir

/*La salida queda:
Before
After
Async!!
Hello!
*/

