const todoInput = document.querySelector(".task-input")
const todoBtn = document.querySelector(".task-btn")
const todoResult = document.querySelector(".task-result")


function addTodo(e) {

    e.preventDefault();
    console.log(todoInput.value)

    const todoLi = document.createElement("li")
    todoLi.classList.add("shadow")
    todoLi.classList.add("border")



    const todoTitel = document.createElement("h5")
    todoTitel.classList.add("ms-2")
    todoTitel.classList.add("d-inline-block")
    todoTitel.classList.add("w-75")
    todoTitel.innerText = todoInput.value
    todoLi.appendChild(todoTitel)
    todoResult.appendChild(todoLi)

    const todoComplete =document.createElement("buttom")
    todoComplete.classList("btn")
    todoComplete.classList("btn-primary")
    todoComplete.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoLi.appendChild(todoComplete)




todoInput.value =''








}
todoBtn.addEventListener('click', addTodo)