const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const temAlgum = lista.some((num) => num === 3);
console.log(temAlgum);

const numeroEncontrado = lista.find((num) => num === 3);
console.log(numeroEncontrado);

const numPares = lista.filter((num) => num % 2 === 0); // par
console.log(numPares);
const numImpares = lista.filter((num) => num % 2 === 1); // impar
console.log(numImpares);

const total = lista.reduce(
  (acumulador, elemento) => acumulador + elemento
);
console.log(total);

const frutas = [
  "maçã", "ameixa", "pitaya", "tomate", "banana", "carambola"
];
frutas.map((fruta, indice) => console.log(indice + 1, fruta));
