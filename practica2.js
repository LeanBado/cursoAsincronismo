// función que muestra el IMC segun el peso y altura ingresado
const calculoMasa = (peso, altura) => {
    let IMC = (peso / (altura * altura));
    IMC = IMC.toFixed(1); 
    console.log(`su indice de masa muscular es: ${IMC}`)
    return IMC;
}; 

const printImc = (peso, altura, callback) => { //funcion para imprimir el resultado por medio
// un setTimeout y el callback
  console.log("Calculando su indice de masa muscular por favor espere 3 segundos...");
  setTimeout(()=>{
    callback(peso, altura);
  }, 3000);
};
printImc(77, 1.70, calculoMasa);//llamando la funcion y el callback