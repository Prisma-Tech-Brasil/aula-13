async function executar() {
  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

executar();
