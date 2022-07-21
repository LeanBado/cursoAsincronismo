const XMLHttppRequest = require('xmlhttprequest').XMLHttpRequest  //llamado al XmlHttpRequest
const API = "https://api.escuelajs.co/api/v1" //API en mayúscula porque es una referencia que no va a cambiar

function fetchData(urlApi, callback){ //urlApi: no confundir y colocar API
	let xhttp = new XMLHttppRequest() //referencia a new XMLHttpRequest

	xhttp.open("GET", urlApi, true) //petición "obtener" con true para habilitarlo
	xhttp.onreadystatechange = function(event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información
	if(xhttp.readyState === 4) { //si el estado ha sido completada la llamada
		if(xhttp.status === 200 ){ //el servido responde de forma correcta
			callback(null, JSON.parse(xhttp.responseText)) //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
		}else {
                const error = new Error("Error" + urlApi)
                return callback(error,null) //es null porque no se está regresando ningún dato
            }
	    } 
	}
	xhttp.send()
};

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1); //si hay error, devuelve el error
    fetchData (`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2); //valida el error 2
        //se usa Optional chaining '?.' que es una forma segura de acceder a las propiedades de los objetos anidados, incluso si no existe una propiedad intermedia:
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});
