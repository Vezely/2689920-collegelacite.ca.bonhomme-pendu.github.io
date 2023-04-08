const motEl=document.getElementById('mot');
const score=document.getElementById('score');
const mauvaisesLettres=document.getElementById('mauvaises-lettres');
const strMauvaiseLettres=document.getElementById('mauvaisesL');
const rejouerBtn=document.getElementById('play-buttom');
const popup=document.getElementById('popup-contenant');
const notification=document.getElementById('notification-contenant');
const messageFinal=document.getElementById('message-final');
const btnActualiserr=document.getElementById("actualiser");
const btnRedemarrer=document.getElementById("redemarrer");
const figurePartie=document.querySelectorAll('.figure-partie');
const visagePendu=document.querySelectorAll('.figure-souriant');
const figure=document.querySelectorAll('.figure');
const btnAide=document.getElementById('btnAide');
const aide=document.getElementById('aide');
const nombreAide=document.getElementById('nbAide');
const emojiSucces=document.getElementById('emoji1');
const emojiEchec=document.getElementById('emoji2');

let tableauDeMots = ["ANGLE","ARMOIRE","BANC","BUREAU","CABINET","CARREAU","CHAISE","CLASSE","CLEF","COIN","COULOIR","DOSSIER","EAU","ECOLE","ENTRER","ESCALIER","ETAGERE","EXTERIEUR","FENETRE","INTERIEUR","LAVABO","LIT","MARCHE","MATELAS","MATERNELLE","MEUBLE","MOUSSE","MUR","PELUCHE","PLACARD","PLAFOND","PORTE","POUBELLE","RADIATEUR","RAMPE","RIDEAU","ROBINET","SALLE","SALON","SERRURE","SERVIETTE","SIEGE","SIESTE","SILENCE","SOL","SOMMEIL","SONNETTE","SORTIE","TABLE","TABLEAU","TABOURET","TAPIS","TIROIR","TOILETTE","VITRE","ALLER","AMENER","APPORTER","APPUYER","ATTENDRE","BAILLER","COUCHER","DORMIR","ECLAIRER","EMMENER","EMPORTER","ENTRER","FERMER","FRAPPER","INSTALLER","LEVER","OUVRIR","PRESSER","RECHAUFFER","RESTER","SONNER","SORTIR","VENIR","ABSENT","ASSIS","BAS","HAUT","PRESENT","GAUCHE","DROITE","DEBOUT","DEDANS","DEHORS","FACE","LOIN","PRES","TARD","TOT","APRES","AVANT","CONTRE","DANS","DE","DERRIERE","DEVANT","DU","SOUS","SUR","CRAYON","STYLO","FEUTRE","MINE","GOMME","DESSIN","COLORIAGE","RAYURE","PEINTURE","PINCEAU","COULEUR","CRAIE","PAPIER","FEUILLE","CAHIER","CARNET","CARTON","CISEAUX","DECOUPAGE","PLIAGE","PLI","COLLE","AFFAIRE","BOITE","CASIER","CAISSE","TROUSSE","CARTABLE","JEU","JOUET","PION","DOMINO","PUZZLE","CUBE","PERLE","CHOSE","FORME","CARRE","ROND","PATE","MODELER","TAMPON","LIVRE","HISTOIRE","BIBLIOTHEQUE","IMAGE","ALBUM","TITRE","CONTE","DICTIONNAIRE","MAGAZINE","CATALOGUE","PAGE","LIGNE","MOT","ENVELOPPE","ETIQUETTE","CARTE","APPEL","AFFICHE","ALPHABET","APPAREIL","CAMESCOPE","CASSETTE","CHAINE","CHANSON","CHIFFRE","CONTRAIRE","DIFFERENCE","DOIGT","ECRAN","ECRITURE","FILM","FOIS","FOI","IDEE","INSTRUMENT","INTRUS","LETTRE","LISTE","MAGNETOSCOPE","MAIN","MICRO","MODELE","MUSIQUE","NOM","NOMBRE","ORCHESTRE","ORDINATEUR","PHOTO","POINT","POSTER","POUCE","PRENOM","QUESTION","RADIO","SENS","TAMBOUR","TELECOMMANDE","TELEPHONE","TELEVISION","TRAIT","TROMPETTE","VOIX","XYLOPHONE","ZERO","CHANTER","CHERCHER","CHOISIR","CHUCHOTER","COLLER","COLORIER","COMMENCER","COMPARER","COMPTER","CONSTRUIRE","CONTINUER","COPIER","COUPER","DECHIRER","DECOLLER","DECORER","DECOUPER","DEMOLIR","DESSINER","DIRE","DISCUTER","ECOUTER","ECRIRE","EFFACER","ENTENDRE","ENTOURER","ENVOYER","FAIRE","FINIR","FOUILLER","GOUTER","IMITER","LAISSER","LIRE","METTRE","MONTRER","OUVRIR","PARLER","PEINDRE","PLIER","POSER","PRENDRE","PREPARER","RANGER","RECITER","RECOMMENCER","REGARDER","REMETTRE","REPETER","REPONDRE","SENTIR","SOULIGNER","TAILLER","TENIR","TERMINER","TOUCHER","TRAVAILLER","TRIER","AMI","ATTENTION","CAMARADE","COLERE","COPAIN","COQUIN","DAME","DIRECTEUR","DIRECTRICE","DROIT","EFFORT","ELEVE","ENFANT","FATIGUE","FAUTE","FILLE","GARCON","GARDIEN","MADAME","MAITRE","MAITRESSE","MENSONGE","ORDRE","PERSONNE","RETARD","JOUEUR","SOURIRE","TRAVAIL","AIDER","DEFENDRE","DESOBEIR","DISTRIBUER","ECHANGER","EXPLIQUER","GRONDER","OBEIR","OBLIGER","PARTAGER","PRETER","PRIVER","PROMETTRE","PROGRES","PROGRESSER","PUNIR","QUITTER","RACONTER","EXPLIQUER","REFUSER","SEPARER","BLOND","BRUN","CALME","CURIEUX","DIFFERENT","DOUX","ENERVER","GENTIL","GRAND","HANDICAPE","INSEPARABLE","JALOUX","MOYEN","MUET","NOIR","NOUVEAU","PETIT","POLI","PROPRE","ROUX","SAGE","SALE","SERIEUX","SOURD","TRANQUILLE","ARROSOIR","ASSIETTE","BALLE","BATEAU","BOITE","BOUCHON","BOUTEILLE","BULLES","CANARD","CASSEROLE","CUILLERE","CUVETTE","DOUCHE","ENTONNOIR","GOUTTES","LITRE","MOULIN","PLUIE","POISSON","PONT","POT","ROUE","SAC","PLASTIQUE","SALADIER","SEAU","TABLIER","TASSE","TROUS","VERRE","AGITER","AMUSER","ARROSER","ATTRAPER","AVANCER","BAIGNER","BARBOTER","BOUCHER","BOUGER","DEBORDER","DOUCHER","ECLABOUSSER","ESSUYER","ENVOYER","COULER","PARTIR","FLOTTER","GONFLER","INONDER","JOUER","LAVER","MELANGER","MOUILLER","NAGER","PLEUVOIR","PLONGER","POUSSER","POUVOIR","PRESSER","RECEVOIR","REMPLIR","RENVERSER","SECHER","SERRER","SOUFFLER","TIRER","TOURNER","TREMPER","VERSER","VIDER","VOULOIR","AMUSANT","CHAUD","FROID","HUMIDE","INTERESSANT","MOUILLE","SEC","TRANSPARENT","MOITIE","AUTANT","BEAUCOUP","ENCORE","MOINS","PEU","PLUS","TROP","ANORAK","ARC","BAGAGE","BAGUETTE","BARBE","BONNET","BOTTE","BOUTON","BRETELLE","CAGOULE","CASQUE","CASQUETTE","CEINTURE","CHAPEAU","CHAUSSETTE","CHAUSSON","CHAUSSURE","CHEMISE","CIGARETTE","COL","COLLANT","COURONNE","CRAVATE","CULOTTE","ECHARPE","EPEE","FEE","FLECHE","FUSIL","GANT","HABIT","JEAN","JUPE","LACET","LAINE","LINGE","LUNETTES","MAGICIEN","MAGIE","MAILLOT","MANCHE","MANTEAU","MOUCHOIR","MOUFLE","NOEUD","PAIRE","PANTALON","PIED","POCHE","PRINCE","PYJAMA","REINE","ROBE","ROI","RUBAN","SEMELLE","SOLDAT","SOCIERE","TACHE","TAILLE","TALON","TISSU","TRICOT","UNIFORME","VALISE","VESTE","VETEMENT","CHANGER","CHAUSSER","COUVRIR","DEGUISER","DESHABILLER","ENLEVER","HABILLER","LACER","PORTER","RESSEMBLER","CLAIR","COURT","ETROIT","FONCE","JOLI","LARGE","LONG","MULTICOLORE","NU","USE","BIEN","MAL","MIEUX","PRESQUE","AIGUILLE","AMPOULE","AVION","BOIS","BOUT","BRICOLAGE","BRUIT","CABANE","CARTON","CLOU","COLLE","CROCHET","ELASTIQUE","FICELLE","FIL","MARIONNETTE","MARTEAU","METAL","METRE","MORCEAU","MOTEUR","OBJET","OUTIL","PEINTURE","PINCEAU","PLANCHE","PLATRE","SCIE","TOURNEVIS","VIS","VOITURE","ARRACHER","ATTACHER","CASSER","COUDRE","DETRUIRE","ECORCHER","ENFILER","ENFONCER","FABRIQUER","MESURER","PERCER","PINCER","REPARER","REUSSIR","SERVIR","TAPER","TROUER","TROUVER","ADROIT","DIFFICILE","DUR","FACILE","LISSE","MALADROIT","POINTU","TORDU","ACCIDENT","AEROPORT","CAMION","ENGIN","FEU","FREIN","FUSEE","GARAGE","GARE","GRUE","HELICOPTERE","MOTO","PANNE","PARKING","PILOTE","PNEU","QUAI","TRAIN","VIRAGE","VITESSE","VOYAGE","WAGON","ZIGZAG","ARRETER","ATTERRIR","BOUDER","CHARGER","CONDUIRE","DEMARRER","DISPARAITRE","DONNER","ECRASER","ENVOLER","GARDER","GARER","MANQUER","PARTIR","POSER","RECULER","ROULER","TENDRE","TRANSPORTER","VOLER","ABIME","ANCIEN","BLANC","BLEU","CASSE","CINQ","DERNIER","DEUX","DEUXIEME","DIX","GRIS","GROS","HUIT","JAUNE","MEME","NEUF","PAREIL","PREMIER","QUATRE","ROUGE","SEPT","SEUL","SIX","SOLIDE","TROIS","TROISIEME","UN","VERT","DESSUS","AUTOUR","VITE","VERS","ACROBATE","ARRET","ARRIERE","BARRE","BARREAU","BORD","BRAS","CERCEAU","CHAISE","CHEVILLE","CHUTE","COEUR","CORDE","CORPS","COTE","COU","COUDE","CUISSE","DANGER","DOIGTS","DOS","ECHASSES","ECHELLE","EPAULE","EQUIPE","ESCABEAU","FESSE","FILET","FOND","GENOU","GYMNASTIQUE","HANCHE","JAMBE","JEU","MAINS","MILIEU","MONTAGNE","MUR","ESCALADE","MUSCLE","NUMERO","ONGLE","PARCOURS","PAS","PASSERELLE","PENTE","PEUR","PIED","PLONGEOIR","POIGNET","POING","PONT","SIGNE","SINGE","POUTRE","EQUILIBRE","PRISE","RIVIERE","CROCODILE","ROULADE","PIROUETTE","SAUT","SERPENT","SPORT","SUIVANT","TETE","TOBOGGAN","TOUR","TRAMPOLINE","TUNNEL","VENTRE","ACCROCHER","APPUYER","ARRIVER","BAISSER","BALANCER","BONDIR","BOUSCULER","COGNER","COURIR","DANSER","DEPASSER","DESCENDRE","ECARTER","ESCALADER","GAGNER","GENER","GLISSER","GRIMPER","MARCHER","PATTES","DEBOUT","MONTER","MONTRER","PENCHER","PERCHER","PERDRE","RAMPER","RATER","REMPLACER","RESPIRER","RETOURNER","REVENIR","SAUTER","SOULEVER","SUIVRE","TOMBER","TRANSPIRER","TRAVERSER","DANGEUREUX","EPAIS","FORT","GROUPE","IMMOBILE","ROND","SERRE","SOUPLE","ENSEMBLE","ICI","JAMAIS","TOUJOURS","SOUVENT","BAGARRE","BALANCOIRE","BALLON","BANDE","BICYCLETTE","BILLE","CAGE","ECUREUIL","CERF","VOLANT","CHATEAU","COUP","COUR","COURSE","ECHASSE","FLAQUE","EAU","PAIX","PARDON","PARTIE","PEDALE","PELLE","POMPE","PREAU","RAQUETTE","RAYON","RECREATION","SABLE","SIFFLET","SIGNE","TAS","TRICYCLE","TUYAU","VELO","FILE","RANG","BAGARRER","BATTRE","CACHER","CRACHER","CREUSER","CRIER","DEGONFLER","DISPUTE","EMPECHER","GALOPER","HURLER","JONGLER","LANCER","PEDALER","PLAINDRE","PLEURER","POURSUIVRE","PROTEGER","SAIGNER","SALIR","SIFFLER","SURVEILLER","TRAINER","TROUVER","FOU","MECHANT"];
//const mots=['application','programmation','interface','composante','ordinateur','BUREAU ','ordinateur','CARREAU ','CHAISE ','CLASSE ','COULOIR ','FENETRE '];

