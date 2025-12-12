/* const btn1somar = document.querySelector("#somar")

btn1.addEventListener("click", somar)

function somar(){
    let primeiroValor = Number(prompt("Digite o primeiro Valor"))
    let segundoValor = Number(prompt("Digite o Segundo Valor"))
   let soma = primeiroValor + segundoValor

    alert(soma)
}

const btn2subtração = document.querySelector("#subtração")

btn2.addEventListener("click", subtração)

function subtração(){
    let primeiroValor = Number(prompt("Digite o primeiro Valor"))
    let segundoValor = Number(prompt("Digite o Segundo Valor"))
   let subtração = primeiroValor - segundoValor

    alert(subtração)
}

const btn3multiplicação = document.querySelector("#multiplicacao")

btn3.addEventListener("click", multiplicacao)

function multiplicacao(){
    let primeiroValor = Number(prompt("Digite o primeiro Valor"))
    let segundoValor = Number(prompt("Digite o Segundo Valor"))
   let multiplicacao = primeiroValor * segundoValor

    alert(multiplicacao)
}

const btn4divisao = document.querySelector("#divisao")

btn4.addEventListener("click", divisao)

function divisao(){
    let primeiroValor = Number(prompt("Digite o primeiro Valor"))
    let segundoValor = Number(prompt("Digite o Segundo Valor"))
   let divisao = primeiroValor / segundoValor

    alert(divisao)
} */

    const btnsomar=document.querySelector("#somar")
    const btnsubtrair=document.querySelector("#subtrair")
    const btnmultiplicar=document.querySelector("#multiplicar")

    const inputPrimeiroValor=document.querySelector("#primeiroNumero")
     const inputSegundoValor=document.querySelector("#segundoNumero")

     const divRes = document.querySelector(".res")

     function somar(){
        let resultado = Number(inputPrimeiroValor.value) + Number(inputSegundoValor.value)
        divRes.innerText = resultado
     }

     btnsomar.addEventListener("click", somar)

     function subtrair(){
        let resultado = Number(inputPrimeiroValor.value) - Number(inputSegundoValor.value)
        divRes.innerText = resultado
     }
     
     btnmultiplicar.addEventListener("click", multiplicar)

          function multiplicar(){
        let resultado = Number(inputPrimeiroValor.value) * Number(inputSegundoValor.value)
        divRes.innerText = resultado
     }
     
     btnmultiplicar.addEventListener("click", multiplicar)
