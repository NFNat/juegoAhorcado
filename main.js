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

let palabras = ["MANZANA", "FRUTAS", "CUARZO", "MONITOR", "PERAS", "FUTURO"];
let palabraSecreta = "";
let letras = [];
let letrasCorrectas=0;
let errores = 8;
let palabra;
let letrasIncorrectas = [];

let letrasCorrectasArray = [];

let found;


//import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()
        




function continuarJuego() {
  if (errores <= 0 ) {
    alert("Ya perdiste!! Bueno, seguí intentando por el honor ");    
  }

}

function pista() {
  switch (palabraSecreta) {
    case "MANZANA":
      document.getElementById("pista").innerHTML = "Puede ser roja o verde";
      break;
    case "FRUTAS":
      document.getElementById("pista").innerHTML = "Son muy saludables";
      break;
    case "CUARZO":
      document.getElementById("pista").innerHTML =
        "Es un mineral, el segundo mas abundante en la corteza terrestre";
      break;
    case "MONITOR":
      document.getElementById("pista").innerHTML =
        "Es altamente probable que estes mirando uno ahora mismo";
      break;
    case "PERAS":
      document.getElementById("pista").innerHTML = "Son amarillas y deliciosas";
      break;
    case "FUTURO":
      document.getElementById("pista").innerHTML =
        "Segun una canciòn, llegò hace rato";
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
// if (estado) {
//   palabraSecreta=nuevaPalabra;

//   pincel.lineWidth = 4;
//   pincel.lineCap = "round";
//   pincel.lineJoin = "round";
//   pincel.strokeStyle = linea;
//   let ancho = 600 / palabraSecreta.length;
//   for (let i = 0; i < palabraSecreta.length; i++) {
//     pincel.moveTo(px + 20 + ancho * i, py + 400);
//     pincel.lineTo(px + 70 + ancho * i, py + 400);
//   }
//   pincel.stroke();
//   pincel.closePath();
//   console.log(palabraSecreta); // borrar esta linea cuando se termine el programa
// } else {
  
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
  console.log(palabraSecreta); // borrar esta linea cuando se termine el programa
}

// }



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
  console.log("La cantidad de letras correctas son " + letrasCorrectas);//// sacar este log
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

    
    console.log("Las letras correctas son: "+letrasCorrectasArray);   /// sacar este log
  
    if (letrasCorrectas === palabraSecreta.length) {
       win()
      jsConfetti.addConfetti() 
      
    } else {
      
    } 
    continuarJuego()

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

function win() {
  
  pincel.font = "bold 60px Inter";
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "#8a2be2";
  pincel.fillText("Felicitaciones! Ganaste!!!", px+50, py+200);
 
}

function agregarLetraIncorrecta(key) {
  errores -= 1;
  console.log(errores);

  if (errores > 0) {
    if (!letrasIncorrectas.includes(key)) {
      letrasIncorrectas.push(key);
    } else {
      alert("esa letra ya se agregó");
      console.log("La cantidad de letras incorrectas es:" +letrasIncorrectas); ///// sacar esto
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