// selectionner un mot pour jouer
let motSelectionne=  tableauDeMots[Math.floor(Math.random()*tableauDeMots.length)]; 
motSelectionne=motSelectionne.toLowerCase().trim();
console.log(motSelectionne);
const bonneLettreArr=[''];
const mauvaisesLettresArr=[];
let y=5;
let nbAide=0;

let x=0;
Score(x);
NombreAide(y);

function AfficherMot(){
    aide.style.display='none';
    motEl.innerHTML = `
        ${motSelectionne
            .split('') 
            .map(
                lettre => `
                    <span class="lettre">
                        ${bonneLettreArr.includes(lettre) ? lettre: ''}
                    </span>
                `
            )
            .join('')
        }

    `;
    // Quand on gagne
    const motInterne=motEl.innerText.replace(/\n/g, '');
   
    if (motInterne===motSelectionne) {
        if (mauvaisesLettresArr.length===0 ) {
            Score(x+5);
            alert('Félicitation vous avez gagner 5 points')
        }
        const qualificatif=['Super','Impressionnant','Incroyable','Formidable','Brillant','Extraodinaire','Génial','un génie'];
        let qualifier=qualificatif[Math.floor(Math.random()*qualificatif.length)];
        messageFinal.innerText= 'Bravo!\nTu es '+qualifier;
        popup.style.display='flex';
        aide.style.display='none';
        AfficherLeBonhommeLibre();
        SupprimerBonhommePendu();
        SupprimerVisage();
    }
}

