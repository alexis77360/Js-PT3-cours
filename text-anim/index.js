const target = document.getElementById('target');

let array = ["Web", "Front-End", "Webflow"];

let wordIndex = 0;
let letterIndex = 0;


const createletter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];

    //! Délai pour effacer la lettre
    setTimeout(() => {
        letter.remove();
    }, 2800);


}

//? Fonction récursive
const loop = () => {

    //? Si on est à la fin du tableau on revient au début
    setTimeout(() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
            //? Si on est à la fin du mot on passe au suivant
        } else if (letterIndex < array[wordIndex].length) {
            createletter();
            letterIndex++;
            loop();
        }
        //? Sinon on passe au mot suivant
        else {
            wordIndex++;
            letterIndex = 0;

            //! Délai pour lire le mot
            setTimeout(() => {
                loop();
            }, 2800);
        }

    }, 100);
}

loop();