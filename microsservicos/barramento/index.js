const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())
const eventos = []

//definir esse endpoint
//  POST /eventos
app.post('/eventos', async (req, res) => {
//pegar o corpo da requisição
const evento = req.body
console.log(evento)
eventos.push(evento)

//enviar via post para todos os mss
try{
    await axios.post('http://localhost:4000/eventos', evento)
}catch(e){}
try{
    await axios.post('http://localhost:5000/eventos', evento)
}catch(e){}
try{
    await axios.post('http://localhost:6000/eventos', evento)
}catch(e){}
try{
    await axios.post('http://localhost:7000/eventos', evento)
}catch(e){}
res.end()
})

app.get('/eventos', (req,res) => {
    res.json(eventos)
})

//colocar o barramento para operar na porta 10000
const port = 10000
app.listen(port, () => console.log(`Barramento. ${port}.`))