/*function jurosSimples(capIni, taxaJur, tempoApli){
    let a, b = capIni*taxaJur*tempoApli
    a = capIni
    console.log('O valor do montante pelo juros simples é: ' + a + b)
}
//jurosSimples(1000, 0.006, 10)

function jurosCompostos(c, j, n){
    let m,i
    m = c*(1 + i)^n
    console.log(m)
}
//jurosCompostos(1000,2,12) */

const jurosSimples = (capital, taxa, tempo) => {
    return capital + (capital * taxa * tempo);
}

const jurosComposto = (capital, taxa, tempo) => {
    return capital * (1 + taxa) ** tempo;
}

console.log("Juros Simples: " + jurosSimples(100, 10 / 100, 2).toFixed(2));
console.log("Juros Composto: " + jurosComposto(100, 10 / 100, 2).toFixed(2));