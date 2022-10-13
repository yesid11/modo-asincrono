const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//Configuracion de request en axio 
let config = {
    url : url, 
    method: 'get'
}

// realizar la operacion asincrona

const f =async () => {
    try {
     let response = await axios(config)
     const tipos = response.data.results
     //recorrer el arreglo de tipos
     tipos.forEach(element => {
        console.log(element.name)
        console.log('*************')
     })
    }
    catch (error){
        console.log(Error(error))
    }
}

f()