var pantalla = document.querySelector("canvas");

var pincel = pantalla.getContext("2d");

let fondo = "#414142";
let linea = "#8a2be2";
let px = 350;
let py = 150;

pincel.fillStyle = fondo;
pincel.strokeStyle = linea;

/////// Funciones para dibujar ////////

function dibujarTablero() {
  pincel.fillStyle = fondo;
  pincel.fillRect(0, 0, 1200, 800);
  pincel.strokeStyle = linea;
  dibujarHorca();
}
function dibujarHorca() {
  pincel.beginPath();
  pincel.fillStyle = linea;
  pincel.fillRect(px - 90, py - 50, 6, 350);
  pincel.fillRect(px - 90, py - 50, 90, 6);
  pincel.fillRect(px - 3, py - 50, 6, 20);
  pincel.fillRect(px - 120, py + 300, 65, 26);
  pincel.fillRect(px - 150, py + 326, 126, 36);
}
function dibujarContorno() {
  pincel.beginPath();
  pincel.fillStyle = linea;
  pincel.arc(px, py, 30, 0, 2 * 3.14);
  pincel.fill();
}
function dibujarCara() {
  pincel.beginPath();
  pincel.fillStyle = fondo;
  pincel.arc(px, py, 24, 0, 2 * 3.14);
  pincel.fill();
}
function dibujarCabeza() {
  dibujarContorno();
  dibujarCara();
}
function dibujarCuello() {
  pincel.beginPath();
  pincel.fillStyle = linea;
  pincel.fillRect(px - 3, py + 24, 6, 30);
}
function dibujarBrazoD() {
  pincel.beginPath();
  pincel.strokeStyle = linea;
  pincel.lineWidth = 6;
  pincel.moveTo(px, py + 54);
  pincel.lineTo(px - 65, py + 130);
  pincel.stroke();
}
function dibujarBrazoI() {
  pincel.beginPath();
  pincel.strokeStyle = linea;
  pincel.lineWidth = 6;
  pincel.moveTo(px, py + 54);
  pincel.lineTo(px + 65, py + 130);
  pincel.stroke();
}
function dibujarCuerpo() {
  pincel.beginPath();
  pincel.strokeStyle = linea;
  pincel.lineWidth = 6;
  pincel.moveTo(px, py + 55);
  pincel.lineTo(px - 35, py + 200);
  pincel.moveTo(px, py + 55);
  pincel.lineTo(px + 35, py + 200);
  pincel.moveTo(px - 37, py + 198);
  pincel.lineTo(px + 37, py + 198);
  pincel.stroke();
}
function dibujarPiernaD() {
  pincel.beginPath();
  pincel.strokeStyle = linea;
  pincel.lineWidth = 6;
  pincel.moveTo(px - 10, py + 198);
  pincel.lineTo(px - 10, py + 280);
  pincel.moveTo(px - 10, py + 277);
  pincel.lineTo(px - 30, py + 277);
  pincel.stroke();
}
function dibujarPiernaI() {
  pincel.beginPath();
  pincel.strokeStyle = linea;
  pincel.lineWidth = 6;

  pincel.moveTo(px + 10, py + 198);
  pincel.lineTo(px + 10, py + 280);
  pincel.moveTo(px + 10, py + 277);
  pincel.lineTo(px + 30, py + 277);
  pincel.stroke();
}
function dibujarAhorcado() {
  pincel.beginPath();
  pincel.strokeStyle = linea;
  pincel.lineWidth = 3;
  pincel.moveTo(px - 4, py - 1);
  pincel.lineTo(px - 12, py - 10);
  pincel.moveTo(px - 4, py - 10);
  pincel.lineTo(px - 12, py - 1);
  pincel.moveTo(px + 4, py - 1);
  pincel.lineTo(px + 12, py - 10);
  pincel.moveTo(px + 4, py - 10);
  pincel.lineTo(px + 12, py - 1);
  pincel.moveTo(px - 8, py + 9);
  pincel.lineTo(px + 8, py + 9);
  pincel.stroke();
  pincel.fillStyle = linea;
  pincel.arc(px + 5, py + 9, 5.5, 0, Math.PI, false);
  pincel.fill();
  pincel.stroke();
}

//////// Funciones de logica

let palabras = ["ARBOL", "GIRASOL", "CUARZO", "EUCALIPTO", "HOJAS", "MURCIELAGO", "PATO", "MARIPOSAS","TAMBOR", "GUITARRA","CALESITA","OLAF","VIENTO","JIRAFA","SOMBRA","ALADDIN"];
let palabraSecreta = "";
let letras = [];
let letrasCorrectas=0;
let errores = 8;
let palabra;
let letrasIncorrectas = [];

