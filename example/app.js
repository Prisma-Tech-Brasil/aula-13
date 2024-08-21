function ContaBancaria (titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  

  depositar = function(valor) {
    this.saldo = this.saldo + valor
    console.log(`Valor de ${valor.toFixed(2)} depositado com sucesso.`)
  }

  retirar = function(valor) {
    if (valor > 0) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Retirada de R$${valor.toFixed(2)} realizada com sucesso.`);
      } else {
        console.log('Saldo insuficiente para a retirada.');
      }
    } else {
      console.log('O valor da retirada deve ser positivo.');
    }
  }

  consultarSaldo = function() {
    console.log(`O saldo atual é: ${this.saldo.toFixed(2)}.`)
  }
}