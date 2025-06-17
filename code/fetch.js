async function obterDados() {
  const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/");
  return await resposta.json();
}

async function buscarDados() {
  try {
    const resultado = await obterDados();
    console.log(resultado);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

buscarDados();
