//Recuperation des boutons et des paragraphes

const generate = document.querySelector('.generate');
const rand = document.querySelector('.rand');
const generateP = document.querySelector('.generateP');
const randP = document.querySelector('.randP');
const randPaire = document.querySelector('.chose .pp');
const randImPaire = document.querySelector('.chose .pi');
const textShow= document.querySelector('.end span');
const playtext= document.querySelector('.tour');
const playtextA= document.querySelector('.tour-a');
const pA= document.querySelector('.npa');
const pi= document.querySelector('.nia');
const va= document.querySelector('.va');

np = 0;
ni = 0;
tour = 0
ta = 0;
npa = 0;
nia = 0;


//Parametre du generateur de congruence lineaire (LCG (Linear Congruential Generator))

const a = Math.floor(Math.random()* 10)+1 ;//le multiplicateur
const c = 0;//l'increment
const m = 2 ** 31 - 1 // le module;

//Graine initiale
let seed = Math.floor(Math.random()* 1000)+1;


// Fonction pour generer un nombre pseudo-aleatoire

function lcg(seed) {
    return (a * seed + c) % m;
}

// Fonction pour generer le multiplicateur du jeu aviator

function gam(seed) {
    let randnumber = lcg(seed);

    //Normaliser le nombre aleatoire pour obtenir un multiplicateur entre 1.0 et 100.0
    let norm = 1.0 + ((randnumber % 100) / 100) * 99.0;
    return norm.toFixed(0); // Limiter par 3 decimale pour plus de lisibilite
}

// utilisation 

// for (let i = 1; i <= 10; i++) {
//     seed = lcg(seed); //Mettre a jour la graine pour la prochaine generation
//     console.log(`Multiplicateur ${i} : ${gam(seed)}`);
// }


generate.addEventListener('click', () => {
    seed = lcg(seed);
    let GMA = gam(seed);    
    generateP.textContent = GMA;
    ta++;
    playtextA.textContent = ta;

    if (GMA % 2 == 0 ) {
        npa++;
        pA.textContent = npa;
    } else {
        nia++;
        pi.textContent = nia
    }

    if (npa>nia) {
        va.textContent = 'paire';
    } else if(npa == nia) {
        va.textContent = '🌗';
    }else{
        va.textContent = 'impaire';
    }
});

rand.addEventListener('click', () => {
    n = Math.floor(Math.random()* 100)+1;

    if (n.toFixed(0) % 2 == 0 ) {
        np++;
        randPaire.textContent = np
    } else {
        ni++;
        randImPaire.textContent = ni
    }

    if (np>ni) {
        textShow.textContent = 'paire';
    }else if(np == ni ) {
        textShow.textContent = '🌗';
    }else{
        textShow.textContent = 'impaire';
    }
    randP.textContent = n.toFixed(0);

    tour++;
    playtext.textContent = tour;

});