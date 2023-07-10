
const colorChanger = () => {



const title = document.querySelector("h1");
const rbg1 = Math.floor(Math.random() * 256);
const rbg2 = Math.floor(Math.random() * 256);
const rbg3 = Math.floor(Math.random() * 256);


document.body.style.backgroundColor = `rgb(${rbg1}, ${rbg2}, ${rbg3})`;

title.innerText = `Rgb(${rbg1}, ${rbg2}, ${rbg3})`;

}

setInterval(colorChanger, 3000);

