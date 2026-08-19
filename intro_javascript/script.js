//promise
//1 + 2 + 3 +...+ (n-2) + (n-1) + n
const calculoRapidinho = (n) => {
    if(n >= 0){
        return Promise.resolve((n / 2) * (n + 1))
    }
     return Promise.reject('Apenas positivos')
}
calculoRapidinho(-1).then((res) => {
        console.log(`Resultado: ${res}`)
}).catch((erro) => {
    console.log(`Deu erro: ${erro}`)
})
//pode ser assim
// calculoRapidinho(-10)
// .then(res => console.log(res))
// .catch(erro => console.log(erro))

// function calculoDemorado(n){
//     return new Promise(function(resolve, reject){
//         let res = 0
//         for(let i = 1; i <= n; i++){
//             res += 1
//         }
//         resolve(res)
//     })
// }
// // construção then/catch
// //const a = calculoDemorado(100).then((resultado) => {console.log(resultado)})
// const auxiliar = calculoDemorado(100)
// auxiliar.then(function(res){
//     console.log(res)
// })

// cpu-bOUND: DOMINADA POR CÁLCULOS, CONTINNHAS (UM LOOP SOMA DE 1 A 100)
// IO-BOUND: DOMINADA POR OPERAÇÕES DE ENTRADA E SAÍDA( ACESSO A ARQUIVOS, REQUISIÇÕES HTTP)
// inferno de callbacks
// const fs = require('fs')//file system
// console.log('A')
// const abrirArquivo = function (nomeArquivo){
//     //definir uma função callback
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(conteudo.toString())
//             const dobro = conteudo.toString() * 2
//             const finalizar = function(erro){
//                 if(erro){
//                     console.log('Erro ao salvar oo dobro')
//                 }
//                 else{
//                     console.log('Salvou o dobro ok')
//                 }
//                 console.log('F')
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//             console.log('E')
//         }
//         console.log('D')
//     }
//     //chamar a função de leitura do arquivo do módulo fs, entregando a callback como parametro
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('C')
// }
// abrirArquivo('arquivo.txt')
// console.log('B')

/*console.log('script principl começou...')
setTimeout(() => {
    console.log('dentro da timeout...')
}, 0)
const data = new Date().getTime() + 10000
while(new Date().getTime() <= data);
console.log('script principal terminou..')

/*function demorada(){
    const atualMais2Segundos = new Date().getTime() * 2000
    while(new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 3 + 3
const b = 5 + 9
//const d = demorada()
setTimeout(() => (
    const d = demorada()
    console.log('d: ${d}')
    }, 500)
))

/*console.log('Eu primeiro..')
console.log('Agora eu')
console.log('Sempre vou ser a última...')

//objeetos javascript
//objeto JSON (Javascript Object Notation)

// calculadora de soma e subtração
/*const calculadora = {
    somar: function(a, b){
        return a + b
    },
    subtrair: (a, b) => a + b
}

console.log(calculadora.somar(2, 3))
console.log(calculadora.subtrair(5, 4))*/

//Concessionária
/*let concessionaria = {
    cnpj: "12345678910",
    endereco: {
        rua: "A",
        bairro: "abc",
        numero: 12
    },
    veiculos: [
        {
            marca: 'vw',
            modelo: 'Fusca',
            ano: 1999
        },
        {
            marca: 'Ford',
            modelo: 'Ka',
            ano: 2005
        },
    ]
}
for(let veiculo of concessionaria.veiculos){
    console.log(concessionaria.veiculos)
}*/

//Uma pessoa que se chama Maria, tem 21 anos e mora na rua B, número 20
/*let pessoa = {
    nome: "Maria",
    idade: 21,
    endereco: {
        rua: "B",
        numero: 20
    }
}

console.log("Rua: " + pessoa.endereco.rua)
console.log("Numero: ", + pessoa['endereco']['numero'])
console.log("Rua: " + pessoa.endereco['rua'])
console.log("Número: " + pessoa['endereco'].numero)*/

// Uma pessoa e se cham João e tem 17 anos
/*let pessoa = { //objeto javascript pessoa
    nome: "João", //par chave valor
    idade: 17
}

console.log(pessoa.nome)
console.log(pessoa['idade'])*/


