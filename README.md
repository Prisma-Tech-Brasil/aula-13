
# 📘 JavaScript Assíncrono – Entendendo a Concorrência e o Fluxo Assíncrono

JavaScript é uma linguagem **single-threaded** — ou seja, executa uma instrução por vez, em sequência. Mas mesmo assim, conseguimos lidar com **tarefas assíncronas**, como requisições de rede, timers e leitura de arquivos, sem travar a aplicação.

Este material cobre os seguintes tópicos:

- Single-thread vs Multi-thread  
- Concorrência e Event Loop  
- Callbacks  
- Promises  
- Async/Await

---

## 🧠 Single-thread vs Multi-thread

- **Single-thread:** JavaScript no navegador e no Node.js roda numa única thread. Isso significa que ele executa **uma tarefa por vez**.
- **Multi-thread:** Outras linguagens como Java ou C++ podem usar várias threads para executar tarefas ao mesmo tempo.

Mas então, como o JS lida com tarefas demoradas (ex: acessar uma API)?  
👉 Ele **não paraleliza** com threads, mas delega certas tarefas para **APIs externas** (como Web APIs no navegador ou libuv no Node.js) e continua rodando.

---

## 🔄 Concorrência e o Event Loop

O JavaScript usa um **modelo assíncrono baseado em eventos**. O mecanismo que faz isso funcionar é o **Event Loop**.

1. O código principal entra na **Call Stack** e é executado.
2. Tarefas assíncronas vão para a **Web API** (ex: `setTimeout`, `fetch`).
3. Quando terminam, entram na **Callback Queue**.
4. O **Event Loop** verifica se a Call Stack está vazia, e se estiver, move tarefas da fila para a pilha.

**Visual simplificado:**

```txt
[ Call Stack ]
     |
     v
[ Event Loop ] <--- [ Callback Queue ] <--- [ Web APIs ]
```

---

## 🔁 Callbacks

Um **callback** é uma função passada como argumento para ser executada depois de uma operação.

```js
function saudacao(nome, callback) {
  console.log(`Olá, ${nome}!`);
  callback();
}

saudacao("Lucas", function() {
  console.log("Seja bem-vindo!");
});
```

### Problema: Callback Hell

Quando você encadeia muitos callbacks, o código vira uma pirâmide difícil de entender.

```js
fazerAlgo(function() {
  fazerOutraCoisa(function() {
    esperarMaisUmPouco(function() {
      console.log("Callback Hell!");
    });
  });
});
```

---

## 🧪 Promises

Uma **Promise** representa algo que **vai acontecer no futuro** — sucesso (resolve) ou falha (reject).

```js
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
```

### Estados de uma Promise:

- **Pending:** ainda está acontecendo.
- **Fulfilled:** deu certo.
- **Rejected:** deu erro.

---

## ✨ Async/Await

O `async/await` é uma forma mais legível de lidar com Promises, como se fosse código síncrono.

```js
async function executar() {
  try {
    const resposta = await fetch("https://api.exemplo.com");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}
```

---

## ✅ Quando usar cada um?

| Tarefa                           | Melhor abordagem |
|----------------------------------|------------------|
| Pequenas ações sequenciais       | Callbacks        |
| Operações encadeadas ou complexas| Promises         |
| Código mais limpo e fácil        | Async/Await      |

---

## 📚 Resumo

- JS é single-thread, mas lida com concorrência via Event Loop.
- Callbacks são funções executadas depois de algo acontecer.
- Promises tornam o código mais legível e tratam erros com `.catch`.
- Async/Await é a forma mais moderna e clara de usar Promises.
