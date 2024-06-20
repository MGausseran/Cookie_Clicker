let multiplicateur = 1;
let scoreParClic = 1;
let score = parseInt(document.getElementById("points").textContent);
let prixMultiX2 = 5;
let prixMultiX3 = 500;
let prixMultiX4 = 1000;
let prixBonus = 5000;

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
        ajouterMultiplicateur(2, prixMultiX2);
        prixMultiX2 *= 2;
        alert("Le prix du multiplicateur x2 est désormais de " + prixMultiX2)
    })

    document.getElementById("X3").addEventListener("click", function () {
        ajouterMultiplicateur(3, prixMultiX3);
    })

    document.getElementById("X4").addEventListener("click", function () {
        ajouterMultiplicateur(4, prixMultiX4);
        score -= 1000;
    })

    document.getElementById("XBonus").addEventListener("click", function () {
        ajouterMultiplicateur(200, prixBonus)
        setTimeout(30000);
    })