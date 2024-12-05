let totalGeral;
limpar();

function adicionar() {
    //recuperar valores do nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    if(!produto || produto.trim() == '') {
        alert('Selecione um produto válido.');
        return
    }
    let quantidade = document.getElementById('quantidade').value;
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Insira uma quantidade válida.');
        return
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    
    // alert(nomeProduto);
    // alert(valorUnitario);
    // alert(quantidade.value);
    //calcular o preço, o subtotal
    let preco = quantidade * valorUnitario;
    // alert(preco);
    //adicionar ao carrinho.
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade') = 0
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}