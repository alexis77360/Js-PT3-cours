const dataLowercase = 'abcdefghijklmnopqrstuvwxyz';
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbols = '!@#$%^&*()_+-=["\']{};:,./<>?ç~`´§°ºª';
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");


function generatePassword () {
let data = [];
let password = '';

//? si la checkbox est cochée, on ajoute les données dans le tableau
if (lowercase.checked) data.push(...dataLowercase);
if (uppercase.checked) data.push(...dataUppercase);
if (numbers.checked) data.push(...dataNumbers);
if (symbols.checked) data.push(...dataSymbols);

//? si le tableau est vide, on affiche un message d'erreur
if (data.length === 0) {
alert('Veuillez sélectionner au moins un type de caractères');
return;
}


//? on boucle sur la longueur de la range
for (i = 0; i < rangeValue.value; i++) {
password += data[Math.floor(Math.random() * data.length)];

}
//? on affiche le mot de passe dans l'input grace à sa value
passwordOutput.value = password;

//? on copie le mot de passe dans le presse papier
passwordOutput.select();
document.execCommand('copy');

generateButton.textContent = 'Copié !';

setTimeout(() => {
generateButton.textContent = 'Générer un mot de passe';
}, 2000);


}

generateButton.addEventListener('click', generatePassword);

