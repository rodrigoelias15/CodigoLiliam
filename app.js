const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'rodrigo',
  password: '123',
  database: 'meu_formulario'
})

connection.connect()

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080 || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/view/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

app.use(express.json());

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

// Middlewares
const cors = require('cors');
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
