let multiplicateur = 1;
let scoreParClic = 1;
let score = parseInt(document.getElementById("points").textContent);

/*On définit au préalable les prix des différents multiplicateurs*/
let prixMultiX2 = 5;
let prixMultiX3 = 500;
let prixMultiX4 = 1000;
let prixBonus = 5000;

/*On ajoute ensuite les multiplicateurs, à condition que le score soit assez élevé pour les acheter*/
function ajouterMultiplicateur(valeur, prix) {
    /*Si le score est supérieur ou égal au prix défini dans les variables globales, alors l'achat est possible*/
    if (score >= prix) {
        score -= prix;
        multiplicateur *= valeur;
        /*On annonce au joueur le multiplicateur TOTAL dont il bénéficie après l'achat*/
        alert("Votre multiplicateur actuel est de :" + multiplicateur);
        prix *= 2; 
        /*PROBLEME : LE PRIX DU MULTIPLICATEUR NE SE MULTIPLIE PAR DEUX QU'UNE FOIS (LORS DU PREMIER ACHAT) 
        ET PLUS DU TOUT APRES*/
        /*On annonce au joueur le nouveau prix du multiplicateur*/
        alert("Le prix de ce multiplicateur est désormais de " + prix)
    }
    else {
        alert("Vous n'avez pas assez de Mikes pour acheter ce multiplicateur !")
    }
}

/* Au clic sur le bouton Mike, le score augmente de 1 X les cumuls de multiplicateur */
document.getElementById("Mike").addEventListener("click", function () {
    score += scoreParClic * multiplicateur;
    document.getElementById("points").textContent = score;
    console.log(score)
}
)

/* Tentative de fonction pour rendre les boutons cliquables 
seulement si le score est suffisament elevé pour les acheter */
/*function checkMulti() {
    if (score < prix) {
        document.getElementsByClassName("button").disabled
    }
}*/


document.getElementById("X2").addEventListener("click", function () {
    ajouterMultiplicateur(2, prixMultiX2);

})

document.getElementById("X3").addEventListener("click", function () {
    ajouterMultiplicateur(3, prixMultiX3);
})

document.getElementById("X4").addEventListener("click", function () {
    ajouterMultiplicateur(4, prixMultiX4);
})

document.getElementById("XBonus").addEventListener("click", function () {
    ajouterMultiplicateur(200, prixBonus)
    setTimeout(30000);
})