const { produtos } = require('./data');

const atualizarProdutos = (req, res) => {
    const { id } = req.params;
    const novoNome = req.body.nome;
    const novoCategoria = req.body.categoria;
    const novoPreco = req.body.preco;
    const novoEstoque = req.body.estoque;

    const produto = produtos.find((p) => p.id == id);

    if (!produtos) {
        return res.status(404).send({ message: 'Produto não encontrado!' })
    }

    produtos.nome = novoNome;
    produto.categoria = novoCategoria;
    produto.preco = novoPreco;
    produto.estoque = novoEstoque;
    res.status(200).send({ message: 'Dados do produto atualizados com sucesso!', produto: produto });
}

module.exports = atualizarProdutos;