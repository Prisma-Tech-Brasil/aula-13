const promessa = new Promise((resolve, reject) => {
  const sucesso = true;
  if (sucesso) {
    resolve("Deu certo!");
  } else {
    reject("Deu erro!");
  }
});

promessa
  .then((mensagem) => console.log(mensagem))
  .catch((erro) => console.error(erro));
