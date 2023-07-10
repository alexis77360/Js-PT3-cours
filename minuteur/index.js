let totalSeconds;
let interval;

audio = new Audio ("https://lasonotheque.org/UPLOAD/mp3/0758.mp3");


choice.focus();

function countDown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    //? Permet d'afficher les minutes et les secondes avec un 0 devant si elles sont inférieures à 10
    let sec = seconds < 10 ? "0" + seconds : seconds;

    //?On affiche les minutes et les secondes
    countDownDisplay.textContent = `${minutes}:${sec}`;

    //?On décrémente le nombre de secondes
    if(totalSeconds > 0)
    {

        totalSeconds--;
    }
    else
    {
        //?On affiche le message de fin
        countDownDisplay.textContent = 'Terminé !';
        //?On joue le son
        audio.play();
        

        //?On arrête le compteur
        clearInterval(interval);
    }
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (isNaN(choice.value)) {
        alert('Veuillez entrer un nombre');
        return;
    }else 
    {
        //?On récupère la valeur de l'input et on la multiplie par 60 pour avoir le nombre de secondes
        totalSeconds = choice.value * 60;
        choice.value = '';
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    }
});
