let multiplicateur = 1;
let scoreParClic = 1;
let intervalAutoClic = 1000; // Intervalle en millisecondes pour le clic automatique
let autoClicActive = false; // Variable pour vérifier si le clic automatique est activé
let score = parseInt(document.getElementById("points").textContent);

/*On définit au préalable les prix des différents multiplicateurs*/
let prixMultiX2 = 5;
let prixMultiX3 = 500;
let prixMultiX4 = 1000;
let prixBonus = 5000;
let prixAutoclic = 12000;

/*Pour chaque multiplicateur (identifié ici selon la valeur), son prix sera multiplié par sa valeur au clic sur le bouton*/

function augmenterPrix(valeur) {
    if (valeur === 2) prixMultiX2 *= 2;
    if (valeur === 3) prixMultiX3 *= 3;
    if (valeur === 4) prixMultiX4 *= 4;
    if (valeur === 200) prixBonus *= 200;
    if (valeur === 500) prixAutoclic *= 500;
}

/*On vérifie toutes les 100ms si le score est suffisamment haut pour acheter ou pas un multiplicateur*/
/*S'il est trop bas, le bouton d'achat est désactivé*/
function verifierBoutons() {
    document.getElementById("X2").disabled = score < prixMultiX2;
    document.getElementById("X3").disabled = score < prixMultiX3;
    document.getElementById("X4").disabled = score < prixMultiX4;
    document.getElementById("XBonus").disabled = score < prixBonus;
    document.getElementById("Autoclic").disabled = score < prixAutoclic;
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

function activerAutoClic() {
    autoClicActive = true;
    setInterval(function () {
        score += scoreParClic * multiplicateur;
        document.getElementById("points").textContent = score;
        console.log("Auto Clic: " + score);
    }, intervalAutoClic);
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
    alert("Bonus activé ! Vous bénéficiez d'un multiplicateur de 200% pendant 30 secondes.");
    let originalMultiplicateur = multiplicateur;
    multiplicateur *= 2; 

    setTimeout(function () {
        multiplicateur = originalMultiplicateur; // Réinitialiser le multiplicateur après 30 secondes
        alert("Le bonus de 200% est terminé.");
    }, 30000);

    augmenterPrix(200);
});

/* Ajout de l'événement pour le clic automatique */
document.getElementById("Autoclic").addEventListener("click", function () {
    if (score >= prixAutoclic) {
        score -= prixAutoclic;
        document.getElementById("points").textContent = score;
        activerAutoClic();
        augmenterPrix(500);
        alert("Clic automatique activé ! Un clic sera ajouté toutes les " + (intervalAutoClic / 1000) + " secondes.");
    } else {
        alert("Vous n'avez pas assez de Mikes pour acheter le clic automatique !");
    }
});