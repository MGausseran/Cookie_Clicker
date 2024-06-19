let multiplicateur = 1;
let scoreParClic = 1;
let score = document.getElementById("points").textContent;

document.getElementById("Mike").addEventListener("click", function(){
    score++
    document.getElementById("points").textContent = score;
    console.log(score)
}
)

document.getElementById("X2").addEventListener("click", function(){
    multiplicateur+=2;
    console.log(multiplicateur);
    scoreParClic*=multiplicateur
    console.log(scoreParClic)
})
document.getElementById("X3").addEventListener("click", function(){
    multiplicateur+=3;
    console.log(multiplicateur);
    scoreParClic*=multiplicateur
    console.log(scoreParClic)
})
document.getElementById("X4").addEventListener("click", function(){
    multiplicateur+=4;
    console.log(multiplicateur);
    scoreParClic*=multiplicateur
    console.log(scoreParClic)
})
document.getElementById("XBonus").addEventListener("click", function(){
    multiplicateur+=200;
    console.log(multiplicateur);
    scoreParClic*=multiplicateur
    console.log(scoreParClic)
    setTimeout(30000);
})