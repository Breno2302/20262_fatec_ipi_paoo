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
app.post("/lembretes", (req, res) => {
    // {texto: "Fazer café"}
    const texto = req.body.texto
    lembretes[id] = {
        id: id,
        texto: texto
    }
    id++
    res.json({mensagem: 'ok'})
})

//GET /lembretes usando uma função regular (function)
app.get("/lembretes", function(req, res){
    res.json(lembretes)
})
const port = 4000
app.listen(port, () => console.log(`Lembretes. ${port}.`))
