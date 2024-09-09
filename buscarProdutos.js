 const { produtos } = require('./data');

 function buscarProdutos(req,res) {
    const { categoria } = req.query;
    const resultados = produtos.filter(produto => produto.categoria.toLowerCase().includes(categoria.toLowerCase()));

    if (resultados.lenght === 0){
        return res. status(404).send({ message: 'Nenhum produto foi encontrado'});
    }
    res.status(202).send(resultados);
};

module.exports = buscarProdutos;