function criarTodo() {
    var novaLi = document.createElement('li');
    var textnode = document.createTextNode("Water")
    novaLi.appendChild(textnode)
    document.getElementById("itens").appendChild(novaLi)
  }

