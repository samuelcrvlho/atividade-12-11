function BemVindo() {
    console.log("Bem vindo ao sistema escolar!");
}

BemVindo();

function mostrarCurso() {
    console.log("Curso: Desenvolvimento de sistemas");
    console.log("Instituição: Escola tecnologica");
}

mostrarCurso();

function saudarAluno(nome) {
    console.log("Olá, " + nome + " seja bem vindo!");
}

saudarAluno("João");
saudarAluno("Maria");
saudarAluno("Pedro");

function mostrarAluno(nome, curso) {
    console.log("aluno:" + nome + "curso:" + curso);
}

mostrarAluno("João", "programação");

function calcularMedia(n1, n2) {
    let media = (n1 + n2) / 2;
    console.log("A média é: " + media);
}

calcularMedia(80, 60);

function adicionarPontos(nota, pontoExtras) {
    let novaNota = nota + pontoExtras;
    console.log("A nova nota é: " + novaNota);
}

adicionarPontos(65, 10);

function verificarAprovacao(media) {
    if (media >= 60) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

verificarAprovacao(85);
verificarAprovacao(45);
verificarAprovacao(60);

function classificarAluno(nota) {
    if (nota >= 90) {
        console.log("aluno excelente");
    } else if (nota >= 70 ) {
        console.log("aluno bom");
    } else if (nota >= 60 ){
        console.log("aluno regular");
    } else if (nota <= 59 ){
        console.log("insuficiente")
    }
    
}
         
classificarAluno(95);
classificarAluno(75);
classificarAluno(50);

function calcularMensalidade(valor) {
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto

    return valorFinal;

}

let valorFinal = calcularMensalidade(500);
console.log("valor final:")

console.log("valor original: 500$");
console.log("desconto de 10%");
console.log("valor da mensalidade:"+ valorFinal);

function calcularMedia(nome, nota1, nota2){
    return (nota1 + nota2) / 2;
}
function avaliarAluno(nome, nota1, nota2) {
    let media = calcularMedia(nota1, nota2);
    console.log("aluno:" + nome);
    console.log("media:" + media);

    if (media >= 60) {
        console.log("situação: aprovado");
    } else {
        console.log("situação: reprovado");
    }
}

avaliarAluno("Lucas", 80, 70);