function AfficherLeBonhommeLibre(){
    figure.forEach((partie, index)=>{
        const erreur=12;
        if (index <=erreur) {
            partie.style.display='flex'; 
            partie.classList.add('lettreAfficher')          
        }else{
            partie.style.display='none';
        }
    })
}
function SupprimerBonhommeLibre(){
    figure.forEach((partie, index)=>{
        const erreur=11;
        if (index <=erreur) {
            partie.style.display='none';            
        }else{
            partie.style.display='flex';
        }
    })
}
function SupprimerBonhommePendu(){
    figurePartie.forEach((partie, index)=>{
        const erreur=20;
        if (index < erreur) {
            partie.classList.add('lettreAfficher')
            partie.style.display='none';            
        }else{
            partie.style.display='block';
        }
    })
}
function AfficherEmojiSucces() {
    emojiSucces.classList.add('affiche1');
    setTimeout(()=>{
        emojiSucces.classList.remove('affiche1')
    }, 1000)
}
function AfficherEmojiEchec() {
    emojiEchec.classList.add('affiche2');
    setTimeout(()=>{
        emojiEchec.classList.remove('affiche2')
    }, 1000)
}
//Afficher la notification
function AfficherNotification() {
    notification.classList.add('afficher');
    setTimeout(()=>{
        notification.classList.remove('afficher')
    }, 2000)
}
function  Score(x) {
    
    score.innerHTML=`
        ${`<span class="ScoresP"> ${x+" Points"}</span>`}
    `
}

