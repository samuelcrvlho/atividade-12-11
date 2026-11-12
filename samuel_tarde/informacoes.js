let nome = "samuel";
let idade = 20;
let curso = "estética";
let mensalidade = 250;
let vagas = 10;
let desconto = true;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Curso: " + curso);
console.log("Mensalidade: " + mensalidade);
console.log("Vagas: " + vagas);
console.log("Desconto: " + desconto);

if(idade < 16) {
    console.log("Você não pode se inscrever no curso.");
} else if(idade >= 16 && idade <= 17) {
    console.log("Você pode se inscrever no curso com autorização dos pais.");
} else {
    console.log("Você pode se inscrever no curso.");
}

if (vagas > 0) {
    console.log("Ainda há vagas disponíveis.");
} else {
    console.log("Não há vagas disponíveis.");
}

if(desconto== true) {
    let novoValor = mensalidade - (mensalidade * 0.15);
    console.log("O valor com desconto é: " , novoValor);
}else {
    console.log("Não há desconto disponível.", mensalidade);
}

if (mensalidade <= 200) {
    console.log("O valor da mensalidade é acessível.");
} else if (mensalidade <= 400) {
    console.log("O valor da mensalidade é razoável.");
} else {
    console.log("curso premium");
}