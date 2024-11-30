// Classe Produto
class Produto {
  constructor(nome, preco, descricao) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
  }

  // Método para formatar o preço
  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
  }

  // Método para adicionar o produto ao HTML
  renderizar() {
    const div = document.createElement('div');
    div.classList.add('product');

    div.innerHTML = `
      <div>
        <h3>${this.nome}</h3>
        <p>${this.descricao}</p>
        <p><strong>${this.formatarPreco()}</strong></p>
      </div>
      <button onclick="adicionarAoCarrinho('${this.nome}', ${this.preco})">Adicionar ao Carrinho</button>
    `;
    return div;
  }
}

// Lista de produtos
const produtos = [
  new Produto("Notebook", 4500.00, "Notebook com 16GB RAM e SSD 512GB."),
  new Produto("Smartphone", 2500.00, "Smartphone com 128GB de armazenamento."),
  new Produto("Fone de Ouvido", 350.00, "Fone de ouvido com cancelamento de ruído.")
];

// Renderizando produtos na página
const productListElement = document.getElementById('product-list');
produtos.forEach(produto => {
  productListElement.appendChild(produto.renderizar());
});

// Função para adicionar produtos ao carrinho
const carrinho = [];
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

// Função para atualizar o carrinho no HTML
function atualizarCarrinho() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItemsElement.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}`;
    cartItemsElement.appendChild(li);
    total += item.preco;
  });

  totalPriceElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}
