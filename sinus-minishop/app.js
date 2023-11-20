/* Kom igång
Ladda ner sinus minishop. All din kod ska skrivas i script.js. I denna övning kommer du få öva på:

Leta reda på saker i DOM och ändra innehåll
Lyssna efter events på olika element
Lägga till ny HTML med JS
DOM Selecta! */

//1. Byt namn på första hoodien från Ash till Potato.
const potato = document.querySelector(".art-1 h3");
potato.innerText = "Potato";

//2. Byt namn på Home till Start.
const nav = document.querySelector("nav a");
nav.innerText = "Start";

console.log(document.querySelector("nav a:nth-of-type(2)").innerText);