let letrasCorrectasArray = [];

let found;



const jsConfetti = new JSConfetti()
        


function pista() {
  switch (palabraSecreta) {
    case "ARBOL":
      document.getElementById("pista").innerHTML = "En primavera te deleito, en verano te refresco, en otoño te alimento, y en invierno te caliento.";
      break;
    case "GIRASOL":
      document.getElementById("pista").innerHTML = "Entre col y col lechuga, entre lechuga, una flor, que al sol siempre está mirando, dorándose a su calor.";
      break;
    case "CUARZO":
      document.getElementById("pista").innerHTML =
        "Es un mineral, el segundo mas abundante en la corteza terrestre";
      break;
    case "EUCALIPTO":
      document.getElementById("pista").innerHTML =
        "¿Cuál es el árbol que tiene las 5 vocales?";
      break;
    case "HOJAS":
      document.getElementById("pista").innerHTML = "Están en la navaja y en el cuaderno, se cae del árbol antes del invierno.";
      break;
    case "MURCIELAGO":
      document.getElementById("pista").innerHTML = "Vuelo de noche, duermo de día y nunca verás plumas en ala mía.";
      break;
    case "PATO":
        document.getElementById("pista").innerHTML = "¿Cuál es el animal que come con las patas?";
        break;
    case "MARIPOSAS":
        document.getElementById("pista").innerHTML = "Alas de mil colores y se pierden entre las flores.";
        break;    
    
    case "TAMBOR":
        document.getElementById("pista").innerHTML = "Mis caras redondas, ¡qué estiradas son! A fuerza de golpes, así canto yo.";
        break;    
    
    case "GUITARRA":
        document.getElementById("pista").innerHTML = "Soy un instrumento musical al que le gustan las cosquillas. Al rascar mi barriga, hago bellas melodías.";
        break;    
    
    case "CALESITA":
        document.getElementById("pista").innerHTML = "Vas en un aviòn, delante tienes un caballo y detràs un camion.";
        break;    
    
    case "PIRATA":
        document.getElementById("pista").innerHTML = "Llevo un parche en el ojo, Una pata de palo y mi cara es de malo, malo.";
        break;    
    
    case "OLAF":
        document.getElementById("pista").innerHTML = "Con la nieve se hace y el sol lo deshace";
        break;    

    case "VIENTO":
        document.getElementById("pista").innerHTML = " ¿Qué cosa es? ¿Qué cosa es? Que corre mucho y no tiene pies.";
        break;

    case "JIRAFA":
        document.getElementById("pista").innerHTML = " Alta como un palo, cabeza arriba y solo come hojas que están encima. ¿Qué es?";
        break;

    case "SOMBRA":
        document.getElementById("pista").innerHTML = " Cuando me siento me estiro, cuando me levanto encojo, entro en el fuego y no me quemo,  entro en el agua y no me mojo.";
        break;

    case "ALADDIN":
        document.getElementById("pista").innerHTML = " Andando por el desierto una lámpara encontró, intentó sacarle brillo y un genio apareció. ";
        break;
       
    

    default:
      console.log("opcion no valida");
      break;
  }
}


function armarhorca(errores){
    switch (errores) {
        case 8:
            dibujarHorca();
            break;
        case 7:
            dibujarHorca();
            dibujarCabeza();
            break;            
        case 6:
            dibujarHorca();
            dibujarCabeza();
            dibujarCuello();
            break;    
        case 5:
            dibujarHorca();
            dibujarCabeza();
            dibujarCuello();
            dibujarCuerpo();
            break;    
        case 4:
            dibujarHorca();
            dibujarCabeza();
            dibujarCuello();
            dibujarCuerpo();
            dibujarBrazoI();
            break;    
        case 3:
            dibujarHorca();
            dibujarCabeza();
            dibujarCuello();
            dibujarCuerpo();
            dibujarBrazoI();
            dibujarBrazoD();
            break;    
        case 2:
            dibujarHorca();
            dibujarCabeza();
            dibujarCuello();
            dibujarCuerpo();
            dibujarBrazoI();
            dibujarBrazoD();
            dibujarPiernaD();
            break; 
         case 1:
            dibujarHorca();
            dibujarCabeza();
            dibujarCuello();
            dibujarCuerpo();
            dibujarBrazoI();
            dibujarBrazoD();
            dibujarPiernaD();
            dibujarPiernaI();
            break;       
        case 0:
            dibujarHorca();
            dibujarCabeza();
            dibujarCuello();
            dibujarCuerpo();
            dibujarBrazoI();
            dibujarBrazoD();
            dibujarPiernaD();
            dibujarPiernaI();
            dibujarAhorcado();
            break;    
    
        default:
            console.log("opcion incorrecta");
            break;
    }
}

