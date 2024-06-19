let multiplicateur = 1;
let scoreParClic = 1;
let score = document.getElementById("points").textContent;

document.getElementById("Mike").addEventListener("click", function(){
    score++
    document.getElementById("points").textContent = score;
    console.log(score)
}
)