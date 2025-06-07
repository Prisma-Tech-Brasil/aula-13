function saudacao(nome, callback) {
  console.log(`Olá, ${nome}!`);
  callback();
}

saudacao("Lucas", function () {
  console.log("Seja bem-vindo!");
});

/* 
fazerAlgo(function() {
  fazerOutraCoisa(function() {
    esperarMaisUmPouco(function() {
      console.log("Callback Hell!");
    });
  });
});
*/
