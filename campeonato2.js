let numeroGols_escolaA = 0
let pontos_escolaA = 0
let saldoGols_escolaA = 0
let golsSofridos_escolaA = 0
let lista_escolaA = []

let numeroGols_escolaB = 0
let pontos_escolaB = 0
let saldoGols_escolaB = 0
let golsSofridos_escolaB = 0
let lista_escolaB = []

let numeroGols_escolaC = 0
let pontos_escolaC = 0
let saldoGols_escolaC = 0
let golsSofridos_escolaC = 0
let lista_escolaC = []

let numeroGols_escolaD = 0
let pontos_escolaD = 0
let saldoGols_escolaD = 0
let golsSofridos_escolaD = 0
let lista_escolaD = []

let primeiroLugar = 0
let numeroGols_primeiroLugar = 0
let penalty_primeiroLugar = 0
let segundoLugar = 0
let numeroGols_segundoLugar = 0
let penalty_segundoLugar = 0
let campeaoFinalista = ""

numeroGols_primeiroLugar = 0
numeroGols_segundoLugar = 0

function totalDeGols() {
    return Math.floor(Math.random() * 4)
}

console.log("\n--> Turno 1\n")

function rodada1 (){
    numeroGols_escolaA = totalDeGols()
    numeroGols_escolaB = totalDeGols()
    numeroGols_escolaC = totalDeGols()
    numeroGols_escolaD = totalDeGols()

    //console.log(numeroGols_escolaA,numeroGols_escolaB, numeroGols_escolaC, numeroGols_escolaD)

    if (numeroGols_escolaA > numeroGols_escolaB)
        pontos_escolaA += 3

    else if (numeroGols_escolaA < numeroGols_escolaB)
            pontos_escolaB += 3

        else if (numeroGols_escolaA === numeroGols_escolaB){
                pontos_escolaA += 1
                pontos_escolaB += 1
        }

    if (numeroGols_escolaC > numeroGols_escolaD)
        pontos_escolaC += 3

    else if (numeroGols_escolaC < numeroGols_escolaD)
            pontos_escolaD += 3

        else if (numeroGols_escolaC === numeroGols_escolaD){
                pontos_escolaC += 1
                pontos_escolaD += 1
        }

    saldoGols_escolaA = numeroGols_escolaA - numeroGols_escolaB
    golsSofridos_escolaA = numeroGols_escolaB

    saldoGols_escolaB = numeroGols_escolaB - numeroGols_escolaA
    golsSofridos_escolaB = numeroGols_escolaA

    saldoGols_escolaC = numeroGols_escolaC - numeroGols_escolaD
    golsSofridos_escolaC = numeroGols_escolaD

    saldoGols_escolaD = numeroGols_escolaD - numeroGols_escolaC
    golsSofridos_escolaD = numeroGols_escolaC

    lista_escolaA.push(
        pontos_escolaA,
        numeroGols_escolaA,
        saldoGols_escolaA,
        golsSofridos_escolaA)

    lista_escolaB.push(
        pontos_escolaB,
        numeroGols_escolaB,
        saldoGols_escolaB,
        golsSofridos_escolaB)

    lista_escolaC.push(
        pontos_escolaC,
        numeroGols_escolaC,
        saldoGols_escolaC,
        golsSofridos_escolaC)

    lista_escolaD.push(
        pontos_escolaD,
        numeroGols_escolaD,
        saldoGols_escolaD,
        golsSofridos_escolaD)

    return console.log("Rodada 1: " +
        "\nEscola A " + lista_escolaA[1] + " X " + lista_escolaB[1] + " Escola B" +
        "\nEscola C " + lista_escolaC[1] + " X " + lista_escolaD[1] + " Escola D"
        )
}

rodada1();

