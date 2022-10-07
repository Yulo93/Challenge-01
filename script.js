function encriptar(){
    var texto = document.getElementById("textInput").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea u oracion
    //m es para que afecte a multiples parrafos
    var cifrado = texto.replace(/e/igm,"enter");
    var cifrado = cifrado.replace(/o/igm,"ober");
    var cifrado = cifrado.replace(/i/igm,"imes");
    var cifrado = cifrado.replace(/a/igm,"ai");
    var cifrado = cifrado.replace(/u/igm,"ufat");

    document.getElementById("imageRight").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").innerHTML = cifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("textInput").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea u oracion
    //m es para que afecte a multiples parrafos
    var cifrado = texto.replace(/enter/igm,"e");
    var cifrado = cifrado.replace(/ober/igm,"o");
    var cifrado = cifrado.replace(/imes/igm,"i");
    var cifrado = cifrado.replace(/ai/igm,"a");
    var cifrado = cifrado.replace(/ufat/igm,"u");

    document.getElementById("imageRight").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").innerHTML = cifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#text2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
}