/*function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont)
    }
    //cont++
    function f2(){
        console.log(cont)
    }
    return {f1, f2}
}
let res = eAgora()
res.f1()
res.f2()*/


//closure

/*function saudacoesFactory(saudacao, nome){
    return function(){
        return saudacao + ", " + nome
    }
}
const olaJoao = saudacoesFactory("ola", "Joao")
const tchauJoao = saudacoesFactory("tchau", "Joao")

console.log(olaJoao())
console.log(tchauJoao())*/

/*function ola(){
    let nome = 'Joao'
    return function(){ // essa funcao interna pode usar uma variavel externa dentro da funcao ola.
        console.log('Ola, '+ nome)
    }
}
let olaResult = ola()
olaResult()*/

/*let nome = 'Joao'
function f(){
    let nome = 'Joao'
    function g(){
        console.log(nome)
    }
    g()
}
f()*/

/*let umaFuncao = function(){
    console.log("Fui armazenada em uma variável")
}
umaFuncao()

function f(funcao){ // a funcao f recebe uma funcao como parametro
    funcao()
}

function g(){
    function outraFuncao(){ // essa funcao e definida dentro do corpo da funcao g
        console.log("Fui criada por g")
    }
    return outraFuncao
}

f(function(){
    console.log("Estou sendo passada para f")
})

const gResult = g()
gResult()
//g()()
f(g)
f(g())*/


//funçoes

//errow functions
/*const hello = () => {console.log('oi')} // a errow function está sendo atribuida a constante hello, 
// a constante hello está apontando para a errow function
hello()
const dobro = (n) =>  2 * n // ou (n) => {return 2 * n}
console.log(dobro(2))
const ehPar = (n) => n % 2 === 0
console.log(ehPar(5))
const echo = n => n
console.log(echo(5))*/

//funções regulares 
/*const dobro = function(n){
    return 2 * n
}
console.log(dobro(2))
const triplo =  function(n = 5){
    return 3 * n
}
console.log(triplo())
console.log(triplo(10))
/*function soma(a, b){
    return a + b;
}
const res = soma(2, 3)
console.log(res)*/

/*function hello(){
    console.log('oi')
}
hello()
function hello(nome){
    console.log('oi, '+ nome)
}
hello('Ana')*/
//vetores (bem parecidos com java) 



/*const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
//filter
const apenasComA = nomes.filter((n) => {return n.startsWith("A")})
console.log(apenasComA)
//map
const iniciais = nomes.map((n) => {return n.charAt(0)})
console.log(iniciais)
//reduce
const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => {return ac + v})
console.log(soma)
//every
const todosComecamComA = nomes.every((n) => {return n.startsWith("A")})
console.log(todosComecamComA)*/

/*v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = "abc"
console.log(v1.length)

v2 = [2, "abc", true]
console.log(v2)
for(let i = 0; i < v2.length; i++){
    console.log(v2[i])
}*/

//comparação
//==
//===
/*console.log(1 == 1)
console.log(1 == '1')
console.log(1 === 1)
console.log(1 === '1')
console.log(true == 1)
console.log(1 == [1])
console.log(null == null)
console.log(null == undefined)
console.log([] == false)
console.log([] == [])*/
/*const n1 = 2;
const n2 = '3';
//coerção implicita
const n3 = n1 + n2
console.log(n3)
const n4 = n1 + Number(n2)
console.log(n4)*/

// começando...//
//const, let, var
// a = 2; a variável a está appntando para um objeto de tipo number
// a = "abc"; // mudou agora a variável a está appntando paera um objeto de tipo string

//uso do const
//const nome = 'Breno'
//console.log(nome)

//uso do var
//var nome = 'José'
//console.log(nome)
//nome = "João"
//console.log(nome)

//var linguagem = "javascript"
//console.log("Aprendendo " + linguagem)
//var linguagem = "java"
//console.log("Aprndendo " + linguagem)

//hoist: içamento e dupla passagem
/*let idade = 18
console.log("oi, " + nome)
if(idade >= 18){
    let nome = "João"
    console.log("Parabéns, " + nome + ". Você pode dirigir")
}
console.log("Até mais, " + nome)*/