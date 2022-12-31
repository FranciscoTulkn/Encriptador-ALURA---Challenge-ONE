// Funcion para Encriptar la frase del usuario. 

function encriptar () {

    var frase = document.getElementById("textoEncriptar").value.toLowerCase();

    // i = toma todas las letras en mayusculas y minusculas.
    // g = tenga en cuentas toda la liena o la oración completa.
    // m = tenga en cuenta las multiples lineas ingresadas por el usuario.

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

}

// Funcion para Desencriptar la frase del usuario. 

function desencriptar () {

    var frase = document.getElementById("textoEncriptar").value.toLowerCase();

    // i = toma todas las letras en mayusculas y minusculas.
    // g = tenga en cuentas toda la liena o la oración completa.
    // m = tenga en cuenta las multiples lineas ingresadas por el usuario.

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

}

// funcion para copiar el texto encriptado.

function copiar(){
    
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");

}