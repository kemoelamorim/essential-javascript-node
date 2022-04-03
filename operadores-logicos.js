console.log("Trabalhando com Operadores Lógicos")
const notas = [7.7 , 3, 5.4]
var somaDasNotas = 0;
const notaDoTrabalho = 2;
const aprovado = notas.map(nota=>{
  somaDasNotas = somaDasNotas + nota
})

var media = somaDasNotas/notas.length
console.log(media)
const recuperou = false;

if(media < 6 && recuperou){
  console.log("Aprovado por recuperação")
}else if(media >= 6){
  console.log("Aprovado Direto")
}else{
  console.log("Reprovado")
}

if(recuperou || (notaDoTrabalho + media) >=6){
  console.log("Passou pela pontuação com ajuda do Trabalho ou pela Recuperação")
}

