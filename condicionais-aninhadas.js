console.log("Tranalhando com condicionais aninhadas")

const destinos = [ "Salvaterra", "Traquateua", "Marudá"]
const idade = 12
const acompanhado = false;

if(idade >= 18){
  console.log("Pode embarcar para o destino a passagem")
  destinos.splice(2,1)
}else if(acompanhado){
  console.log("Pode embarcar está acompanhado")
  destinos.splice(2,1)
}else{
  console.log("Não pode embarcar, menor de idade e não está acompanhado")
}
console.log(destinos)