let TIMES = {
    timeA : { nome : 'A', pontos : 0, gols_marcados : 0, saldo_gols : 0, gols_sofridos : 0, },
    timeB : { nome : 'B', pontos : 0, gols_marcados : 0, saldo_gols : 0, gols_sofridos : 0, },
    timeC : { nome : 'C', pontos : 0, gols_marcados : 0, saldo_gols : 0, gols_sofridos : 0, },
    timeD : { nome : 'D', pontos : 0, gols_marcados : 0, saldo_gols : 0, gols_sofridos : 0, },
}

let PARTIDAS = [
    {casa : TIMES.timeA, golsCasa : 0, visita : TIMES.timeB, golsVisita : 0},
    {casa : TIMES.timeC, golsCasa : 0, visita : TIMES.timeD, golsVisita : 0},
    {casa : TIMES.timeA, golsCasa : 0, visita : TIMES.timeC, golsVisita : 0},
    {casa : TIMES.timeB, golsCasa : 0, visita : TIMES.timeD, golsVisita : 0},
    {casa : TIMES.timeA, golsCasa : 0, visita : TIMES.timeD, golsVisita : 0},
    {casa : TIMES.timeC, golsCasa : 0, visita : TIMES.timeB, golsVisita : 0},

    {visita : TIMES.timeA, golsCasa : 0, casa : TIMES.timeB, golsVisita : 0},
    {visita : TIMES.timeC, golsCasa : 0, casa : TIMES.timeD, golsVisita : 0},
    {visita : TIMES.timeA, golsCasa : 0, casa : TIMES.timeC, golsVisita : 0},
    {visita : TIMES.timeB, golsCasa : 0, casa : TIMES.timeD, golsVisita : 0},
    {visita : TIMES.timeA, golsCasa : 0, casa : TIMES.timeD, golsVisita : 0},
    {visita : TIMES.timeC, golsCasa : 0, casa : TIMES.timeB, golsVisita : 0},
]

function gerarGols(max) { 
    return Math.floor(Math.random() * max)
}

function calcularPartida(partida) {
    partida.golsCasa = gerarGols(3)
    partida.golsVisita = gerarGols(3)
}

function executarPartidas(partidas) {
    for (partida of partidas) {
        calcularPartida(partida)
    }
}

function relatorioPartidas(partidas) {
    let numPartida = 1
    let numRodada = 1
    let numTurno = 1

    for(let partida of partidas) {
        if (numPartida % 6 == 1) {
            console.log(`\nTurno ${numTurno}`)
            numTurno ++
        }
        if (numPartida % 2 == 1) {
            console.log(`\nRodada ${numRodada}`)
            numRodada ++
        }
        exibirPartida(partida)
        numPartida ++
    }
 }

function exibirPartida(partida) {
    console.log(`TIME${partida.casa.nome}  ${partida.golsCasa} x ${partida.golsVisita}  TIME${partida.visita.nome}`)
}

 function calcularPontos(partidas) {
     for( let { casa, visita, golsCasa, golsVisita } of partidas) {
         if(golsCasa > golsVisita) {
             casa.pontos +=  3
         } else if (golsCasa < golsVisita){
             visita.pontos +=  3
         } else {
             casa.pontos ++
             visita.pontos ++
         }
         casa.gols_marcados += golsCasa
         visita.gols_marcados += golsVisita

         casa.gols_sofridos += golsVisita
         visita.gols_sofridos += golsCasa

         casa.saldo_gols += golsCasa - golsVisita
         visita.saldo_gols += golsVisita - golsCasa
     }
 }

 function classificarTimes(times){
    let timesLista =  Object.values(times)
    
    timesLista.sort((time1, time2) => {
        if (time1.pontos !==  time2.pontos) {
            return time2.pontos - time1.pontos
        }
        if(time1.gols_marcados !== time2.gols_marcados) {
            return time2.gols_marcados - time1.gols_marcados
        }
        if(time1.saldo_gols !== time2.saldo_gols){
            return time2.saldo_gols - time1.saldo_gols
        }
        return time1.gols_sofridos - time2.gols_sofridos
    })

    return timesLista
 }

 function final(primeiro, segundo) {

    let partida = {visita: primeiro, golsCasa: 0, casa: segundo, golsVisita : 0}

    calcularPartida(partida)
    exibirPartida(partida)

    let campeao = null

    if (partida.golsCasa === partida.golsVisita) {
        let penaltisCasa = gerarGols(6)
        let penaltisVisita = gerarGols(6)
        
        

        while (penaltisCasa == penaltisVisita){
            penaltisCasa += gerarGols(2)
            penaltisVisita += gerarGols(2)
        }
        console.log(`\nPENALTIS`)
        console.log(`TIME ${partida.casa.nome}  ${penaltisCasa} x ${penaltisVisita}  TIME ${partida.visita.nome}`)
    
        if (penaltisCasa > penaltisVisita) {
            campeao = partida.casa
        } else {
            campeao = partida.visita
        }
        
    } else {
        if (partida.golsCasa > partida.golsVisita) {
            campeao = partida.casa
        } else {
            campeao = partida.visita
        }
    }
    console.log(`\nCampeão: TIME  ${campeao.nome} `)
 }

executarPartidas(PARTIDAS)
relatorioPartidas(PARTIDAS)
calcularPontos(PARTIDAS)
let classificacao = classificarTimes(TIMES)
console.table(classificacao)

let[primeiro, segundo] = classificacao
final(primeiro, segundo)