function  NombreAide(y) {
    nombreAide.innerHTML=`
        ${`<span class="Scores"> ${y}</span>`}
    `
}
function SupprimerVisage() {
    visagePendu.forEach((partie, index)=>{
        const erreur=4;
        if (index < erreur) {
            partie.style.display='none';            
        }else{
            partie.style.display='flex';
        }
    })
}
function AfficherVisage() {
    visagePendu.forEach((partie, index)=>{
        const erreur=4;
        if (index < erreur) {
            partie.style.display='flex';            
        }else{
            partie.style.display='none';
        }
    })
}
//Mauvaise lettres
function UpdateMauvaisesLettresEl() {
    strMauvaiseLettres.style.display='flex';
    mauvaisesLettres.innerHTML = `
        ${mauvaisesLettresArr.map (lettre => `<span> ${lettre.trim()}</span>
        `)}
    `
    // Afficher le bonhomme
    AfficherVisage();
    figurePartie.forEach((partie, index)=>{

        const erreur=mauvaisesLettresArr.length;
        if (index < erreur) {
            partie.classList.add('lettreAfficherBonhommeP') 
            partie.style.display='block';            
        }else{
            partie.style.display='none';
        }
    })
    SupprimerBonhommeLibre();
    // Verifier si on a perdu
    x--;
    Score(x);
    
    if (mauvaisesLettresArr.length===figurePartie.length) {
        messageFinal.innerText='Tu as perdu! le mot était : '+motSelectionne;
        popup.style.transitionDuration='linear';
        popup.style.display='flex';
        strMauvaiseLettres.style.display='none';
        Score(x);
    }
}
// Event listeners

