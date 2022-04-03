console.log("Trabalhando com While")
var idade = 14;
var passagemDisponivel = true;

while(passagemDisponivel) {
  if(idade >= 18){
    console.log(`Sua idade é ${idade}, permitida compra de passagem.`)
    passagemDisponivel = false;
    break;
  }
  idade++;
}