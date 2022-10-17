var mdpSaisi;
var regexMaj = new RegExp("[A-Z]");
var regexMin = new RegExp("[a-z]");
var regexChiffre = new RegExp("[0-9]");
var regexSpecial = new RegExp("\\W");
var compteurForce;
var message = document.getElementById('message');


function verifierProposition(){

    compteurForce = 0;
    mdpSaisi = document.getElementById('mdp').value;

    if(regexMaj.test(mdpSaisi)){
        compteurForce = compteurForce +1;
    }
    if(regexMin.test(mdpSaisi)){
        compteurForce ++;
    }
    if(regexChiffre.test(mdpSaisi)){
        compteurForce = compteurForce + 1;
    }
    if(regexSpecial.test(mdpSaisi)){
        compteurForce = compteurForce + 1;
    }
    if(mdpSaisi.lenght < 8){
        compteurForce = compteurForce - 1;
    }

    switch (compteurForce){
        case 4:
            message.innerHTML = '<span class="text-success">Très sécurisé !</span>';
        break;
        case 3:
            message.innerHTML = '<span class="text-success">Sécurisé !</span>';
        break;
        case 2:
            message.innerHTML = '<span class="text-warning">Moyen !</span>';
        break;
        case 1:
            message.innerHTML = '<span class="text-danger">Dangereux !</span>';
        break;
        case 0:
            message.innerHTML = '<span class="text-danger">Dangereux !</span>';
        break;
        default:
            message.innerHTML = '';
        }
}

document.getElementById('mdp').addEventListener('keyup', verifierProposition, false);