var resultado; 
var rad;
var deg;
var answer = 0;
var flag = 0;
var flag_resultado = 0;
var flag_rad_degre = 0;
window.onload = function() {
    //Declaraciones de variables
    
    resultado = document.getElementById("resultado");
    rad = document.getElementById("rad");
    deg = document.getElementById("deg");
    
    var fac = document.getElementById("fac");
    var par_der = document.getElementById("(");
    var par_izq = document.getElementById(")");
    var porcentaje = document.getElementById("porc");
    var borrar = document.getElementById("borrar");
    var inversa = document.getElementById("inv");
    var sin = document.getElementById("sin");
    var ln = document.getElementById("ln");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var div = document.getElementById("div");
    var pi = document.getElementById("pi");
    var cos = document.getElementById("cos");
    var log = document.getElementById("log");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var mult = document.getElementById("por");
    var exp = document.getElementById("exp");
    var tan = document.getElementById("tan");
    var raiz = document.getElementById("raiz");
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var res = document.getElementById("res");
    var ans = document.getElementById("ans");
    var basediez = document.getElementById("basediez");
    var potencia = document.getElementById("potencia");
    var cero = document.getElementById("0");
    var punto = document.getElementById("punto");
    var igual = document.getElementById("igual");
    var suma = document.getElementById("suma");

 
    //Llamado de funcion mostrar números, para imprimir el dato al momento de presionar un botón 
    uno.onclick = mostrar;
    dos.onclick = mostrar;
    tres.onclick = mostrar;
    cuatro.onclick = mostrar;
    cinco.onclick = mostrar;
    seis.onclick = mostrar;
    siete.onclick = mostrar;
    ocho.onclick = mostrar;
    nueve.onclick = mostrar;

    //Llamado de la función 
    fac.onclick = mostrar;
    par_der.onclick = mostrar;
    par_izq.onclick = mostrar;
    porcentaje.onclick = mostrar;
    sin.onclick = mostrar;
    ln.onclick = mostrar;
    div.onclick = mostrar;
    pi.onclick = mostrar;
    cos.onclick = mostrar;
    log.onclick = mostrar;
    mult.onclick = mostrar;
    exp.onclick = mostrar;
    tan.onclick = mostrar;
    raiz.onclick = mostrar;
    res.onclick = mostrar;
    ans.onclick = mostrar;
    basediez.onclick = mostrar;
    potencia.onclick = mostrar;
    cero.onclick = mostrar;
    punto.onclick = mostrar;
    igual.onclick = mostrar;
    suma.onclick = mostrar;
    
    //Funcion invertir
    inversa.onclick = invertir;

    //radianes
    rad.onclick = radianes;
    //grados
    deg.onclick = degrees;

    //random
    ans.onclick = random;

    //Borrar 
    borrar.onclick = clear_number;
    
    //Evaluar resultado 
    igual.onclick = eval_result;

}

function radianes(event){
    flag_rad_degre = 0;
    this.className = "btn btn-secondary rad";
    deg.className = "btn btn-secondary deg";
}

function degrees(event) {
    flag_rad_degre = 1;
    this.className = "btn btn-secondary rad";
    rad.className  = "btn btn-secondary deg";
}
function random(event) {
    if(ans.innerHTML == "Rnd"){
        var r = eval("Math.random()")
        resultado.innerHTML += "<p style='float:left;'>" + r + "</p>";
    }
}
function mostrar(event){
    op = ["+", "-", "x", "÷", "%",'x!'];

    
    if (flag_resultado == 0){
        resultado.innerHTML += this.value;
    }
    else{
        if (this.innerText == op[0] || this.innerText == op[1] || this.innerText == op[2] || this.innerText == op[3] || this.innerText == op[4] || this.innerText == op[5]){
            resultado.innerHTML += this.value;
            flag_resultado = 0
        }
        else{
            resultado.innerHTML = this.value;
            flag_resultado = 0
        }
    }
    
    
}

function clear_number(event){
    resultado.removeChild(resultado.lastElementChild);
}

