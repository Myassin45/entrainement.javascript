var message = document.getElementById('message');
var button = document.getElementById('button');
var compteurPrime;

function afficherResultat(){
    var accident = document.getElementById('accident').value;
    if(accident >=3){
        message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>'
    }
    else
    {
        compteurPrime = 0;
        var ageConducteur = document.getElementById('age-conducteur').value;
        var permis = document.getElementById('permis').value;
        var fidelite = document.getElementById('fidelite').value;

        if(ageConducteur > 25){
            compteurPrime = compteurPrime + 1;
        }
        if(permis > 2){
            compteurPrime = compteurPrime + 1;
        }
        if(fidelite > 1){
            compteurPrime = compteurPrime + 1;
        }
        compteurPrime = compteurPrime - accident;
        console.log(compteurPrime);

        switch (compteurPrime) {
            case 3: message.innerHTML = '<div class="alert alert-primary" role="alert">Bleu</div>'
            break;
            case 2: message.innerHTML = '<div class="alert alert-success" role="alert">Vert</div>'
            break;
            case 1: message.innerHTML = '<div class="alert alert-warning" role="alert">Orange</div>'
            break;
            case 0: message.innerHTML = '<div class="alert alert-danger" role="alert">Rouge</div>'
            break;
            case -1: message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>'
            break;
            default:
        }
    }
}

button.addEventListener("click", afficherResultat, false);