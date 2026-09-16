const axios = require('axios')
const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

/*
{
    1: {
       {
        id: 1001,
        texto: 'comprar café',
        lembreteId: 1
       },
       {
        id: 1002,
        texto:'ir a feira',
        lembreteId: 1
       }
    },
    2: {
        {  
         id: 2001,
         testo; 'Ver um filme',
         lembreteId: 2 
        }
    }
}
*/

const observacoes = {}
//POST /lembretes/1/observacoes
//path
app.post('/lembretes/:id/observacoes', async (req, res) =>  {
    const idObs = uuidv4()
    // const texto = req.body.texto
    const { texto } = req.body
    const observacao = {
        id: idObs,
        texto: texto,
        lembreteId: req.params.id
    }
    //emitir o evento de criação de observção
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'observacaoCriada',
        dados: observacao
    })
    const observacoesDoLembrete = observacoes[req.params.id] || []
    observacoesDoLembrete.push(observacao)
    observacoes[req.params.id] = observacoesDoLembrete
    res.json(observacoesDoLembrete)
})

//GET /lembretes/1/observacoes
app.get('/lembretes/:id/observacoes', function(req, res){
    res.json(observacoes[req.params.id] || [])
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

const port = 5000
app.listen(port, () => console.log(`Observações. Porta ${port}.`))