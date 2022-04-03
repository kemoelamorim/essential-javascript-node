console.log("Trabalhando com listas")

const destinos = ["São Paulo", "Salvador", "Belém", "São Luiz"]
const novoDestino = "Forteleza"
destinos.push(novoDestino)

for(let i = 0; i < destinos.length; i++){
  console.log(`${i+1}º Destino: ${destinos[i]}`)
}

const novaLista = new Array(`Dinamarca`, `Canadá`, `Africa do Sul`)
const novoPais = novaLista.push("EUA")

novaLista.forEach((pais)=>{
  console.log(`País de destino: ${pais}`)
})

console.log("Removendo da lista com posições e indices")
novaLista.splice(2,1)
console.log(novaLista)
