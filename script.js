let multiplicateur = 1;
let scoreParClic = 1;
let score = parseInt(document.getElementById("points").textContent);

/*On définit au préalable les prix des différents multiplicateurs*/
let prixMultiX2 = 5;
let prixMultiX3 = 500;
let prixMultiX4 = 1000;
let prixBonus = 5000;

/*Pour chaque multiplicateur (identifié ici selon la valeur), son prix sera multiplié par sa valeur au clic sur le bouton*/

function augmenterPrix(valeur) {
    if (valeur === 2) prixMultiX2 *= 2;
    if (valeur === 3) prixMultiX3 *= 3;
    if (valeur === 4) prixMultiX4 *= 4;
    if (valeur === 200) prixBonus *= 200;
}

function verifierBoutons() {
    document.getElementById("X2").disabled = score < prixMultiX2;
    document.getElementById("X3").disabled = score < prixMultiX3;
    document.getElementById("X4").disabled = score < prixMultiX4;
    document.getElementById("XBonus").disabled = score < prixBonus;
}

setInterval(verifierBoutons, 100);


/*On ajoute ensuite les multiplicateurs, à condition que le score soit assez élevé pour les acheter*/
function ajouterMultiplicateur(valeur, prix) {
    /*Si le score est supérieur ou égal au prix défini dans les variables globales, alors l'achat est possible*/
    if (score >= prix) {
        score -= prix;
        multiplicateur *= valeur;
        /*On annonce au joueur le multiplicateur TOTAL dont il bénéficie après l'achat*/
        alert("Votre multiplicateur actuel est de :" + multiplicateur);
        /*On annonce au joueur le nouveau prix du multiplicateur*/
        alert("Le prix de ce multiplicateur est désormais de " + prix);
    }
    else {
        alert("Vous n'avez pas assez de Mikes pour acheter ce multiplicateur !");
    }
}



/* Au clic sur le bouton Mike, le score augmente de 1 X les cumuls de multiplicateur */
document.getElementById("Mike").addEventListener("click", function () {
    score += scoreParClic * multiplicateur;
    document.getElementById("points").textContent = score;
    console.log(score)
}
)

document.getElementById("X2").addEventListener("click", function () {
    ajouterMultiplicateur(2, prixMultiX2);
    augmenterPrix(2)

})

document.getElementById("X3").addEventListener("click", function () {
    ajouterMultiplicateur(3, prixMultiX3);
    augmenterPrix(3)
})

document.getElementById("X4").addEventListener("click", function () {
    ajouterMultiplicateur(4, prixMultiX4);
    augmenterPrix(4)
})

document.getElementById("XBonus").addEventListener("click", function () {
    ajouterMultiplicateur(200, prixBonus);
    augmenterPrix(200)
    setTimeout(30000);
})