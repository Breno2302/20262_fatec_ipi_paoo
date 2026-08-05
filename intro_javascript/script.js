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

//hoist: içamento
let idade = 18
console.log("oi, " + nome)
if(idade >= 18){
    let nome = "João"
    console.log("Parabéns, " + nome + ". Você pode dirigir")
}
console.log("Até mais, " + nome)