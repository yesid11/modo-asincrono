const needle = require ('needle')

const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ace-tgkhmahjiddinju.json"


const f = async() => {

    try {
     
        let response = await needle('get', url )
        const verse = response.body.quran
        //recorrer el arreglo de tipos
        verse.forEach(element => {
           console.log(element.verse)
           console.log('*************')
        })
        console.log()

    } catch (error) {
        console.log(Error(error))
    }
}

f()