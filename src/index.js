const nameHeroi = "Carlos"
let expHeroi = 8000
let rankHeroi

if (expHeroi <= 1000) {
    rankHeroi = "Ferro"
} 
else if (expHeroi <= 2000) {
    rankHeroi = "Bronze"
}
else if (expHeroi <= 5000) {
    rankHeroi = "Prata"
}
else if (expHeroi <= 6000) {
    rankHeroi = "Ouro"
}
else if (expHeroi <= 7000) {
    rankHeroi = "Platina"
}
else if (expHeroi <= 8000) {
    rankHeroi = "Ascendente"
}
else if (expHeroi <= 9000) {
    rankHeroi = "Imortal"
}
else {
    rankHeroi = "Radiante"
}

console.log("O Herói " + nameHeroi + " está no rank " + rankHeroi + " com " + expHeroi + " pontos de EXP!")