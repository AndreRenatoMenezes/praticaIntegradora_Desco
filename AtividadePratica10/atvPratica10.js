// Exemplo do uso dos métodos do objeto Math

// Calcular o cosseno de um ângulo
var angulo = 45; // Ângulo em graus
var radianos = angulo * (Math.PI / 180); // Conversão para radianos
var cosseno = Math.cos(radianos);
console.log("O cosseno de " + angulo + " graus é: " + cosseno);

// Encontrar o valor máximo e mínimo de um conjunto de números
var numeros = [10, 5, 8, 2, 20];
var valorMaximo = Math.max(...numeros);
var valorMinimo = Math.min(...numeros);
console.log("O valor máximo é: " + valorMaximo);
console.log("O valor mínimo é: " + valorMinimo);

// Gerar um número aleatório entre 0 e 1
var numeroAleatorio = Math.random();
console.log("Número aleatório: " + numeroAleatorio);
