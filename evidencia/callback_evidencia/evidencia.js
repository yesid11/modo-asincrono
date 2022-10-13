//Este es el primer punto de la evidencia, callback.
const request = require('request')

const url = "https://poetrydb.org/author"

const r = request(url, { json:true }, function ( err, response, body ){
    console.log(response.body)
}

)