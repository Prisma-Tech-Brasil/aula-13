
# Iterações em Arrays no JavaScript

## O que são iterações?

Iterar significa percorrer cada elemento de uma lista (ou array) para realizar alguma ação com eles. No JavaScript, temos diversas formas de fazer isso, utilizando métodos específicos dos arrays.

## Por que iterar arrays?

Imagine que você tem uma lista com nomes de alunos e deseja exibir todos no console. Ao invés de acessar manualmente cada item da lista, você pode usar uma **iteração** para automatizar esse processo, tornando o código mais simples e eficiente.

## Métodos de Iteração

### 1. `for` tradicional

Uma estrutura clássica que permite percorrer um array usando índices:

```js
const frutas = ["maçã", "banana", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

### 2. `for...of`

Percorre diretamente os valores dos elementos no array:

```js
const frutas = ["maçã", "banana", "uva"];

for (const fruta of frutas) {
  console.log(fruta);
}
```

### 3. `forEach`

Executa uma função para cada item do array:

```js
const frutas = ["maçã", "banana", "uva"];

frutas.forEach(function(fruta) {
  console.log(fruta);
});
```

### 4. `map()`

Cria um **novo array** com base na transformação de cada item:

```js
const numeros = [1, 2, 3];

const dobrados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(dobrados); // [2, 4, 6]
```

### 5. `filter()`

Cria um novo array com os itens que **passam em uma condição**:

```js
const numeros = [1, 2, 3, 4];

const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(pares); // [2, 4]
```

### 6. `find()`

Retorna o **primeiro elemento** que satisfaz a condição:

```js
const frutas = ["maçã", "banana", "uva"];

const encontrada = frutas.find(function(fruta) {
  return fruta.startsWith("b");
});

console.log(encontrada); // "banana"
```

## Conclusão

As iterações tornam o trabalho com arrays mais dinâmico e prático. Ao invés de lidar com cada item manualmente, podemos usar métodos como `forEach`, `map`, `filter`, e outros para aplicar lógicas mais limpas e reutilizáveis.

Esses conceitos serão fundamentais para trabalharmos com dados dinâmicos em aplicações reais!
