  const express = require('express');
  const app = express();
  const port = 3000;
  app.use(express.json());


const criarProdutos = require('./criarProdutos');
app.post('/produtos', criarProdutos);

const listarProdutos = require('./listarProdutos');
app.get('/produtos',listarProdutos);

const atualizarProdutos = require('./atualizarProdutos');
app.put('/produtos/:id', atualizarProdutos);

const deletarProdutos = require('./deletarProdutos');
app.delete('/produtos/:id', deletarProdutos);

const buscarProdutos =  require('./buscarProdutos');
app.get('/produtos/busca', buscarProdutos);

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!');

});

app.listen(port,() => {
     console.log(`Servidor rodando em http://localhost:${port}`);

});