function rodada2 (){
    numeroGols_escolaA = totalDeGols()
    numeroGols_escolaB = totalDeGols()
    numeroGols_escolaC = totalDeGols()
    numeroGols_escolaD = totalDeGols()

    //console.log(numeroGols_escolaA,numeroGols_escolaB, numeroGols_escolaC, numeroGols_escolaD)

    if (numeroGols_escolaA > numeroGols_escolaB)
        pontos_escolaA += 3

    else if (numeroGols_escolaA < numeroGols_escolaB)
        pontos_escolaB += 3

    else if (numeroGols_escolaA === numeroGols_escolaB){
        pontos_escolaA += 1
        pontos_escolaB += 1
    }

    if (numeroGols_escolaC > numeroGols_escolaD)
        pontos_escolaC += 3

    else if (numeroGols_escolaC < numeroGols_escolaD)
        pontos_escolaD += 3

    else if (numeroGols_escolaC === numeroGols_escolaD){
        pontos_escolaC += 1
        pontos_escolaD += 1
    }

    saldoGols_escolaA = numeroGols_escolaA - numeroGols_escolaB
    golsSofridos_escolaA = numeroGols_escolaB

    saldoGols_escolaB = numeroGols_escolaB - numeroGols_escolaA
    golsSofridos_escolaA = numeroGols_escolaB

    saldoGols_escolaC = numeroGols_escolaC - numeroGols_escolaD
    golsSofridos_escolaC = numeroGols_escolaD

    saldoGols_escolaD = numeroGols_escolaD - numeroGols_escolaC
    golsSofridos_escolaD = numeroGols_escolaC

    lista_escolaA.push(
        pontos_escolaA,
        numeroGols_escolaA,
        saldoGols_escolaA,
        golsSofridos_escolaA)

    lista_escolaB.push(
        pontos_escolaB,
        numeroGols_escolaB,
        saldoGols_escolaB,
        golsSofridos_escolaB)

    lista_escolaC.push(
        pontos_escolaC,
        numeroGols_escolaC,
        saldoGols_escolaC,
        golsSofridos_escolaC)

    lista_escolaD.push(
        pontos_escolaD,
        numeroGols_escolaD,
        saldoGols_escolaD,
        golsSofridos_escolaD)

    return console.log("Rodada 2: " +
        "\nEscola A " + lista_escolaA[1] + " X " + lista_escolaB[1] + " Escola B" +
        "\nEscola C " + lista_escolaC[1] + " X " + lista_escolaD[1] + " Escola D"
    )
}

rodada2();

function rodada3 (){
    numeroGols_escolaA = totalDeGols()
    numeroGols_escolaB = totalDeGols()
    numeroGols_escolaC = totalDeGols()
    numeroGols_escolaD = totalDeGols()

    //console.log(numeroGols_escolaA,numeroGols_escolaB, numeroGols_escolaC, numeroGols_escolaD)

    if (numeroGols_escolaA > numeroGols_escolaB)
        pontos_escolaA += 3

    else if (numeroGols_escolaA < numeroGols_escolaB)
        pontos_escolaB += 3

    else if (numeroGols_escolaA === numeroGols_escolaB){
        pontos_escolaA += 1
        pontos_escolaB += 1
    }

    if (numeroGols_escolaC > numeroGols_escolaD)
        pontos_escolaC += 3

    else if (numeroGols_escolaC < numeroGols_escolaD)
        pontos_escolaD += 3

    else if (numeroGols_escolaC === numeroGols_escolaD){
        pontos_escolaC += 1
        pontos_escolaD += 1
    }

    saldoGols_escolaA = numeroGols_escolaA - numeroGols_escolaB
    golsSofridos_escolaA = numeroGols_escolaB

    saldoGols_escolaB = numeroGols_escolaB - numeroGols_escolaA
    golsSofridos_escolaB = numeroGols_escolaA

    saldoGols_escolaC = numeroGols_escolaC - numeroGols_escolaD
    golsSofridos_escolaC = numeroGols_escolaD

    saldoGols_escolaD = numeroGols_escolaD - numeroGols_escolaC
    golsSofridos_escolaD = numeroGols_escolaC

    lista_escolaA.push(
        pontos_escolaA,
        numeroGols_escolaA,
        saldoGols_escolaA,
        golsSofridos_escolaA)

    lista_escolaB.push(
        pontos_escolaB,
        numeroGols_escolaB,
        saldoGols_escolaB,
        golsSofridos_escolaB)

    lista_escolaC.push(
        pontos_escolaC,
        numeroGols_escolaC,
        saldoGols_escolaC,
        golsSofridos_escolaC)

    lista_escolaD.push(
        pontos_escolaD,
        numeroGols_escolaD,
        saldoGols_escolaD,
        golsSofridos_escolaD)

    return console.log("Rodada 3: " +
        "\nEscola A " + lista_escolaA[1] + " X " + lista_escolaB[1] + " Escola B" +
        "\nEscola C " + lista_escolaC[1] + " X " + lista_escolaD[1] + " Escola D"
    )
}

