let multiplicateur = 1;
let scoreParClic = 1;
let intervalAutoClic = 1000; // Intervalle en millisecondes pour le clic automatique
let autoClicActive = false; // Variable pour vérifier si le clic automatique est activé
let xAutoActive = false; // Variable pour vérifier si le bouton XAuto est activé
let score = parseInt(document.getElementById("points").textContent);
let nombreAutoClics = 0; // Variable du nombre d'auto-clics appliqués par le joueur
const multiplicateurElement = document.getElementById("X");
const scoreBySecElement = document.getElementById("scoreBySec");

/*On définit au préalable les prix des différents multiplicateurs*/
let prixMultiX1 = 2;
/* On définit au préalable les prix des différents multiplicateurs */
let prixMultiX2 = 5;
let prixMultiX3 = 500;
let prixMultiX4 = 1000;
let prixBonus = 5000;
let prixAutoclick = 12000;

function augmenterPrix(valeur) {
    if (valeur === 2) prixMultiX1 *= 2;
    if (valeur === 2) prixMultiX2 *= 2;
    if (valeur === 3) prixMultiX3 *= 3;
    if (valeur === 4) prixMultiX4 *= 4;
    if (valeur === 200) prixBonus *= 200;
    if (valeur === 500) prixAutoclick *= 500;
    console.log("Prix mis à jour : ", {
        prixMultiX2,
        prixMultiX3,
        prixMultiX4,
        prixBonus,
        prixAutoclick
    });
}

/*Après chaque chaque achat, le prix affiché se mettre à jour pour va prendre la valeur du prix du multiplicateur renseignée dans f:augmenterPrix(valeur)*/
function mettreAJourPrix() {
    document.getElementById("prixMultiX2").textContent = prixMultiX2;
    document.getElementById("prixMultiX3").textContent = prixMultiX3;
    document.getElementById("prixMultiX4").textContent = prixMultiX4;
    document.getElementById("prixBonus").textContent = prixBonus;
    document.getElementById("prixAutoclick").textContent = prixAutoclick;
}


/*On vérifie toutes les 100ms si le score est suffisamment haut pour acheter ou pas un multiplicateur*/
/*S'il est trop bas, le bouton d'achat est désactivé*/

function verifierBoutons() {
    const boutonX2 = document.getElementById("X2");
    const boutonX3 = document.getElementById("X3");
    const boutonX4 = document.getElementById("X4");
    const boutonXBonus = document.getElementById("XBonus");
    const boutonXAuto = document.getElementById("XAuto");
    /*Chaque bouton est ici stocké dans une variable*/

    if (score < prixMultiX2) {
        boutonX2.disabled = true;
        boutonX2.classList.add("disabled-button");
    } else {
        boutonX2.disabled = false;
        boutonX2.classList.remove("disabled-button");
    }
    /*Ensuite, chaque bouton est inspecté : si le score est inférieur à son prix, alors le bouton est désactive. Sinon, il est rendu cliquable.*/

    if (score < prixMultiX3) {
        boutonX3.disabled = true;
        boutonX3.classList.add("disabled-button");
    } else {
        boutonX3.disabled = false;
        boutonX3.classList.remove("disabled-button");
    }

    if (score < prixMultiX4) {
        boutonX4.disabled = true;
        boutonX4.classList.add("disabled-button");
    } else {
        boutonX4.disabled = false;
        boutonX4.classList.remove("disabled-button");
    }

    if (score < prixBonus) {
        boutonXBonus.disabled = true;
        boutonXBonus.classList.add("disabled-button");
    } else {
        boutonXBonus.disabled = false;
        boutonXBonus.classList.remove("disabled-button");
    }

    if (score < prixAutoclick) {
        boutonXAuto.disabled = true;
        boutonXAuto.classList.add("disabled-button");
    } else {
        boutonXAuto.disabled = false;
        boutonXAuto.classList.remove("disabled-button");
    }
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

/*On ajoute ensuite les multiplicateurs, à condition que le score soit assez élevé pour les acheter*/
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
    console.log(score)
}
)
document.getElementById("X1").addEventListener("click", function () {
    let idel = document.getElementById("XI1");
    let elcounter=document.getElementById("XI1Cnt");
    if (getComputedStyle(idel).display==="none"){
        idel.style.display = "flex";
    }else{
        let counter = parseInt(elcounter.textContent, 10) || 0;
        counter++;
        elcounter.textContent = counter;
    }
    ajouterMultiplicateur(2, prixMultiX1);
    document.getElementById("points").textContent = score;
    augmenterPrix(2)
})
    console.log(score);

