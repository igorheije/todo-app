const valor = document.querySelector('#input')
const buttons = document.getElementsByClassName('excluir')
const numeros = document.getElementById('numberItens')
// const icon = src('./images/icon-cross.svg')
// console.log(icon);

function criarTodo() {
  if(valor.value==="")return null

  var novaLi = document.createElement('li');
  var circle = document.createElement('div')
  var button = document.createElement('button')
  var span = document.createElement('span')
  
  button.classList.add('excluir')
  circle.classList.add('circle');
  
  var textnode = document.createTextNode(valor.value)
  const excluir = document.createTextNode('X')

  button.appendChild(excluir)
  span.appendChild(textnode)
  button.onclick = excluirTodo
  
  novaLi.appendChild(circle)
  novaLi.appendChild(span)
  novaLi.appendChild(button)

  document.getElementById("itens").appendChild(novaLi)
  quantidadeItem()
  valor.value = ""
  valor.focus()
  }

function excluirTodo(event) {
    event.path[1].remove() 
    quantidadeItem()
  }

function quantidadeItem(){    
    numeros.innerHTML = `${buttons.length} itens left`
}

function ativos(){
  console.log('eu');
}

function verTodos(){
  console.log('todos');
}

function completas(){
  console.log('completas');
}