rodada3();

console.log("\n--> Turno 2")

function rodada4 (){
    numeroGols_escolaA = totalDeGols()
    numeroGols_escolaB = totalDeGols()
    numeroGols_escolaC = totalDeGols()
    numeroGols_escolaD = totalDeGols()

    //console.log(numeroGols_escolaA,numeroGols_escolaB, numeroGols_escolaC, numeroGols_escolaD)

    if (numeroGols_escolaA > numeroGols_escolaB)
        pontos_escolaA += 3

    else if (numeroGols_escolaA < numeroGols_escolaB)
        pontos_escolaB += 3

    else if (numeroGols_escolaA === numeroGols_escolaB){
        pontos_escolaA += 1
        pontos_escolaB += 1
    }

    if (numeroGols_escolaC > numeroGols_escolaD)
        pontos_escolaC += 3

    else if (numeroGols_escolaC < numeroGols_escolaD)
        pontos_escolaD += 3

    else if (numeroGols_escolaC === numeroGols_escolaD){
        pontos_escolaC += 1
        pontos_escolaD += 1
    }

    saldoGols_escolaA = numeroGols_escolaA - numeroGols_escolaB
    golsSofridos_escolaA = numeroGols_escolaB

    saldoGols_escolaB = numeroGols_escolaB - numeroGols_escolaA
    golsSofridos_escolaB = numeroGols_escolaA

    saldoGols_escolaC = numeroGols_escolaC - numeroGols_escolaD
    golsSofridos_escolaC = numeroGols_escolaD

    saldoGols_escolaD = numeroGols_escolaD - numeroGols_escolaC
    golsSofridos_escolaD = numeroGols_escolaC

    lista_escolaA.push(
        pontos_escolaA,
        numeroGols_escolaA,
        saldoGols_escolaA,
        golsSofridos_escolaA)

    lista_escolaB.push(
        pontos_escolaB,
        numeroGols_escolaB,
        saldoGols_escolaB,
        golsSofridos_escolaB)

    lista_escolaC.push(
        pontos_escolaC,
        numeroGols_escolaC,
        saldoGols_escolaC,
        golsSofridos_escolaC)

    lista_escolaD.push(
        pontos_escolaD,
        numeroGols_escolaD,
        saldoGols_escolaD,
        golsSofridos_escolaD)

    return console.log("Rodada 4:" +
        "\nEscola A " + lista_escolaA[1] + " X " + lista_escolaB[1] + " Escola B" +
        "\nEscola C " + lista_escolaC[1] + " X " + lista_escolaD[1] + " Escola D"
    )
}

rodada4();

function rodada5 (){
    numeroGols_escolaA = totalDeGols()
    numeroGols_escolaB = totalDeGols()
    numeroGols_escolaC = totalDeGols()
    numeroGols_escolaD = totalDeGols()

    //console.log(numeroGols_escolaA,numeroGols_escolaB, numeroGols_escolaC, numeroGols_escolaD)

    if (numeroGols_escolaA > numeroGols_escolaB)
        pontos_escolaA += 3

    else if (numeroGols_escolaA < numeroGols_escolaB)
        pontos_escolaB += 3

    else if (numeroGols_escolaA === numeroGols_escolaB){
        pontos_escolaA += 1
        pontos_escolaB += 1
    }

    if (numeroGols_escolaC > numeroGols_escolaD)
        pontos_escolaC += 3

    else if (numeroGols_escolaC < numeroGols_escolaD)
        pontos_escolaD += 3

    else if (numeroGols_escolaC === numeroGols_escolaD){
        pontos_escolaC += 1
        pontos_escolaD += 1
    }

    saldoGols_escolaA = numeroGols_escolaA - numeroGols_escolaB
    golsSofridos_escolaA = numeroGols_escolaB

    saldoGols_escolaB = numeroGols_escolaB - numeroGols_escolaA
    golsSofridos_escolaB = numeroGols_escolaA

    saldoGols_escolaC = numeroGols_escolaC - numeroGols_escolaD
    golsSofridos_escolaC = numeroGols_escolaD

    saldoGols_escolaD = numeroGols_escolaD - numeroGols_escolaC
    golsSofridos_escolaD = numeroGols_escolaC

    lista_escolaA.push(
        pontos_escolaA,
        numeroGols_escolaA,
        saldoGols_escolaA,
        golsSofridos_escolaA)

    lista_escolaB.push(
        pontos_escolaB,
        numeroGols_escolaB,
        saldoGols_escolaB,
        golsSofridos_escolaB)

    lista_escolaC.push(
        pontos_escolaC,
        numeroGols_escolaC,
        saldoGols_escolaC,
        golsSofridos_escolaC)

    lista_escolaD.push(
        pontos_escolaD,
        numeroGols_escolaD,
        saldoGols_escolaD,
        golsSofridos_escolaD)

    return console.log("Rodada 5:" +
        "\nEscola A " + lista_escolaA[1] + " X " + lista_escolaB[1] + " Escola B" +
        "\nEscola C " + lista_escolaC[1] + " X " + lista_escolaD[1] + " Escola D"
    )
}

