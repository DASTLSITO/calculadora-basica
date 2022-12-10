const botones = [...document.querySelectorAll(".boton")];
const botonesOperaciones = [...document.querySelectorAll(".botonOperacion")];
const pantalla = document.querySelector(".pantalla");
const borrar = document.querySelector(".borrar");
const punto = document.querySelector(".punto");
const botonC = document.querySelector(".botonC");
const botonResultado = document.querySelector(".botonIgual");
let resultado = 0;
let operacionUsada = false;
let operacion;
let valorA, valorB;
let menos = true;
let puntoVerificacion = true;

borrar.addEventListener("click", e => {
    pantalla.value = pantalla.value.toString().slice(0, -1);
});

punto.addEventListener("click", e =>{
    if(puntoVerificacion){
        pantalla.value += ".";
        puntoVerificacion = false;
    }
});

botones.forEach(boton => {
    boton.addEventListener("click", e =>{
        pantalla.value += boton.id;
        operacionUsada = true;
    });
});

botonC.addEventListener("click", ()=>{
    pantalla.removeAttribute("placeholder");
    pantalla.value = "";
    menos = true;
    operacionUsada = false;
    valorA = 0;
    valorB = 0;
    operacion = null;
    puntoVerificacion = true;
});

botonResultado.addEventListener("click", ()=>{
    if(pantalla.value.length != 0){
        valorB = pantalla.value;
        switch(operacion){
            case "+":
                pantalla.value = parseFloat(valorA) + parseFloat(valorB)
                break;
            case "-":
                pantalla.value = parseFloat(valorA) - parseFloat(valorB)
                break;
            case "*":
                pantalla.value = parseFloat(valorA) * parseFloat(valorB)
                    break;
            case "/":
                pantalla.value = parseFloat(valorA) / parseFloat(valorB)
                break;
        }
    }
});

botonesOperaciones.forEach(botonO => {
    botonO.addEventListener("click", ()=>{
        if(operacionUsada == true){
            valorA = pantalla.value;
            pantalla.value = "";
            pantalla.setAttribute("placeholder", botonO.id);
            operacionUsada = false;
            operacion = botonO.id;
            menos = true;
            puntoVerificacion = true;
        }
        else if(botonO.id == "-" && menos){
            pantalla.value += botonO.id;
            menos = false;
        }
    });
});