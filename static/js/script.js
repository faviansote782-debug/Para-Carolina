
function descubrirSorpresa() {
    document.getElementById("bienvenida").style.display = "none";

    const regalo = document.getElementById("regalo");
    regalo.style.display = "block";
}


function abrirRegalo() {
    const caja = document.getElementById("caja");
    const mensaje = document.getElementById("mensaje-regalo");
    const boton = document.getElementById("boton-regalo");
    const continuar = document.getElementById("continuar-regalo");

    if (caja.classList.contains("abierto")) {
        return;
    }

    caja.classList.add("abierto");

    mensaje.textContent = "Ves como si lo eres?? JASJAJSDSJ";

    boton.textContent = "No apretes aquí 💛";
    boton.disabled = true;

    continuar.style.display = "inline-block";
}

function continuarAventura() {
    document.getElementById("regalo").style.display = "none";

    const universo = document.getElementById("universo");
    universo.style.display = "block";
}

// Próxima etapa: celebración
function irCelebracion() {
    document.getElementById("universo").style.display = "none";
    document.getElementById("pregunta").style.display = "block";
}

// MENSAJES TEMPORALES: luego pondremos los tuyos.
const mensajesNo = [
    "SEGURA???",
    "MUYYYYY SEGURA", 
    "SIENTO QUE NO ESTAS MUY SEGURA",
    "YA SE COMO ENTONCES CONSTE QUE ME OBLIGASTE",
    "GEI EL QUE DIGA QUE NO",
    "SAJSAJSA YO SABIA",
    "Carolina????",
    "ESTO SE CONSIDERA COMO UN SUPER GEI?",
    "YA ME ESTOY ASUSTANDO",
    "COMO QUE NO DENUEVO >:v ",
    "BUUUUUU",
    "APESTAS...",
    "ENTONCES NO SIEMPRE???",
    "PIPIPIPIPIPIPIPI"
];

let cantidadNo = 0;


function responderNo() {
    const mensaje = document.getElementById("mensaje-no");
    const botonSi = document.getElementById("boton-si");

    // Mostrar el siguiente mensaje
    mensaje.textContent = mensajesNo[cantidadNo % mensajesNo.length];

    cantidadNo++;

    // Hacer crecer progresivamente el botón Sí
    const crecimiento = Math.min(1 + cantidadNo * 0.35, 3.5);

    botonSi.style.transform = `scale(${crecimiento})`;
    botonSi.style.zIndex = "10";
}


function responderSi() {
    document.querySelector(".question-box").style.display = "none";
    document.getElementById("respuesta-si").style.display = "block";
}

// La carta se conectará en la siguiente etapa.
function irCarta() {
    document.getElementById("pregunta").style.display = "none";
    document.getElementById("carta").style.display = "block";
}