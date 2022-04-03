console.log("Atribuição de variáveis")
const primeiroNome = "Kemoel"
const sobreNome = "Miranda"

console.log("Variavel const, usada para atribuir um valor constante")

console.log(`Meu nome é completo é ${primeiroNome + " " + sobreNome} `)
const nomeCompleto = primeiroNome + " " + sobreNome
console.log(`Meu nome é completo é ${nomeCompleto}`)

console.log("Variavel let, usada dentro de escopo limitado")
let contador = 0
contador = contador + 1;

console.log("Variavel var, usada para atribuições dinâmicas")
var idade = 27;
idade = idade + contador