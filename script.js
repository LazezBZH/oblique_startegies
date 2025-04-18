let stategies = [
  "À quoi penses-tu vraiment en ce moment?",
  "A-t-on besoin de trous?",
  "Abandonne les instruments normaux",
  "Abats ton jeu",
  "Accentue les défauts",
  "Accentue les différences",
  "Accentue les répétitions",
  "Accepte les conseils",
  "Analyse des amas",
  "Arrête-toi un moment",
  "Assemble certains éléments en un groupe et traite le groupe",
  "Auto-indulgence disciplinée",
  "C'est tout à fait possible (après tout)",
  "Cascades",
  "Ce n'est qu'une question de travail",
  "Change le rôle des instruments",
  "Comment l'aurais tu fait?",
  "Considère des transitions",
  "Considère plusieurs façons d'enchaîner",
  "Consulte d'autre sources-prometteuses-non  prometteuses",
  "Continue",
  "Coupe une connection vitale",
  "Courage! ",
  "Court-circuit (prends le chemin le plus court)",
  "Dans l'obscurité totale, ou dans une très grande chambre très doucement",
  "De quoi les sections sont-elles des sections?",
  "Décore, décore",
  "Découvre les recettes dont tu te sers et abandonne-les",
  "Définis un territoire comme 'sûr' et sers-t'en comme d'une ancre",
  "Demande aux gens de travailler à l'encontre de leur meilleur jugement",
  "Dès que la recherche progressera, quelque chose sera trouvé",
  "Détruis-rien-la chose la plus importante",
  "Diminue, continue",
  "Distorsion temporelle",
  "Donne de la valeur à un espace vierge en le plaçant dans un cadre exquis",
  "Donne libre cours à ton impulsion la plus mauvaise",
  "Écarte un axiome",
  "Échos fantômatiques-fantômes 'échotiques'",
  "Écoute la douce voix",
  "Éloigne-toi du désir",
  "Emploie une couleur inacceptable",
  "En arrière",
  "Enfants-qui parlent-qui chantent",
  "Enlève les éléments par ordre d'inimportance apparente",
  "Entre dans le domaine de l'impossible",
  "Entre rien et un tout petit peu plus",
  "Équilibre les principes de consistance et d'inconsistance",
  "Essaie d'énoncer le problème aussi clairement que possible",
  "Est-ce fini?",
  "Examine avec attention les détails les plus embarrassants et amplifie-les",
  "Existe-t-il des sections?",
  "Fais confiance à ton moi présent",
  "Fais quelque chose d'ennuyeux",
  "Fais un acte soudain, destructif et imprévisible, incorpore",
  "Fais une liste exhaustive de tout ce que tu pourrais faire et fais la dernière chose qui s'y trouve",
  "Faut-il changer les mots?",
  "Gradations infinitésimales",
  "Honore ton erreur comme une intention cachée",
  "Humanise quelque chose dénué d'erreur",
  "Il ne s'agit pas de construire un mur, mais de faire une brique",
  "Imagine ce que tu fais comme une série d'événements sans rapport les uns avec les autres",
  "Imagine une chenille en mouvement",
  "Intentions-noblesse?- humilité?- crédibilité?",
  "Jouissance idiote ",
  "L'eau",
  "L'intonation est-elle correcte? ",
  "La bande est la musique",
  "La chose la plus importante est la chose la plus aisément oubliée",
  "La répétition est une forme de changement",
  "Le principe d'inconsistance",
  "Les bords-fais-en lentement le tour",
  "Machinerie(organique)",
  "Manque-t-il quelque chose?",
  "'Mécanicalise' quelque chose d'idiosyncratique",
  "Mets de l'ordre",
  "Mets-le la tête en bas",
  "N'accentue pas une chose plus qu'une autre",
  "N'aie pas peur d'afficher tes talents",
  "Ne brise pas le silence",
  "Ne change rien et continue avec une consistance immaculée",
  "Ne fais rien le plus longtemps possible",
  "Ne sois pas effrayé par les choses parce qu'elles sont faciles à faire",
  "Ne sois pas effrayé par les clichés",
  "Pense à la radio",
  "Perdu en territoire inutile",
  "Permets-toi un seul soulagement",
  "Plus petit dénominateur commun",
  "Ponts - à construire - à couper",
  "Que ferait ton meilleur ami?",
  "Que ne ferais - tu pas?",
  "Quelle est la réalité de la situation?",
  "Quelles erreurs as-tu commises la dernière fois?",
  "Quelqu'un en voudrait-il?",
  "Questionne l'approche héroique",
  "Questionne ton corps",
  "Regarde l'ordre dans lequel tu fais les choses",
  "Remplis chaque espace",
  "Resiste(en apparence) au changement",
  "Respire plus profondément",
  "Revalorisation(une sensation agréable)",
  "Reviens sur tes pas",
  "Rien qu'une partie, pas le tout",
  "Sois extravagant(e)",
  "Sois moins critique plus souvent",
  "Sois sale",
  "Sors. Ferme la porte",
  "Soustraction simple",
  "Souviens-toi de ces douces soirées",
  "Supprime les ambiguïtés et remplace-les par des spécificités",
  "Supprime les spécificités et remplace-les par des ambiguïtés",
  "Toujours des premiers pas ",
  "Travaille à un rythme différent",
  "Tu es un ingénieur",
  "Tu n'as pas à être honteux d'utiliser tes propres idées",
  "Tu ne peux faire qu'un point à la fois",
  "Un seul élément de chaque espèce",
  "Une ligne a deux côtés",
  "Utilise des filtres",
  "Utilise des gens 'non-qualifiés'",
  "Utilise moins de notes",
  "Utilise une vielle idée",
  "Va jusqu'à un extrême, reviens vers plus de confort",
  "Vers l'insignifiant ",
];

// to keep the same sentence when refresh in the same day
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let dateNow = [day, month, year];
dateNow = dateNow.join("/");

let randomBtn = document.getElementById("random");
let root = document.getElementById("root");
let textIndex = "";
let randomNums = JSON.parse(localStorage.getItem("done")) || [];

randomBtn.addEventListener("click", getTheOne);
function init() {
  if (localStorage.getItem("date") && localStorage.getItem("date") != dateNow) {
    // new day
    localStorage.setItem("date", dateNow);
    getTheOne();
  } else if (!localStorage.getItem("date")) {
    // first co
    getTheOne();
    localStorage.setItem("date", dateNow);
  } else {
    // same dy
    let last = randomNums[randomNums.length - 1];
    root.innerHTML = stategies[last];
  }
}
init();

function getTheOne() {
  root.innerHTML = `<img src="./assets/loader.svg" alt="loader"></img>`;
  setTimeout(getOne, 300);
}
function getOne() {
  const randomIndex = Math.floor(Math.random() * stategies.length);
  if (randomNums.length == stategies.length) {
    randomNums = [];
    localStorage.setItem("done", randomNums);
  }
  if (randomNums.includes(randomIndex)) {
    getOne();
  } else {
    randomNums.push(randomIndex);
    let used = JSON.stringify(randomNums);
    localStorage.setItem("done", used);
    textIndex = randomIndex;
    writeText();
  }
}
function writeText() {
  root.innerHTML = stategies[textIndex];
}

// explanations
const show = document.querySelector(".show");
const hide = document.querySelectorAll(".hide");
const body = document.querySelector(".body");

show.addEventListener("click", showExplain);

hide.forEach(function (btn) {
  btn.addEventListener("click", hideExplain);
});

function showExplain() {
  body.style.display = "flex";
}
function hideExplain() {
  body.style.display = "none";
}
