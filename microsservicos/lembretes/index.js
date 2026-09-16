//Microsserviço 1 de lembretes está completo de acordo com a imagem

const axios = require('axios')
const express = require("express")
const app = express()

//API: Application Programing Interface: coleção de endpoints
//midleware - converte objeto json para objeto javascript
app.use(express.json())
let id = 1
/*
{
    1: {
    id: 1,
    texto: 'Fazer café'
    }
}
*/
const lembretes = {}
//criar um lembrete
//POST /lembretes
//endpoint
app.post("/lembretes", async (req, res) => {
    // {texto: "Fazer café"}
    const texto = req.body.texto
    const lembrete = {
        id: id,
        texto: texto
    }
    lembretes[id] = lembrete
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: lembrete
    })
    id++
    res.json({mensagem: 'ok'})
})

//GET /lembretes usando uma função regular (function)
app.get("/lembretes", function(req, res){
    res.json(lembretes)
})

//fazer o endpoint POST /eventos
//exibir o evento no log
//encerrar a requisição, não deixando o cliente esperando
app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

const port = 4000
app.listen(port, () => console.log(`Lembretes. ${port}.`))
