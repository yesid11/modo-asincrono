const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//Configuracion de request en axio 
let config = {
    url : url, 
    method: 'get'
}

// realizar la operacion asincrona

axios(config)
    .then(response=>{
        return response.data.results
    }).then(data =>{
        data.forEach(function(tipo){
            console.log(`Tipo: ${tipo.name}`)
            console.log(`*****************`)
        })
    })
    .catch(error =>{
        console.log(Error(`Error : $error`))
    })