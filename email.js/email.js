var emailSaisi;
var emailSaisiCoupe;
var positionArobase;
var message = document.getElementById('message');

function verifierProposition(){


    emailSaisi = document.getElementById('email').value;

    if(emailSaisi.includes('@') && emailSaisi.includes('.')){
        positionArobase = emailSaisi.indexOf('@');
        emailSaisiCoupe = emailSaisi.substring(positionArobase);
        if(emailSaisiCoupe.includes('.')){
            message.innerHTML = '<span class = "text-success">Adresse emai valide !<span>';
        }else{
            message.innerHTML = '<span class="text-danger">Adresse email invalide !<span>';
        }
    }else{
        message.innerHTML = '<span class="text-danger">Adresse email invalide !<span>';
    }
}
document.getElementById('email').addEventListener('keydown', verifierProposition,false);