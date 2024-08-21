// Criando um objeto pessoa
const pessoa = {
  nome: "José Silva",
  idade: 32,
  cpf: "1231313135",
  turma: "Javascript"
};

// Acessando objetos
console.log(`O nome do estudante é ${pessoa.nome}`);
console.log(
  `Os três primeiros digitos do cpf são ${pessoa.cpf.substring(0, 3)}`
);

// Notação de colchetes
console.log(pessoa["nome"]);
console.log(pessoa["turma"]);

// Adicionando uma propriedade
pessoa.petEstimacao = {
  animal: "Cachorro",
  raca: "Poodle",
  nome: "Beethoven"
};

console.log(pessoa.petEstimacao);

// Alterando uma propriedade
pessoa.idade = pessoa.idade + 1;
console.log(pessoa.idade);

// Excluindo uma propriedade
const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago"
  },
  status: "desaparecido"
};

delete objPersonagem.aliado;
console.log(objPersonagem.aliado);

// Tipos de dados e valores
const estudante = {
  nome: "João das Neves",
  idade: 14,
  cpf: "000002454",
  turma: "Esgrima",
  bolsista: false,
  telefones: ["25617811615", "163186136134"],
};

console.log(estudante.telefones[0]);

estudante.endereco = {
  rua: 'Queda do Bran',
  numero: '5',
  complemento: 'Torre quebrada'
}

console.log(estudante.endereco);


// Lista de objetos
const personagensHarryP = [
  {
    nome: 'Harry Potter',
    casa: 'Grifinória',
    idade: 11,
    varinha: 'Madeira de azevinho, com núcleo de pena de fênix',
    patrono: 'Cervo'
  },
  {
    nome: 'Hermione Granger',
    casa: 'Grifinória',
    idade: 11,
    varinha: 'Madeira de videira, com núcleo de cabelo de unicórnio',
    patrono: 'Lontra'
  },
  {
    nome: 'Ron Weasley',
    casa: 'Grifinória',
    idade: 11,
    varinha: 'Madeira de freixo, com núcleo de cabelo de unicórnio',
    patrono: 'Cão'
  }
];

console.log(personagensHarryP)

// Métodos (funções)
const personagensHarryPotter = [
  {
    nome: 'Harry Potter',
    casa: 'Grifinória',
    idade: 11,
    varinha: 'Madeira de azevinho, com núcleo de pena de fênix',
    patrono: 'Cervo',
    feitiços: ['Expelliarmus', 'Lumos', 'Stupefy'],
    usarFeitico: function (feitico) {
      return `${this.nome} usa o feitiço ${feitico}.`;
    }
  },
  {
    nome: 'Hermione Granger',
    casa: 'Grifinória',
    idade: 11,
    varinha: 'Madeira de videira, com núcleo de cabelo de unicórnio',
    patrono: 'Lontra',
    feitiços: ['Alohomora', 'Levioso', 'Reparo'],
    usarFeitico: function (feitico) {
      return `${this.nome} usa o feitiço ${feitico}.`;
    }
  },
  {
    nome: 'Ron Weasley',
    casa: 'Grifinória',
    idade: 11,
    varinha: 'Madeira de freixo, com núcleo de cabelo de unicórnio',
    patrono: 'Cão',
    feitiços: ['Rictusempra', 'Wingardium Leviosa', 'Engorgio'],
    usarFeitico: function (feitico) {
      return `${this.nome} usa o feitiço ${feitico}.`;
    }
  }
];

console.log(personagensHarryPotter[0].usarFeitico('Lumos'));

console.log(personagensHarryPotter[1].feitiços);

// Percorrendo objetos
for (let chave in personagensHarryPotter) {
  console.log(personagensHarryPotter[chave].nome);
}

for (const { nome } of personagensHarryPotter) {
  console.log(nome);
}