let multiplicateur = 1;
let scoreParClic = 1;
let score = parseInt(document.getElementById("points").textContent);

function ajouterMultiplicateur(valeur, prix) {
    if (score >= prix) {
        score -= prix;
        multiplicateur *= valeur;
        alert("Votre multiplicateur actuel est de :" + multiplicateur);
    }
    else {
        alert("Vous n'avez pas assez de Mikes pour acheter ce multiplicateur !")
    }
}
    document.getElementById("Mike").addEventListener("click", function () {
        score += scoreParClic * multiplicateur;
        document.getElementById("points").textContent = score;
        console.log(score)
    }
    )

    document.getElementById("X2").addEventListener("click", function () {
        ajouterMultiplicateur(2, 5);
    })

    document.getElementById("X3").addEventListener("click", function () {
        ajouterMultiplicateur(3, 500);
    })

    document.getElementById("X4").addEventListener("click", function () {
        ajouterMultiplicateur(4, 1000);
        score -= 1000;
    })

    document.getElementById("XBonus").addEventListener("click", function () {
        ajouterMultiplicateur(200, 5000)
        setTimeout(30000);
    })