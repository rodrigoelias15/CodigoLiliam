const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Iniciar o servidor
const app = express();
const port = 3000;

// Configurações do banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'meu_formulario',
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

// Middlewares
app.use(cors());
app.use(express.json()); // Para lidar com JSON
app.use(express.static('view'));

// Rota para inserir produtos
app.post('/mercadoria', (req, res) => {

  const { nome, preco, id, disponivel } = req.body; 
  const sql = "INSERT INTO mercadorias (nome, preco, id, disponivel) VALUES ('"+req.body.nome+"', "+req.body.preco+", "+req.body.id+" , "+req.body.disponivel+"); " // 

  console.log(sql, nome, preco, id, disponivel);

  connection.execute(sql, [nome, preco, id, disponivel ? 1 : 0], (err, results) => { 
      if (err) {
          console.error('Erro na inserção:', err);
          res.status(500).send('ERRO'); // Retornar erro 500 em caso de falha
      } else {
          res.status(201).send('Produto inserido com sucesso'); // Retornar sucesso
      }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log('Servidor escutando a porta: ' + port);
});



