const botao = document.querySelector("#botao")
const titulo = document.querySelector("#titulo")

function trocaTexto(){
    titulo.innerText = "Preto não"

}

botao.addEventListener("click", trocaTexto)