rodada5();

function rodada6 (){
    numeroGols_escolaA = totalDeGols()
    numeroGols_escolaB = totalDeGols()
    numeroGols_escolaC = totalDeGols()
    numeroGols_escolaD = totalDeGols()

    //console.log(numeroGols_escolaA,numeroGols_escolaB, numeroGols_escolaC, numeroGols_escolaD)

    if (numeroGols_escolaA > numeroGols_escolaB)
        pontos_escolaA += 3

    else if (numeroGols_escolaA < numeroGols_escolaB)
        pontos_escolaB += 3

    else if (numeroGols_escolaA === numeroGols_escolaB){
        pontos_escolaA += 1
        pontos_escolaB += 1
    }

    if (numeroGols_escolaC > numeroGols_escolaD)
        pontos_escolaC += 3

    else if (numeroGols_escolaC < numeroGols_escolaD)
        pontos_escolaD += 3

    else if (numeroGols_escolaC === numeroGols_escolaD){
        pontos_escolaC += 1
        pontos_escolaD += 1
    }

    saldoGols_escolaA = numeroGols_escolaA - numeroGols_escolaB
    golsSofridos_escolaA = numeroGols_escolaB

    saldoGols_escolaB = numeroGols_escolaB - numeroGols_escolaA
    golsSofridos_escolaB = numeroGols_escolaA

    saldoGols_escolaC = numeroGols_escolaC - numeroGols_escolaD
    golsSofridos_escolaC = numeroGols_escolaD

    saldoGols_escolaD = numeroGols_escolaD - numeroGols_escolaC
    golsSofridos_escolaD = numeroGols_escolaC

    lista_escolaA.push(
        pontos_escolaA,
        numeroGols_escolaA,
        saldoGols_escolaA,
        golsSofridos_escolaA)

    lista_escolaB.push(
        pontos_escolaB,
        numeroGols_escolaB,
        saldoGols_escolaB,
        golsSofridos_escolaB)

    lista_escolaC.push(
        pontos_escolaC,
        numeroGols_escolaC,
        saldoGols_escolaC,
        golsSofridos_escolaC)

    lista_escolaD.push(
        pontos_escolaD,
        numeroGols_escolaD,
        saldoGols_escolaD,
        golsSofridos_escolaD)

    return console.log("Rodada 6:" +
        "\nEscola A " + lista_escolaA[1] + " X " + lista_escolaB[1] + " Escola B" +
        "\nEscola C " + lista_escolaC[1] + " X " + lista_escolaD[1] + " Escola D\n" +
        "\n--> Classificação:\n" +
        "--------------------------------------------------------------------------" +
        "\n|  Escola A  |  " + lista_escolaA[20] + " pontos  |  " + lista_escolaA[21] + " gols  |  " + "saldo de " + lista_escolaA[22] + "  |  " + lista_escolaA[23] + " gols sofrido  |  " +
        "\n|  Escola B  |  " + lista_escolaB[20] + " pontos  |  " + lista_escolaB[21] + " gols  |  " + "saldo de " + lista_escolaB[22] + "  |  " + lista_escolaB[23] + " gols sofrido  |  " +
        "\n|  Escola C  |  " + lista_escolaC[20] + " pontos  |  " + lista_escolaC[21] + " gols  |  " + "saldo de " + lista_escolaC[22] + "  |  " + lista_escolaC[23] + " gols sofrido  |  " +
        "\n|  Escola D  |  " + lista_escolaD[20] + " pontos  |  " + lista_escolaD[21] + " gols  |  " + "saldo de " + lista_escolaD[22] + "  |  " + lista_escolaD[23] + " gols sofrido  |  " +
        "\n--------------------------------------------------------------------------"
    )
}

