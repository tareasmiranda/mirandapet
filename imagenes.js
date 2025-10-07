let vivo = true;
let hambre = 50;
let felicidad = 50;
let vida = 100;
const img = document.getElementById("petImg");
const estado = document.getElementById("estado");

function actualizarEstado() {
    var img = document.getElementById("petImg")
    const estado = document.getElementById("estado");
    estado.textContent = `Hambre: ${hambre} | Vida: ${vida} | Felicidad: ${felicidad}`;
    
}
    
    function comer() {
        hambre = Math.max(0, hambre - 20);
        vida += 20;

        var img = document.getElementById("petImg")
        const comer = new Audio("audio/omnomnom.mp3");
        img.src = "img/heavyomnomnom.gif";
        comer.play();

        setTimeout(function(){
            img.src="img/heavyidle.jpeg";
        }, 3000)

        actualizarEstado();
    }

    function jugar(){
        felicidad = Math.max (0, felicidad + 20);
        hambre += 5
        var img = document.getElementById("petImg")
        const bailar = new Audio("audio/conga.wav");
        img.src = "img/heavybaile.gif";
        bailar.play();

        setTimeout(function(){
            img.src="img/heavyidle.jpeg";
        }, 3000)
    }

    function pegar(){
        vida -= 20;
        var img = document.getElementById("petImg")
        const pegar = new Audio("audio/pum.wav")
        pegar.play();

        actualizarEstado();
    }


// Simulación del paso del tiempo
setInterval(() => {
    hambre += 1;
    vida = Math.max(0, vida - 1);
    felicidad = Math.max(0, felicidad - 1);
    revisarVida();
}, 2000); // cada 2 segundos


setInterval(() => {
    actualizarEstado();
}, 0); // cada frame




function revisarVida(){ 

if (vida <= 0){ 
    var img = document.getElementById("petImg")
    const estado = document.getElementById("estado");
    img.src = "img/heavyded.jpeg";
    const morir = new Audio("audio/death.wav");
    morir.play();
    const musik = document.getElementById ("music");
    musik.src = "audio/rip.mp3"

        console.log("el heavy ha muerto....!!!");
        return;
    }else{
        console.log("el heavy esta vivo :]")
    }
}
// Estado inicial (cosa q puso johan q no quiero ni arriesgarme en quitar)
actualizarEstado();
