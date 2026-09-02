// //require('dotenv').config()
// const axios = require('axios')
// const appid = process.env.APPID
// const q = "Itu"
// const units = "metric" //graus celsius
// const lang = "pt_BR"
// const cnt = 3
// const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&q=${q}&units=${units}&lang=${lang}&cnt=${cnt}`

// axios.get(url)

// .then(res => {
//     console.log(res.data)
//     console.log("********************")
//     return res.data.list
// })
// .then((previsoes) => {
//     for(let previsao of previsoes){
//         console.log(`
//         ${new Date(+(previsao.dt) * 1000).toLocaleDateString()},
//         Min: ${previsao.main.temp_min}\u00B0C,
//         Max: ${previsao.main.temp_max}\u00B0C,
//         Hum: ${previsao.main.humidity}%,
//         Descrição: ${previsao.weather[0].description}
//         Sensacao térmica: ${previsao.main.feels_like}
//         `)
//     }
//     return previsoes
// })
// .then(previsoes => {
//     const lista = previsoes.filter(p => p.main.feels_like >= 20)
//     const total = lista.length
//     console.log(`Total: ${total}`)
// })

// const mostarTodasPrevisoes = async () => {
//     const previsoes = (await axios.get(url)).data.list;
//     for(let previsoes of previsoes) {
//         console.log(`
//                 ${new Date(+(forecast.dt) * 1000).toLocaleString()},
//                 Min: ${forecast.main.temp_min}\u00B0C,
//                 Max: ${forecast.main.temp_max}\u00B0C,
//                 Hum: ${forecast.main.humidity}%,
//                 Sensacao: ${forecast.main.feels_like}\u00B0C,
//                 Descrição: ${forecast.weather[0].description}
//             `)
//     }
// }
 
// showAllForecast();
 
