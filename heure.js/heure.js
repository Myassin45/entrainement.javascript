var heure;
var minute;
var seconde;
var valeurModifie;
var bouton=document.getElementById("bouton");
var message=document.getElementById("message");

function afficherHeure(){
    heure=parseInt(document.getElementById('valeur-heure').value);
    minute=parseInt(document.getElementById('valeur-minute').value);
    seconde=parseInt(document.getElementById('valeur-seconde').value);

    seconde=seconde+1
    if(seconde==60){
        seconde="00";
        minute=minute+1
    }
    if(minute==60){
        minute="00"
        heure=heure+1;
    }
    if(heure==24){
        heure="00";
    }

    valeurModifie=heure+'h'+minute+'min'+seconde+'sec';
    message.innerHTML=valeurModifie;
}


