const botones = [...document.querySelectorAll(".boton")];
const botonesOperaciones = [...document.querySelectorAll(".botonOperacion")];
const pantalla = document.querySelector(".pantalla");
const botonC = document.querySelector(".botonC");
const botonResultado = document.querySelector(".botonIgual");
let resultado = 0;
let operacionUsada = false;
let operacion;
let valorA, valorB;
let menos = true;

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
            console.log("xd");
            valorA = pantalla.value;
            pantalla.value = "";
            pantalla.setAttribute("placeholder", botonO.id);
            operacionUsada = false;
            operacion = botonO.id;
            menos = true;
        }
        else if(botonO.id == "-" && menos){
            console.log("xd2");
            pantalla.value += botonO.id;
            menos = false;
        }
    });
});