window.addEventListener('keydown', e =>{
        const lettre=e.key.toLowerCase();
        //console.log(lettre);
    if (e.keyCode>=65 && e.keyCode<=90) {

        if (motSelectionne.includes(lettre)) {
            if (!bonneLettreArr.includes(lettre)) {
                bonneLettreArr.push(lettre);
                AfficherEmojiSucces();
                x++;
                Score(x);
                AfficherMot();
            }else{
                AfficherNotification();
            }
        }else{
            if (!mauvaisesLettresArr.includes(lettre)) {
                mauvaisesLettresArr.push(lettre);  
                AfficherMot();
                UpdateMauvaisesLettresEl();
                AfficherEmojiEchec();
            }else{
                AfficherNotification();
            }
        }
    }
});

function Rejouer() {
    bonneLettreArr.splice(0);
    mauvaisesLettresArr.splice(0);
    AfficherMot();
    UpdateMauvaisesLettresEl();
    strMauvaiseLettres.style.display='none';
    SupprimerVisage();
    AfficherLeBonhommeLibre();
    popup.style.display='none';

}


btnAide.addEventListener('click',()=>{
    nbAide++;
    y--;
    if (y<0) {
        y=0;
    }
    
    console.log(nbAide);
    for (let i = 0; i < motSelectionne.length; i++) {
        if (!bonneLettreArr.includes(motSelectionne.substring(i,i+1)) && nbAide<=5 ) {
            aide.style.display='flex';
            aide.innerHTML=`
                ${`<span class=espace id='espace'> ${motSelectionne.substring(i,i+1).toUpperCase()}</span>`}
            `
            NombreAide(y);
        }
        
    }

})

btnActualiserr.addEventListener('click',()=>{
    if (mauvaisesLettresArr.length<1) {
    console.log(motSelectionne);
    aide.style.display='none';
    bonneLettreArr.splice(0);
    mauvaisesLettresArr.splice(0);
    motSelectionne=tableauDeMots[Math.floor(Math.random()*tableauDeMots.length)];
    motSelectionne=motSelectionne.toLowerCase().trim();
    AfficherMot();
    SupprimerVisage();
    SupprimerBonhommePendu();
    AfficherLeBonhommeLibre();
    strMauvaiseLettres.style.display='none';
    }

    
})
btnRedemarrer.addEventListener('click',()=>{
    aide.style.display='none';
    console.log(motSelectionne);
    bonneLettreArr.splice(0);
    mauvaisesLettresArr.splice(0);
    motSelectionne=tableauDeMots[Math.floor(Math.random()*tableauDeMots.length)];
    motSelectionne=motSelectionne.toLowerCase().trim();
    AfficherMot();
    SupprimerVisage();
    SupprimerBonhommePendu();
    AfficherLeBonhommeLibre();
    strMauvaiseLettres.style.display='none';
    nbAide=0;
    x=0;
    Score(x);
    y=5;
    NombreAide(y);
    console.log(motSelectionne);
})
// rejouer
rejouerBtn.addEventListener('click',()=>{
    //Vider les tableau
    bonneLettreArr.splice(0);
    mauvaisesLettresArr.splice(0);
    aide.style.display='none';
    motSelectionne=tableauDeMots[Math.floor(Math.random()*tableauDeMots.length)];
    motSelectionne=motSelectionne.toLowerCase().trim();
    AfficherMot();
    strMauvaiseLettres.style.display='none';
    AfficherLeBonhommeLibre();
    SupprimerVisage();
    SupprimerBonhommePendu();
    popup.style.display='none';
    console.log(motSelectionne);

})
AfficherMot();
AfficherLeBonhommeLibre();
SupprimerVisage();