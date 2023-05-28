// Criando uma matriz com 4 linhas e 5 colunas
var matriz = new Array(4);
for (var i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(5);
}

// Preenchendo a matriz com os múltiplos
for (var linha = 0; linha < matriz.length; linha++) {
    for (var coluna = 0; coluna < matriz[linha].length; coluna++) {
        // Determinando o número base para cada linha
        var numeroBase = linha + 2;

        // Calculando o múltiplo atual
        var multiplo = numeroBase * (coluna + 1);

        // Preenchendo o valor na matriz
        matriz[linha][coluna] = multiplo;
    }
}

// Exibindo a matriz no console
for (var i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}
