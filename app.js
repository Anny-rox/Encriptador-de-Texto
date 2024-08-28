const btn_copiar = document.getElementById("copiar");
const resultado = document.getElementById("resultado");

const copyToClipboard = async (str) => {
  try {
    await navigator.clipboard.writeText(str);
    console.log("copied");
  } catch (error) {
    console.log(error);
  }
};

function encriptar() {
  let texto = document.getElementById("texto_original").value;
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.getElementById("resultado").textContent = textoCifrado;
  document.getElementById("texto_original").value = "";
}

function desencriptar() {
  let texto = document.getElementById("texto_original").value;
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.getElementById("resultado").textContent = textoCifrado;
  document.getElementById("texto_original").value = "";
}

btn_copiar.addEventListener("click", () => {
  copyToClipboard(resultado.textContent);
});
