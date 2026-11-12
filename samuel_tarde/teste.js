const prompt = require("prompt-sync")()
let numero = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite outro número: "))

function somar(n1, n2){
    let result = n1 + n2
    console.log(result)
}
somar(numero, numero2)

export default function mostrarMensagem(idade){
    if(idade >= 18){
        console.log("Você é maior de idade")
    } else {
        console.log("Você é menor de idade")
    }   

    usuario = prompt("Digite sua idade: ")
    mostrarMensagem(usuario);
}



/*
function mostraMensagem(nome) {
    console.log("Olá, " + nome + " seja bem vindo!")
}
let usuario = prompt("Digite seu nome: ");
mostraMensagem(usuario);