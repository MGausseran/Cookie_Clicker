let multiplicateur = 1;
let scoreParClic = 1;
let intervalAutoClic = 1000; // Intervalle en millisecondes pour le clic automatique
let autoClicActive = false; // Variable pour vérifier si le clic automatique est activé
let xAutoActive = false; // Variable pour vérifier si le bouton XAuto est activé
let score = parseInt(document.getElementById("points").textContent);
let nombreAutoClics = 0; // Variable du nombre d'auto-clics appliqués par le joueur
const multiplicateurElement = document.getElementById("X");
const scoreBySecElement = document.getElementById("scoreBySec");

/* On définit au préalable les prix des différents multiplicateurs */
let prixMultiX2 = 5;
let prixMultiX3 = 500;
let prixMultiX4 = 1000;
let prixBonus = 5000;
let prixAutoclick = 12000;

function augmenterPrix(valeur) {
    if (valeur === 2) prixMultiX2 *= 2;
    if (valeur === 3) prixMultiX3 *= 3;
    if (valeur === 4) prixMultiX4 *= 4;
    if (valeur === 200) prixBonus *= 200;
    if (valeur === 500) prixAutoclick *= 500;
}

function verifierBoutons() {
    document.getElementById("X2").disabled = score < prixMultiX2;
    document.getElementById("X3").disabled = score < prixMultiX3;
    document.getElementById("X4").disabled = score < prixMultiX4;
    document.getElementById("XBonus").disabled = score < prixBonus;
    document.getElementById("Autoclick").disabled = score < prixAutoclick;
}

setInterval(verifierBoutons, 100);

function secouerBouton() {
    let boutonMike = document.querySelector(".Mike_Button");
    boutonMike.classList.add("animate__animated", "animate__shakeX");
    
    setTimeout(() => {
        boutonMike.classList.remove("animate__animated", "animate__shakeX");
    }, 500);
}

function updateMultiplicateurDisplay() {
    multiplicateurElement.textContent = multiplicateur;
}

function updateScoreBySec() {
    if (xAutoActive) {
        let scoreParSeconde = (scoreParClic * multiplicateur * nombreAutoClics) * (1000 / intervalAutoClic);
        scoreBySecElement.textContent = scoreParSeconde.toFixed(); // Affiche le score par seconde
    } else {
        scoreBySecElement.textContent = "0"; 
    }
}

function ajouterMultiplicateur(valeur, prix) {
    if (score >= prix) {
        score -= prix;
        multiplicateur *= valeur;
        alert("Votre multiplicateur actuel est de :" + multiplicateur);
        alert("Le prix de ce multiplicateur est désormais de " + prix);
        updateMultiplicateurDisplay();
        updateScoreBySec(); // Mise à jour du score par seconde après l'achat d'un multiplicateur
    } else {
        alert("Vous n'avez pas assez de Mikes pour acheter ce multiplicateur !");
    }
}

function activerAutoClic() {
    autoClicActive = true;
    xAutoActive = true; // Activer XAuto
    nombreAutoClics++; // Augmenter le nombre d'auto-clics
    setInterval(function () {
        score += scoreParClic * multiplicateur;
        document.getElementById("points").textContent = score;
        console.log("Auto Clic: " + score);
    }, intervalAutoClic);
    updateScoreBySec(); // Mettre à jour le score par seconde une fois XAuto activé
}

setInterval(updateScoreBySec, 1000); // Mise à jour du score par seconde toutes les secondes

document.getElementById("Mike").addEventListener("click", function () {
    score += scoreParClic * multiplicateur;
    document.getElementById("points").textContent = score;
    secouerBouton();
    console.log(score);
});

document.getElementById("X2").addEventListener("click", function () {
    ajouterMultiplicateur(2, prixMultiX2);
    document.getElementById("points").textContent = score;
    augmenterPrix(2);
});

document.getElementById("X3").addEventListener("click", function () {
    ajouterMultiplicateur(3, prixMultiX3);
    document.getElementById("points").textContent = score;
    augmenterPrix(3);
});

document.getElementById("X4").addEventListener("click", function () {
    ajouterMultiplicateur(4, prixMultiX4);
    document.getElementById("points").textContent = score;
    augmenterPrix(4);
});

document.getElementById("XBonus").addEventListener("click", function () {
    if (score >= prixBonus) {
        alert("Bonus activé ! Vous bénéficiez d'un multiplicateur de 200% pendant 30 secondes.");
        score -= prixBonus;
        document.getElementById("points").textContent = score;
        let originalMultiplicateur = multiplicateur;
        multiplicateur *= 2;
        updateMultiplicateurDisplay();
        updateScoreBySec(); // Mise à jour du score par seconde après activation du bonus

        setTimeout(function () {
            multiplicateur = originalMultiplicateur;
            alert("Le bonus de 200% est terminé.");
            updateMultiplicateurDisplay();
            updateScoreBySec(); // Mise à jour du score par seconde après expiration du bonus
        }, 30000);

        augmenterPrix(200);
    } else {
        alert("Vous n'avez pas assez de Mikes pour acheter ce bonus !");
    }
});

document.getElementById("XAuto").addEventListener("click", function () {
    if (score >= prixAutoclick) {
        score -= prixAutoclick;
        document.getElementById("points").textContent = score;
        activerAutoClic();
        augmenterPrix(500);
        alert("Clic automatique activé ! Un clic sera ajouté toutes les " + (intervalAutoClic / 1000) + " secondes.");
    } else {
        alert("Vous n'avez pas assez de Mikes pour acheter le clic automatique !");
    }
});
