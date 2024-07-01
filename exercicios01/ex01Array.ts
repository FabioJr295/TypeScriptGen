import readlinesync = require('readline-sync');

const cores : Array<string> = new Array<string>(); 


while(cores.length < 5){
    cores.push(readlinesync.question('\nDigite a cor: '));
}

console.log(`\nCores adicionadas: ${cores}`);
console.log(`\nCores adicionadas: ${cores.sort()}`);