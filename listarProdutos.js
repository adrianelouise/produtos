  const { produtos } = require('./data');

  const listarProdutos = (req, res) => {
    res.status(202).send(produtos);
  };

  module.exports = listarProdutos;