function invertir(event){
    if (flag == 0) {
        sin.innerHTML = "sin<sup>-1</sup>";
        sin.value = "<p style='float:left;'>arcsin</p>";
        ln.innerHTML = "e<sup>x</sup>";
        ln.value = "<p style='float:left;'>e^</p>";
        cos.innerHTML = "cos<sup>-1</sup>";
        cos.value = "<p style='float:left;'>arccos</p>";
        log.innerHTML = "10<sup>x</sup>";
        log.value = "<p style='float:left;'>10^</p>";
        tan.innerHTML = "tan<sup>-1</sup>";
        tan.value = "<p style='float:left;'>arctan</p>";
        raiz.innerHTML = "x<sup>2</sup>";
        raiz.value = "<p style='float:left;'>^2</p>";
        ans.innerHTML = "Rnd";
        ans.value = "<p style='float:left;'>rnd</p>"
        potencia.innerHTML = "<sup>y</sup>√x";
        potencia.value = "<p style='float:left;'>)^(1/</p>"
        flag = 1;

    }
    else{
        sin.innerHTML = "sin";
        sin.value = "<p style='float:left;'>sin</p>";
        ln.innerHTML = "ln";
        ln.value = "<p style='float:left;'>ln</p>";
        cos.innerHTML = "cos";
        cos.value = "<p style='float:left;'>con</p>";
        log.innerHTML = "log";
        log.value = "<p style='float:left;'>log</p>";
        tan.innerHTML = "tan";
        tan.value = "<p style='float:left;'>tan</p>";
        raiz.innerHTML = "√";
        raiz.value = "<p style='float:left;'>sin</p>";
        ans.innerHTML = "Ans";
        ans.value = "<p style='float:left;'>Ans</p>";
        potencia.innerHTML = "x<sup>y</sup>";
        potencia.value = "<p style='float:left;'>x<sup>y</sup></p>";
        flag = 0;
    }

}


function eval_result(event){
    let operacion = '';
    resultado.childNodes.forEach(element => {
        operacion += element.innerHTML;
    });

    if(flag == 0){
        if(flag_rad_degre == 0){
            operacion = operacion.replaceAll("sin", "Math.sin");
            operacion = operacion.replaceAll("cos", "Math.cos");
            operacion = operacion.replaceAll("tan", "Math.tan");

        }
        else{
            operacion = operacion.replaceAll("sin(", "Math.sin(Math.PI/180*");
            operacion = operacion.replaceAll("cos(", "Math.cos(Math.PI/180*");
            operacion = operacion.replaceAll("tan(", "Math.tan(Math.PI/180*");
        }
        operacion = operacion.replaceAll("log", "Math.log10");
        operacion = operacion.replaceAll("ln", "Math.log");
        operacion = operacion.replaceAll("e", "Math.E");
        operacion = operacion.replaceAll("√", "Math.sqrt");
        operacion = operacion.replaceAll("^", "**");
            
    }

    //inversas 
    else{
        if(flag_rad_degre == 0){
            operacion = operacion.replaceAll("arcsin", "Math.asin");
            operacion = operacion.replaceAll("arccos", "Math.acos");
            operacion = operacion.replaceAll("arctan", "Math.atan");

        }
        else{
            operacion = operacion.replaceAll("arcsin(", "Math.asin(Math.PI/180*");
            operacion = operacion.replaceAll("arccos(", "Math.acos(Math.PI/180*");
            operacion = operacion.replaceAll("arctan(", "Math.atan(Math.PI/180*");
        }
        operacion = operacion.replaceAll("e^", "Math.E**");
        operacion = operacion.replaceAll("10^", "10**");
        operacion = operacion.replaceAll("^2", "**2");
        operacion = operacion.replaceAll(")^(1/", ")**(1/"); //mirar
       
    }
    operacion = cambiar_factorial(operacion)
    //operacion = operacion.replaceAll("!", "math.factorial");   //revisar
    operacion = operacion.replaceAll("π", "Math.PI");
    operacion = operacion.replaceAll("%", "1/100");
    operacion = operacion.replaceAll("EXP", "*10**");
    operacion = operacion.replaceAll("x", "*");
    operacion = operacion.replaceAll("÷", "/");
    operacion = operacion.replaceAll("Ans", answer);

    try {
        answer = eval(operacion);
    } catch (error) {
        
        alert('Coloque parentesis al memonte de realizar una función')
    }

    resultado.innerHTML = "<p style='float:left;'>" + answer + "</p>";
    flag_resultado = 1;

    
}


function cambiar_factorial(cadena) {
    var pos = cadena.indexOf("!");
    var numero;
    while (pos != -1) {
        for (var i = pos - 1; i >= 0; i--) {
                if (cadena[i] == "+" || cadena[i] == "-" || cadena[i] == "*" || cadena[i] == "/" || cadena[i] == "%" || cadena[i] == "(") {                
                    break;
                }
                else {
                    numero += cadena[i];
                }
            }
            numero = trocar(numero);
            cadena = cadena.replaceAll(numero+"!","math.factorial(" + numero + ")");
            pos = cadena.indexOf("!");
            numero = "";
    }
    return cadena;
}

function trocar(cadena) {
    var x = cadena.length;
    var cadenatrocar= "";
    while (x >= 0) {
        cadenatrocar = cadenatrocar + cadena.charAt(x);
        x--;
    }
    return cadenatrocar;
}