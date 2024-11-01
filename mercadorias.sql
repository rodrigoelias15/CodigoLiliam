CREATE DATABASE meu_formulario;
USE meu_formulario;

CREATE TABLE `mercadoria` (
 // `id` int(11) NOT NULL AUTO_INCREMENT,  -- Adicionando AUTO_INCREMENT para que o id seja gerado automaticamente
  `nome` varchar(30) NOT NULL,
  `preco` float NOT NULL,
  `disponivel` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`)  -- Definindo `id` como chave primária
)