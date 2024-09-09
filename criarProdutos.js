 const { produtos } = require('./data');

 function criarProdutos(req, res){
    const novoProduto = {
        id: produtos.lenght + 1,
        nome: req.body.nome,
        categoria: req.body.categoria,
        preço: req.body.preço,
        estoque: req.body.estoque
    };
    produtos.push(novoProduto)
    res.status(201).send({message:'Produto cadastrado com sucesso!', produto: novoProduto});

}

module.exports = criarProdutos;