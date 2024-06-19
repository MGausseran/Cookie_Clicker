let multiplicateur = 1;
let scoreParClic = 1;
let score = parseInt(document.getElementById("points").textContent);

function ajouterMultiplicateur(valeur) {
    multiplicateur *= valeur;
    alert("Votre multiplicateur actuel est de :" + multiplicateur);
}

document.getElementById("Mike").addEventListener("click", function () {
    score += scoreParClic * multiplicateur;
    document.getElementById("points").textContent = score;
    console.log(score)
}
)

document.getElementById("X2").addEventListener("click", function () {
    ajouterMultiplicateur(2);
    if (score <= 100) {   
    }
})

document.getElementById("X3").addEventListener("click", function () {
    ajouterMultiplicateur(3);
})

document.getElementById("X4").addEventListener("click", function () {
    ajouterMultiplicateur(4);
    score -= 1000;
})

document.getElementById("XBonus").addEventListener("click", function () {
    ajouterMultiplicateur(200)
    setTimeout(30000);
})