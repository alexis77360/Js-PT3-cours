const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');



let pseudo, email, password, confirmPassword;
const progressBar = document.getElementById('progress-bar');

const form = document.querySelector('form');


const errorDisplay = (tag, message, valid) => {

    //? Permet de récupérer le container de l'input grace a son tag
    const container = document.querySelector('.' + tag + '-container');
    const span = document.querySelector('.' + tag + '-container > span');

    //? Si faux on ajoute la class error et on affiche le message
    if (!valid) {
        container.classList.add('error');
        span.textContent = message;
    }
    else {
        container.classList.remove('error');
        span.textContent = message;
    }

}



const pseudoChecker = (value) => {


    //? si la valeur est vide ou si la valeur est inférieur à 3 ou supérieur à 20
    if(value.length > 0 && (value.length < 3 || value.length > 20)){
        errorDisplay('pseudo', 'Le pseudo doit contenir entre 3 et 20 caractères');
        pseudo = null;
        
    } 
    //? Sinon si la valeur contient caractères spéciaux
    
    else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
        errorDisplay('pseudo', 'Le pseudo ne doit pas contenir de caractères spéciaux');
        pseudo = null;
        
    }

    else{
        errorDisplay('pseudo', '', true);
        pseudo = value;
    }




};


const emailChecker = (value) => {

    if(!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)){
        errorDisplay('email', 'L\'email n\'est pas valide');
        email = null;
    }
    else{
        errorDisplay('email', '', true);
        email = value;
    }

};
const passwordChecker = (value) => {

    //! De base on retire toutes les classes du progress bar
    progressBar.classList = "";

    //? Si le mot de passe ne contient pas au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial

    if (
        !value.match(
          /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
        )
        
      ){

        errorDisplay('password', 'Minimum 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial');
        progressBar.classList.add("progressRed")
        password = null;

    }
    else if(value.length < 12) {
        progressBar.classList.add("progressBlue")
        errorDisplay('password', '', true);
        password = value;

    }
    else{
        progressBar.classList.add("progressGreen")
        errorDisplay('password', '', true);
        password = value;
    }

    //! Pensez a rejouer le confirmChecker a chaque fois que le password change

   if (confirmPassword) confirmChecker(confirmPassword);
   


};
const confirmChecker = (value) => {

    if(value !== password){
        errorDisplay('confirm', 'Les mots de passe ne correspondent pas ! ');
        confirmPassword = false;
    }
    else{
        errorDisplay('confirm', '', true);
        confirmPassword = true;
    }

};


//! foreach pour créer un event sur chaque input
inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        switch(e.target.id){
            case 'pseudo':
                pseudoChecker(e.target.value);
                break;
            case 'email':
                emailChecker(e.target.value);
                break;
            case 'password':
                passwordChecker(e.target.value);
                break;
            case 'confirm':
                confirmChecker(e.target.value);
                break;

            default:null;

        }
    });
});


//! Si tout est bon on envoie le formulaire

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if ( pseudo && email && password && confirmPassword) {
        const data = {
            pseudo,
            email,
            password
        };
        console.log(data);

        alert('Inscription validée !');
        progressBar.classList = "";
        form.reset();

    }
    else{
        alert('Veuillez remplir correctement les champs !');
    }

});
