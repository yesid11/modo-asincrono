const needle = require ('needle')

const url = "https://pokeapi.co/api/v2/type"


const f = async() => {

    try {
     
        let response = await needle('get', url )

        const tipos = response.body.results
        //recorrer el arreglo de tipos
        tipos.forEach(element => {
           console.log(element.name)
           console.log('*************')
        })

    } catch (error) {
        console.log(Error(error))
    }


}

f()