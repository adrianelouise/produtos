const { produtos } = require('./data');

const deletarProdutos = (req, res) => {
  const { id } = req.params;
  const index = produtos.findIndex((p) => p.id == id);

  if (index === -1) {
    return res.status(404).send('Produto não encontrado! ');
  }
  const prodrutoDeletado = produtos.splice(index, 1)[0];

  res.status(200).send({
    message: 'Produto deletado com sucesso!',
    produto: prodrutoDeletado
  })
}

module.exports = deletarProdutos;