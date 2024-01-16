//console.log('connecté'); 

// je selectionne et stocke mes éléments:
let titre = document.getElementById('titre');
let score = document.getElementById('score');
const btnRouge = document.getElementById('btnRouge');
//console.log(btnRouge, 'bouton rouge');
const btnBleu = document.getElementById('btnBleu');
//console.log(btnBleu, 'bouton bleu');

//Initier les variables :
let compteur = 0;
//console.log(compteur, "compteur au démarrage");

//synthétiser les répétitions en fonctions :
function add(){
    compteur = compteur+1;
    //console.log(compteur, "compteur après incrémentation");
    //on ajoute du texte interractif sur la page :
    score.innerText = "Bravo ! Tu as fait " + compteur + " points !";
}

//déclarer le chronomètre :
setTimeout(function() {
    // action à réaliser à la fin du délai :
    //console.log('fin du chrono !');
    btnBleu.remove();
    btnRouge.remove();
}, 30000)

// je soumet l'élément à une action
btnRouge.addEventListener('click', function(){
    //console.log('cercle rouge cliqué');
  //apeller la fonction:
  add();
})

btnBleu.addEventListener('click', function(){
    //console.log('cercle bleu cliqué');
      //apeller la fonction:
  add();
})



