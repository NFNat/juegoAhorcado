var pantalla = document.querySelector("canvas"); 
var pincel = pantalla.getContext("2d"); 

let fondo = "#a99cb4";
let linea = "#8a2be2";
let px = 350;
let py = 200;
pincel.fillStyle = fondo; 
pincel.fillRect(0, 0, 1200, 800);
pincel.strokeStyle =  linea;

function dibujarHorca() {
    pincel.beginPath();
    pincel.fillStyle = linea;
    pincel.fillRect(px-90,py-50,6,350);   
    pincel.fillRect(px-90,py-50,90,6);   
    pincel.fillRect(px-3,py-50,6,20);   
    pincel.fillRect(px-120,py+300,65,26);   
    pincel.fillRect(px-150,py+326,126,36);   
        
}

function dibujarContorno(){
    pincel.beginPath();
    pincel.fillStyle = linea; 
    pincel.arc(px, py, 30, 0, 2*3.14);
    pincel.fill(); 

}
function dibujarCara(){
    pincel.beginPath();
    pincel.fillStyle = fondo ; 
    pincel.arc(px, py, 24, 0, 2*3.14);
    pincel.fill(); 
}
function dibujarCabeza(){
    dibujarContorno();
    dibujarCara()
}


function dibujarCuello(){
    pincel.beginPath();
    pincel.fillStyle = linea;
    pincel.fillRect(px-3,py+24,6,30);   

}
function dibujarBrazoD(){
    pincel.beginPath();
    pincel.strokeStyle = linea;
    pincel.lineWidth = 6;
    pincel.moveTo(px, py+54);
    pincel.lineTo(px-65, py+130)
    pincel.stroke();   

}
function dibujarBrazoI(){
    pincel.beginPath();
    pincel.strokeStyle = linea;
    pincel.lineWidth = 6;
    pincel.moveTo(px, py+54);
    pincel.lineTo(px+65, py+130)
    pincel.stroke(); 

}

function dibujarCuerpo(){
    pincel.beginPath();
    pincel.strokeStyle = linea;
    pincel.lineWidth = 6;
    pincel.moveTo(px, py+55);
    pincel.lineTo(px-35, py+200)
    pincel.moveTo(px, py+55);
    pincel.lineTo(px+35, py+200);    
    pincel.moveTo(px-37, py+198);
    pincel.lineTo(px+37, py+198)
    pincel.stroke();
}

function dibujarPiernaD(){
    pincel.beginPath();
    pincel.strokeStyle = linea;
    pincel.lineWidth = 6;
    pincel.moveTo(px-10, py+198);
    pincel.lineTo(px-10, py+280);
    pincel.moveTo(px-10, py+277);
    pincel.lineTo(px-30, py+277);
    pincel.stroke(); 

}

function dibujarPiernaI(){
    pincel.beginPath();
    pincel.strokeStyle = linea;
    pincel.lineWidth = 6;

    pincel.moveTo(px+10, py+198);
    pincel.lineTo(px+10, py+280);
    pincel.moveTo(px+10, py+277);
    pincel.lineTo(px+30, py+277);
    pincel.stroke(); 

}

function dibujarAhorcado(){
    pincel.beginPath();
    pincel.strokeStyle = linea;
    pincel.lineWidth = 3;
    pincel.moveTo(px-4, py-1);
    pincel.lineTo(px-12, py-10 );
    pincel.moveTo(px-4, py-10);
    pincel.lineTo(px-12, py-1 );
    pincel.moveTo(px+4, py-1);
    pincel.lineTo(px+12, py-10 );
    pincel.moveTo(px+4, py-10);
    pincel.lineTo(px+12, py-1 );
    pincel.moveTo(px-8, py+9)
    pincel.lineTo(px+8, py+9)
    pincel.stroke();
    pincel.fillStyle = linea; 
    pincel.arc(px+5, py+9, 5.5, 0, Math.PI, false);
    pincel.fill(); 
    pincel.stroke();
}

dibujarHorca();
dibujarCabeza();
dibujarCuello();
dibujarBrazoD();
dibujarBrazoI();
dibujarCuerpo();
dibujarPiernaD();
dibujarPiernaI();
dibujarAhorcado();

