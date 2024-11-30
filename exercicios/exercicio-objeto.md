# 🏠 Exercício de Casa: Objetos em JavaScript

## 📝 Instruções
Agora que você aprendeu o básico sobre objetos em JavaScript, vamos praticar! Complete o exercício abaixo, que ajudará a consolidar os conceitos.

## 📚 Desafio: Sistema de Cadastro Simples

Crie um sistema de cadastro de **alunos** usando objetos. Siga os passos abaixo:

1. **Crie um objeto `aluno` com as seguintes propriedades:**
   - `nome` (string)
   - `idade` (número)
   - `curso` (string)
   - `notas` (array de números, representando as notas do aluno)
   - `adicionarNota` (método que recebe uma nota como parâmetro e a adiciona ao array `notas`)

2. **Adicione um método chamado `calcularMedia` que:**
   - Retorna a média das notas do aluno.

3. **Crie uma função `exibirInformacoes` que:**
   - Exibe todas as informações do aluno (nome, idade, curso e média das notas).

### 💡 Exemplo de Como o Objeto Pode Ser Utilizado:
```javascript
const aluno = {
  nome: "Ana",
  idade: 20,
  curso: "Engenharia",
  notas: [8, 7.5, 9],
  adicionarNota: function(nota) {
    this.notas.push(nota);
  },
  calcularMedia: function() {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  }
};

// Adicionando uma nova nota
aluno.adicionarNota(10);

// Calculando a média
console.log("Média:", aluno.calcularMedia());

// Exibindo informações
function exibirInformacoes(aluno) {
  console.log(`Nome: ${aluno.nome}`);
  console.log(`Idade: ${aluno.idade}`);
  console.log(`Curso: ${aluno.curso}`);
  console.log(`Média das notas: ${aluno.calcularMedia()}`);
}

exibirInformacoes(aluno);
```