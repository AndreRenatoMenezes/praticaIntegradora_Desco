//Atividade Prática 14 - Arrays II
//Aluno: André Renato Silva Braga de Menezes
var matriz = new Array(4);
for (var i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(5);
}
for (var lin = 0; lin < matriz.length; lin++) {
    for (var col = 0; col < matriz[lin].length; col++) {
        var numeroBase = lin + 2;
        var mult = numeroBase * (col + 1);
        matriz[lin][col] = mult;
    }
}
for (var i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}