function sortearPalabra() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;

  pincel.lineWidth = 4;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.strokeStyle = linea;
  let ancho = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    pincel.moveTo(px + 20 + ancho * i, py + 400);
    pincel.lineTo(px + 70 + ancho * i, py + 400);
  }
  pincel.stroke();
  pincel.closePath();
}





function comprobarLetra(key) {
  let status = false;
  if ((key >= 65 && letras.indexOf(key)) || (key <= 90 && letras.indexOf(key))) {
    //// 65 y 90 corresponde al numero en el indice ASCII de las letras mayusculas
    letras.push(key);
    return status;
  } else status = true;
  return status;
}

function pushLetraCorrecta(letra){
  if (!letrasCorrectasArray.includes(letra)) {
    letrasCorrectasArray.push(letra); 
  }  
  }

function escribirLetraCorrecta(index) {
  pincel.font = "bold 52px Inter";
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "#8a2be2";

  let ancho = 600 / palabraSecreta.length;
  pincel.fillText(palabraSecreta[index], px + 25 + ancho * index, py + 380);
  
  letrasCorrectas = letrasCorrectas +1;

    if (letrasCorrectas === palabraSecreta.length) {
       win()
      jsConfetti.addConfetti() 
    } 
  
}

function escribirLetraIncorrecta(letra, errorLeft) {
  
    pincel.font = "bold 40px Inter";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#8a2be2";
    pincel.fillText(letra, px + 30 + 40 * (10 - errorLeft), py + 500, 40);
   
}



function win() {
  
  pincel.font = "bold 60px Inter";
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "#8a2be2";
  pincel.fillText("Felicitaciones! Ganaste!!!", px+50, py+200);
 
}

function lose() {
  pincel.font = "bold 60px Inter";
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "#8a2be2";
  pincel.fillText("Lo siento, perdiste", px+100, py+200);

}

function agregarLetraIncorrecta(key) {
  errores -= 1;
  if (errores > 0) {
    if (!letrasIncorrectas.includes(key)) {
      letrasIncorrectas.push(key);
    } else {
      alert("esa letra ya se agregó");      
    }
  } else {
    lose() 
  }
}

function iniciarJuego() {
  document.getElementById("nuevo_juego").style.display = "none";
  document.getElementById("nuevaPalabra").style.display = "none";
  document.getElementById("btnR").style.display = "inherit";
  document.getElementById("btnP").style.display = "inherit";
  
  dibujarTablero();
  sortearPalabra();
  document.onkeydown = (e) => {
    if (errores > 0) {
      let letra = e.key.toUpperCase();

      if (!letrasCorrectasArray.includes(letra)) {
        if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
          for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
              escribirLetraCorrecta(i);
              pushLetraCorrecta(letra);
            }
          }
        } else if (!letrasIncorrectas.includes(letra)) {
          agregarLetraIncorrecta(letra);
          escribirLetraIncorrecta(letra, errores);
          armarhorca(errores);
        } else {
          alert("Esa letra es incorrecta y ya se usó");
        }
      } else {
        alert("ya se agrego anteriormente esa letra");
      }
    }
  };
}
 
function nuevaPalabra(){
let nuevaPalabra = document.querySelector(".newWord").value;
nuevaPalabra = nuevaPalabra.toUpperCase();
palabras = [];
palabras.push(nuevaPalabra);
document.querySelector(".newWord").value="";
//return palabras;
iniciarJuego();

}


////////Para traer la palabra desde el Json /////////////////////
/////////////////////////////////////////////////////////////////////

//  function sortearPalabra(){
//     fetch('/data.json')
//     .then(response => response.json())
//     .then(data => {

//         palabraSecreta = data.palabras[Math.floor(Math.random()*data.palabras.length )]

//         document.getElementById('word').innerHTML = `${palabraSecreta}`

//        pincel.lineWidth = 4;
//         pincel.lineCap ="round";
//         pincel.lineJoin ="round";
//         pincel.strokeStyle = linea;
//         let ancho = 600/(palabraSecreta.length);
//         for (let i = 0; i < palabraSecreta.length; i++) {
//             pincel.moveTo(px+20 + (ancho*i),py+400);
//             pincel.lineTo(px+70 + (ancho*i),py+400);
//         }
//         pincel.stroke();
//         pincel.closePath();
//         return palabraSecreta
//     })

//  }

