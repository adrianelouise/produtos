// buscarProdutos.js
const { produtos } = require('./data');

function buscarProdutos(req, res) {
    const { categoria } = req.query;

    if (!categoria) {
        return res.status(400).send({ message: 'Parâmetro de categoria é obrigatório' });
    }

    const resultados = produtos.filter(produto => 
        produto.categoria.toLowerCase() == categoria.toLowerCase()
    );

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Nenhum produto foi encontrado' });
    }

    res.status(200).send(resultados);
}

module.exports = buscarProdutos;
