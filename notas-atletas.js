let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

for (let atleta of atletas) {
    let soma = atleta.notas.reduce((total, nota) => total + nota, 0);
    let media = soma / atleta.notas.length;
}

//saida no console
for (let atleta of atletas) {
  console.log(`Atleta: ${atleta.nome}`);

  let notas = atleta.notas.sort()
  console.log(`Notas Obtidas: ${notas}`)

  let notasOrdenadas = notas.slice().sort((a, b) => a - b);
  let notasSemMaiorMenor = notasOrdenadas.slice(1,4)
  
  let soma = notasSemMaiorMenor.reduce((total, nota) => total + nota, 0);
  let media = soma / notasSemMaiorMenor.length;
  console.log(`Média Válida: ${media}` )

  console.log("")

}

