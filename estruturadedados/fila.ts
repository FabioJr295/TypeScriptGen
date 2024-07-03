import {Queue} from "../interface/Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
    fila.enqueue(i)
}

console.log("Exibir todos os elementos da fila: ");

fila.printQueue();

console.log("Remover elemento: " + fila.dequeue());

fila.printQueue();

console.log("Exibir o primeiro elemento da fila: " + fila.peek());

console.log("O elemento 4 existe na fila? " + fila.contains(4));

fila.clear();

console.log("A fila esta vazia? " + fila.isEmpty());
