import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>();

for(let i = 0; i < 10; i++){
    numeros.add(readlinesync.questionInt('Digite um numero inteiro: '));
}

console.log(numeros);