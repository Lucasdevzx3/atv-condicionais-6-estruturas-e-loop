
//Faça um algoritmo que leia a idade de vários alunos de uma turma.
//O programa vai parar quando for digitada a idade 999. No final,
//mostre quantos alunos existem na turma e qual é a média de idade
//do grupo.




let totalAges = 0;
let count = 0;

for (let i = 0; i < 100; i++) {
    let age = (prompt("Insira a idade do aluno (ou digite 999 para sair):"));
    if (age === 999) {
        break;
    }
    totalAges += age;
    count++;
}

let averageAge = totalAges / count;

console.log("Existem " + count + " alunos na turma.");
console.log("A média de idade dos alunos é " + averageAge);
