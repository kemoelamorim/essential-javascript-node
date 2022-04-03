import OperacoesAritimeticas from './OperacoesAritimeticas.js';

var op = new OperacoesAritimeticas()

console.log("Meu primeiro programa: Trabalhando com variáveis operadores aritiméricos e funções")

const salario = 1200;
const bonus = 100;
const desconto = 50;
const qtdMeses = 12;

const salarioBonus = op.soma(salario,bonus)
const salarioDesconto = op.subtracao(salario, desconto)
const salarioAnual = op.multiplicacao(salario, qtdMeses)
const salarioAnualParcelado = op.divisao(salarioAnual, qtdMeses)

console.log("O salário é :", salario)
console.log("O salário + Bonus é:",salarioBonus)
console.log("O salário - desconto é:",salarioDesconto)
console.log(`O salário x ${qtdMeses} é: ${salarioAnual}`)
console.log(`O salário / ${qtdMeses} é: ${salarioAnualParcelado}`)
