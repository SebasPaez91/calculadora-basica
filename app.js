let numero1;
let numero2;
let operacion;

function limpiar() {
    result.textContent = "";
}

function del() {
    result.textContent = "";
    numero1 = 0;
    numero2 = 0;
    operacion = 0;
}

function inicial() {
    //Variables
    let result = document.getElementById("result");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multi = document.getElementById("multi");
    let divi = document.getElementById("divi");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro"); 
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis"); 
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");  
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
    let punto = document.getElementById("punto");  
    let raiz = document.getElementById("raiz");
    let igual = document.getElementById("igual");
    let alloperations = document.getElementById("alloperations");

    // Colocar el numero en el resultado
    uno.onclick = function(e) {
        result.textContent = result.textContent + "1";
    }
    dos.onclick = function(e) {
        result.textContent = result.textContent + "2";
    }
    tres.onclick = function(e) {
        result.textContent = result.textContent + "3";
    }
    cuatro.onclick = function(e) {
        result.textContent = result.textContent + "4";
    }
    cinco.onclick = function(e) {
        result.textContent = result.textContent + "5";
    }
    seis.onclick = function(e) {
        result.textContent = result.textContent + "6";
    }
    siete.onclick = function(e) {
        result.textContent = result.textContent + "7";
    }
    ocho.onclick = function(e) {
        result.textContent = result.textContent + "8";
    }
    nueve.onclick = function(e) {
        result.textContent = result.textContent + "9";
    }
    cero.onclick = function(e) {
        result.textContent = result.textContent + "0";
    }
    punto.onclick = function(e) {
        result.textContent = result.textContent + ".";
    }
    reset.onclick = function(e) {
       del();
    }
    suma.onclick = function(e) {
       numero1 = result.textContent;
       operacion = "+";
       limpiar();
     }
    resta.onclick = function(e) {
        numero1 = result.textContent;
        operacion = "-";
        limpiar();
    }
    multi.onclick = function(e) {
        numero1 = result.textContent;
        operacion = "*";
        limpiar();
    }
    divi.onclick = function(e) {
        numero1 = result.textContent;
        operacion = "/";
        limpiar();
    }    
    igual.onclick = function(e) {
        numero2 = result.textContent;
        respuesta();
    }  
    alloperations.onclick = function(e) {
        numero1 = result.textContent;
        operacion = "Todas las operaciones";
        limpiar();
    }  


    function respuesta () {
        let res = 0;
        switch(operacion) {
            case "+":
                res = parseFloat(numero1) + parseFloat(numero2);
            break;
            case "-":
                res = parseFloat(numero1) - parseFloat(numero2);
            break;
            case "*":
                res = parseFloat(numero1) * parseFloat(numero2);
            break;
            case "/":
                res = parseFloat(numero1) / parseFloat(numero2);
            break;
            case "Todas las operaciones":
                n1 = parseFloat(numero1) + parseFloat(numero2);
                console.log(n1);
                n2 = parseFloat(numero1) - parseFloat(numero2);
                console.log(n2);
                n3 = parseFloat(numero1) * parseFloat(numero2);
                console.log(n3);
                n4 = parseFloat(numero1) / parseFloat(numero2);
                console.log(n4);
            break;
        }
        del();
        result.textContent= res;
    }
    raiz.onclick = function(e) {
        numero1 = parseInt(result.textContent);
        numero1 = Math.sqrt(numero1);
        result.textContent= numero1;
    }  
}