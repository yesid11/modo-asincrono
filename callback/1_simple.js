//dependecia a XMLHttpResquest
const http = require('xmlhttprequest').XMLHttpRequest

function exito(data){
    const tipos = JSON.parse(data).results
    //recorrer el arreglo de tipos
    tipos.forEach((element) => {
        console.log(`Tipo: ${element.name}`)
        console.log(`.....................`)
    });
}

function fallo(status){
    console.log(status)
}

const url = "https://pokeapi.co/api/v2/type"

//Funcion para conectara una Api publica 
function get_data(endpoint, exito, fallo){
    new http()
    //1. crear el objeto de conexion
    const h = new http()
    //2. abrir una conexion a la api
    h.open('GET' , endpoint)
    //3. Enviar la request definida 
    h.send()
    //4. una vez recibida la response 
    //Tratar la indormación 
    h.onload = function(){
        exito(h.responseText)

    }
}

 //Invocar get_data 
 get_data(url , exito , fallo)