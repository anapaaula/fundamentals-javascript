const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 126) / 3;

const scoreWin = 100;

console.log(`Score Dolphins: ${scoreDolphins} - Score Koalas: ${scoreKoalas}`)

if ((scoreDolphins > scoreKoalas) && scoreDolphins >= scoreWin) {
    console.log(`Dolphins win the trophy!!`);

} else if ((scoreKoalas > scoreDolphins) && scoreKoalas >= scoreWin) {
    console.log(`Koalas win the trophy!!`);

} else if ((scoreKoalas === scoreDolphins) && ((scoreDolphins >= scoreWin) && (scoreKoalas >= scoreWin))) {
    console.log(`Both win the trophy!!`);
    
} else {
    console.log(`No one wins the trophy!!`);
    
}