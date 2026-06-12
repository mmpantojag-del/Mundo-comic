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