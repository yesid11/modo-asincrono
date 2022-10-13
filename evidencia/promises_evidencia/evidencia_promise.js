const axios = require('axios')

const url = "https://myttc.ca/finch_station.json"

//Configuracion de request en axio 
let config = {
    url : url, 
    method: 'get'
}

// realizar la operacion asincrona

axios(config)
    .then(response=>{
        return response.data.stops
    }).then(data =>{
        data.forEach(function(element){
            console.log(`Tipo: ${element.name}`)
            console.log(`*****************`)
        })
    })
    .catch(error =>{
        console.log(Error(`Error : $error`))
    })