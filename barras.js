/* ESTE ARCHIVO LO HICE UNICAMENTE PQ YA MANEJARME EN EL OTRO CODIGO D MIRANDATEST ME MAREA
   CREDITOS A JOHAN X INSPIRARME A VER COMO FUNCIONAN ESAS VARIABLES Y PQ LE COPIE KSI TODO EL
   CODIGO*/


let hambrevar = 50;
let sueñovar = 50;
let diversionvar = 50;

const petImg = document.getElementById("pet");
const estado = document.getElementById("estado");

function actualizarEstado() {
    estado.textContent = `Hambre: ${hambrevar} | Energía: ${energiavar} | Felicidad: ${felicidadvar}`;


// Acciones del usuario
function alimentar() {
    hambrevar = Math.max(0, hambre - 20);
    diversionvar += 5;
    actualizarEstado();
}

function jugar() {
    diversionvar += 10;
    sueñovar = Math.max(0, energia - 10);
    hambrevar += 5;
    actualizarEstado();
}

function dormir() {
    sueñovar = Math.min(100, energia + 20);
    actualizarEstado();
}

// Simulación del paso del tiempo
setInterval(() => {
    hambrevar += 1;
    sueñovar = Math.max(0, energia - 1);
    diversionvar = Math.max(0, felicidad - 1);
    actualizarEstado();
}, 2000); // cada 2 segundos
}