rodada6();

pontosParaAsFinais = [lista_escolaA[20], lista_escolaB[20], lista_escolaC[20], lista_escolaD[20]]
//console.log(pontosParaAsFinais)

function pontosParaAsFinais_ordenados() {
    function decrescente(a, b) {
        return b - a;
    }
    let ordenado = pontosParaAsFinais.sort(decrescente)
    //console.log(ordenado[0] + "," + ordenado[1])

    function Final(){
        if(lista_escolaA[20] === ordenado[0])
            primeiroLugar = "Escola A"
        else if (lista_escolaB[20] === ordenado[0])
                primeiroLugar = "Escola B"
            else if (lista_escolaC[20] === ordenado[0])
                    primeiroLugar = "Escola C"
                else if (lista_escolaD[20] === ordenado[0])
            primeiroLugar = "Escola D"

        if(lista_escolaA[20] === ordenado[1])
            segundoLugar = "Escola A"
        else if (lista_escolaB[20] === ordenado[1])
            segundoLugar = "Escola B"
        else if (lista_escolaC[20] === ordenado[1])
            segundoLugar = "Escola C"
        else if (lista_escolaD[20] === ordenado[1])
            segundoLugar = "Escola D"

        return console.log("Finalistas: " + primeiroLugar + ", " + segundoLugar)
    }
    Final()
}

pontosParaAsFinais_ordenados()

console.log("\n--> Jogo Final")

function rodadaFinal (){
    numeroGols_primeiroLugar = totalDeGols()
    numeroGols_segundoLugar = totalDeGols()

    if (numeroGols_primeiroLugar > numeroGols_segundoLugar) {
        campeaoFinalista = primeiroLugar
        console.log("\n" + primeiroLugar + " " + numeroGols_primeiroLugar + "X" + numeroGols_segundoLugar + " " + segundoLugar)
    }
    else if (numeroGols_primeiroLugar < numeroGols_segundoLugar){
        campeaoFinalista = segundoLugar
        console.log("\n" + primeiroLugar + " " + numeroGols_primeiroLugar + "X" + numeroGols_segundoLugar + " " + segundoLugar)
    }
    else if (numeroGols_primeiroLugar === numeroGols_segundoLugar){
        console.log("\n" + primeiroLugar + " " + numeroGols_primeiroLugar + "X" + numeroGols_segundoLugar + " " + segundoLugar)
        console.log("\nPenaltis:")
        penalty()
    }

    return console.log("\nCampeão: " + campeaoFinalista)

    function penalty(){
        let chute = Math.floor(Math.random() * 2)

        penalty_primeiroLugar = 0
        penalty_segundoLugar = 0

        for (let i = 0; i <= 4; i++) {
            penalty_primeiroLugar += chute
            penalty_segundoLugar += chute
            //console.log(penalty_primeiroLugar, penalty_segundoLugar)

        }

        //console.log(penalty_primeiroLugar, penalty_segundoLugar)

        if (penalty_primeiroLugar > penalty_segundoLugar)
            campeaoFinalista = primeiroLugar
        else if (penalty_primeiroLugar < penalty_segundoLugar)
            campeaoFinalista = segundoLugar
        else {
            do {
                penalty_primeiroLugar += chute
                penalty_segundoLugar += chute
            }
            while (penalty_primeiroLugar === penalty_segundoLugar)

            if (penalty_primeiroLugar > penalty_segundoLugar)
                campeaoFinalista = primeiroLugar

            else if (penalty_primeiroLugar < penalty_segundoLugar)
                campeaoFinalista = segundoLugar
        }
        return campeaoFinalista
    }
}

rodadaFinal();