const textArea = document.querySelector(".textArea");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnCopiar() {
    mensagem.select();
    document.execCommand("copy");
    mensagem.value = "";    
    alert("Seu texto foi copiado.");
}

//A letra "e" == "enter"
//A letra "i" == "imes"
//A letra "a" == "ai"
//A letra "o" == "ober"
//A letra "u" == "ufat"

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o" , "ober"] ,["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i] [0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar (stringEncriptada) {

    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o" , "ober"] ,["u" , "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i] [1]));{
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}