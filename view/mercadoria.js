function incMercadoria(){
    const novoProduto = {
        'nome' : document.getElementById('productName').value,
        'preco' : document.getElementById('productPrice').value,
        'id' : document.getElementById('id').value,
        'disponivel' : document.getElementById('disponivel').value,
    }
    console.log('incluir registro : ')
    console.log(novoProduto)
    const req = new XMLHttpRequest()
    req.open('POST','http://localhost:3000/mercadoria/')
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.onload = () => { 
        alert('Registro incluido')
        document.getElementById('productName').value = ""
        document.getElementById('productPrice').value = ""
        document.getElementById('id').value = ""
        document.getElementById('disponivel').value = ""
     

        //carregaTabela();
      
    }
      req.send(JSON.stringify(novoProduto))
}

  