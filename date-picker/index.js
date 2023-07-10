//! on utilise la méthode toISOString() pour avoir la date au format ISO
const today = new Date().toISOString().split('T')[0];

//? pour un input type date on a besoin de la date au format yyyy-mm-dd

start_date.value = today;

//? On ne peut pas choisir une date antérieure à aujourd'hui
start_date.min = today;


let tomorrow = new Date();
//! Permet d'ajouter un jour à la date d'aujourd'hui
tomorrow.setDate(tomorrow.getDate() + 1);

//? Convertit la date en string et la découpe pour récupérer uniquement la date
let tomorrowFormat = tomorrow.toISOString().split('T')[0];

end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() + 1);
        end_date.value = day.toISOString().split('T')[0];
    }
});


end_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() - 1);
        start_date.value = day.toISOString().split('T')[0];
    }

});

const bookingCalc = () => {
    //? Cacule le timestamp entre les deux dates
    let diffTime = Math.abs(new Date(end_date.value) - new Date(start_date.value));

    //? Cacule le nombre de jours entre les deux dates
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    total.textContent = diffDays * nightPrice.textContent;
}


start_date.addEventListener('change', bookingCalc);
end_date.addEventListener('change', bookingCalc);
bookingCalc();