const todoInput = document.querySelector(".task-input")
const todoBtn = document.querySelector(".task-btn")
const todoResult = document.querySelector(".task-result")


function addTodo(e) {

    e.preventDefault();
    console.log(todoInput.value)

    const todoLi = document.createElement("li")
    todoLi.classList.add("shadow")
    todoLi.classList.add("border")
    todoLi.classList.add("my-1")
    todoLi.classList.add("task-item")


    const todoTitel = document.createElement("h5")
    todoTitel.classList.add("ms-2")
    todoTitel.classList.add("d-inline-block")
    todoTitel.classList.add("w-75")

    todoTitel.innerText = todoInput.value
    todoLi.appendChild(todoTitel)
    todoResult.appendChild(todoLi)

    const todoComplete = document.createElement("button")
    todoComplete.classList.add("btn")
    todoComplete.classList.add("btn-primary")
    todoComplete.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoLi.appendChild(todoComplete)

    const tododelete = document.createElement("button")
    tododelete.classList.add("btn")
    tododelete.classList.add("btn-danger")
    tododelete.innerHTML = '<i  class="fa-solid fa-trash"></i>'
    todoLi.appendChild(tododelete)




todoInput.value =''
}
function toggleTodo(e){
   const item = e.target
   console.log('item.classList')
   if (item.classList[2] == 'fa-check'){
    console.log('completed task')
   item.parentElement.parentElement.classList.toggle('ccompelted')

 }else{
    console.log('deleted task')
    item.parentElement.parentElement.classList.toggle('delete')
}
}







todoBtn.addEventListener('click', addTodo)
todoResult.addEventListener('click',toggleTodo)