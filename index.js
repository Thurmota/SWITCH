let distanciaAnoLuz = prompt("Digite a distância em Anos-luz")

let escolhaOpcao = prompt('Para qual unidade deseja converter?\n1- Parse(pc)\n2- Unidade Astronômica' +
    "\n3- Quilômetros (km)\n\n(Digite o número da opção desejada)")

let escolhaDaUnidade
let conversorDistancia


switch (escolhaOpcao) {
    case "1":
        escolhaDaUnidade = "Parsec"
        conversorDistancia = distanciaAnoLuz * 0.306601
        break
    case "2":
        escolhaDaUnidade = "Unidade Astronômica"
        conversorDistancia = distanciaAnoLuz * 63241.1
        break
    case "3":
        escolhaDaUnidade = "Quilômetros"
        conversorDistancia = distanciaAnoLuz * 9.5 * Math.pow(10, 12)
        break
    default:
        escolhaDaUnidade = "Unidade não identificada"
        conversorDistancia = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distanciaAnoLuz + "\n" + escolhaDaUnidade + ": " + conversorDistancia)