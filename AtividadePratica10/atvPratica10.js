// Atividade Prática 10 - Fundamentos do JavaScript
// Aluno: André Renato Silva Braga de Menezes

// cos():  Retorna o cosseno do número informado.
var angulo = 45; // Ângulo em graus
var radianos = angulo * (Math.PI / 180); // Conversão para radianos
var cosseno = Math.cos(radianos);
console.log("O cosseno de " + angulo + " graus é: " + cosseno);

// max(): Retorna o valor máximo dos números dados.
// min(): Retorna o valor mínimo dos números informados.
var numeros = [10, 5, 8, 2, 20];
var valorMaximo = Math.max(...numeros);
var valorMinimo = Math.min(...numeros);
console.log("O valor máximo é: " + valorMaximo);
console.log("O valor mínimo é: " + valorMinimo);

// random(): Retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo).
var numeroAleatorio = Math.random();
console.log("Número aleatório: " + numeroAleatorio);
