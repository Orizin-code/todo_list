const addButton = document.querySelector('.todo-button')
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')

const addTodo = () => {
  alert(`タスク追加:${todoInput.value}`)
  const newTodo = document.createElement('li')
  todoList.appendChild(newTodo)
}

addButton.addEventListener('click', addTodo)