document.getElementById("X2").addEventListener("click", function () {
    let idel = document.getElementById("XI2");
    let elcounter=document.getElementById("XI2Cnt");
    if (getComputedStyle(idel).display==="none"){
        idel.style.display = "flex";
    }else{
        let counter = parseInt(elcounter.textContent, 10) || 0;
        counter++;
        elcounter.textContent = counter;
    }
    ajouterMultiplicateur(2, prixMultiX2);
    document.getElementById("points").textContent = score;
    augmenterPrix(2);
});
    augmenterPrix(2);
    mettreAJourPrix();

document.getElementById("X3").addEventListener("click", function () {
    let idel = document.getElementById("XI3");
    let elcounter=document.getElementById("XI3Cnt");
    if (getComputedStyle(idel).display==="none"){
        idel.style.display = "flex";
    }else{
        let counter = parseInt(elcounter.textContent, 10) || 0;
        counter++;
        elcounter.textContent = counter;
    };
    ajouterMultiplicateur(3, prixMultiX3);
    document.getElementById("points").textContent = score;
    augmenterPrix(3);
    mettreAJourPrix();
})
    augmenterPrix(3);

document.getElementById("X4").addEventListener("click", function () {
    let idel = document.getElementById("XI4");
    let elcounter=document.getElementById("XI4Cnt");
    if (getComputedStyle(idel).display==="none"){
        idel.style.display = "flex";
    }else{
        let counter = parseInt(elcounter.textContent, 10) || 0;
        counter++;
        elcounter.textContent = counter;
    }
    ajouterMultiplicateur(4, prixMultiX4);
    document.getElementById("points").textContent = score;
    augmenterPrix(4)
    mettreAJourPrix();
})

document.getElementById("XBonus").addEventListener("click", function () {
    if (score >= prixBonus) {
        alert("Bonus activé ! Vous bénéficiez d'un multiplicateur de 200% pendant 30 secondes.");
        score -= prixBonus;
        document.getElementById("points").textContent = score;
        let originalMultiplicateur = multiplicateur;
        multiplicateur *= 2;
        updateMultiplicateurDisplay();
        updateScoreBySec(); // Mise à jour du score par seconde après activation du bonus
            let idel = document.getElementById("XIBonus");
            let elcounter=document.getElementById("XIBonusCnt");
            if (getComputedStyle(idel).display==="none"){
                idel.style.display = "flex";
            }else{
                let counter = parseInt(elcounter.textContent, 10) || 0;
                counter++;
                if (counter<2) elcounter.textContent = counter;
            }
    
        setTimeout(function () {
            multiplicateur = originalMultiplicateur;
            alert("Le bonus de 200% est terminé.");
            idel.style.display = "none";
            updateMultiplicateurDisplay();
            updateScoreBySec(); // Mise à jour du score par seconde après expiration du bonus
        }, 30000);

        augmenterPrix(200);
        mettreAJourPrix()
        augmenterPrix(200);
    } else {
        alert("Vous n'avez pas assez de Mikes pour acheter ce bonus !");
    }
});

document.getElementById("XAuto").addEventListener("click", function () {
    if (score >= prixAutoclick) {
        score -= prixAutoclick;
        let idel = document.getElementById("XIAuto");
        let elcounter=document.getElementById("XIAutoCnt");
        if (getComputedStyle(idel).display==="none"){
            idel.style.display = "flex";
        }else{
            let counter = parseInt(elcounter.textContent, 10) || 0;
            counter++;
            elcounter.textContent = counter;
        }
        document.getElementById("points").textContent = score;
        activerAutoClic();
        augmenterPrix(500);
        alert("Clic automatique activé ! Un clic sera ajouté toutes les " + (intervalAutoClic / 1000) + " secondes.");
    } else {
        alert("Vous n'avez pas assez de Mikes pour acheter le clic automatique !");
    }
});
