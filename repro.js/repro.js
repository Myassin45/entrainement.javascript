var nbdephotocopies;
var tarif;
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

function effectuerCalcul(){

    nbdephotocopies = document.getElementById('valeur-saisie').value;

    if(nbdephotocopies <= 10){
        prixtotal = nbdephotocopies * 0.1;
    }else if(nbdephotocopies <= 30){
        prixtotal = nbdephotocopies * 0.1 + (nbdephotocopies-10) * 0.09;
    }else{
        prixtotal = nbdephotocopies * 0.1 + 20 * 0.09 + (nbdephotocopies-30) * 0.08;
    }

    message.innerHTML = "le prix total est de : " + prixtotal + "euros" ;
}
bouton.addEventListener('click', effectuerCalcul, false)

