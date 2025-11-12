const visor = document.querySelector("#visor");
const botoes = document.querySelectorAll("button");

let operacaoAtual = "";

botoes.forEach((botao) => {
botao.addEventListener("click", () => {
const valor = botao.value;

if (botao.id === "igual") {
try {
visor.textContent = eval(operacaoAtual);
operacaoAtual = visor.textContent; // Armazena o resultado para continuar cálculos
} catch {
visor.textContent = "Erro";
operacaoAtual = "";
}
} else if (valor === "C") {
operacaoAtual = "";
visor.textContent = "0";
} else {
operacaoAtual += valor;
visor.textContent = operacaoAtual;
}
})
})
