function mostrarMensaje(){

alert(
"¡Bienvenido a Mundo Cómic! Prepárate para aprender y divertirte."
);

}

function actividad1(){

let respuesta = prompt(
"¿Qué tipo de bocadillo se utiliza para expresar pensamientos?"
);

if(
respuesta.toLowerCase().includes("pensamiento")
){
alert("¡Correcto!");
}
else{
alert(
"No es correcto. La respuesta es: Bocadillo de pensamiento."
);
}

}
let progreso = 0;

function avanzar(){

if(progreso < 100){

progreso += 25;

document.getElementById("barra").style.width =
progreso + "%";

}

}

function verificarNivel1(){

let respuesta =
document.getElementById("respuestaNivel1")
.value.toLowerCase();

if(
respuesta.includes("viñeta")
){

document.getElementById(
"resultadoNivel1"
).innerHTML =
"🏆 Correcto. Has recuperado la Viñeta.";

}else{

document.getElementById(
"resultadoNivel1"
).innerHTML =
"❌ Intenta nuevamente.";

}

}

let puntos = 0;

function correcto(){

puntos++;

document.getElementById(
"mensajeNivel2"
).innerHTML =
"⭐ Has encontrado " + puntos +
" onomatopeyas.";

}

function girarRuleta(){

const opciones = [

"Diálogo",
"Pensamiento",
"Grito",
"Susurro"

];

let aleatorio =
Math.floor(Math.random()*4);

document.getElementById(
"ruletaResultado"
).innerHTML =
"🎯 Te salió: " +
opciones[aleatorio];

}