const botao = document.querySelector ("#btn")

function chamaFuncao(){
    alert("Ola")
    segundaFuncao()
}

botao.addEventListener(`click`,chamaFuncao)

function segundaFuncao(){
    alert("segunda Função chamada")
    terceiraFuncao()
}

function terceiraFuncao(){
    alert(" terceira Função chamada")
    quartafuncao()

    function quartafuncao(){
        alert("quarta Função chamada")
        quintafuncao()
    }

    function quintafuncao(){
        alert("quinta Função chamada")
        chamaFuncao()
    }
}
