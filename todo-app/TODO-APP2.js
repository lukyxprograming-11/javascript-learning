//TODO APP-2 

let todos = JSON.parse(localStorage.getItem("todos") || "[]") 
let currentFilter = "all"
const addBtn = document.getElementById("addBtn")
const input = document.getElementById("todoInput")
const ul = document.getElementById("todoList")
const counter = document.getElementById("counter")
const select = document.getElementById("category")
const filters = document.querySelector(".filters")
const clearBtn = document.getElementById("clearBtn")


function saveTos(){

JSON.stringify(todos)


localStorage.setItem("todos", JSON.stringify(todos) )



}

function addTodo(){

    const text = input.value.trim()
    const category = select.value.trim()
    

    if(text){

        todos.push({id: Date.now(),text: text, done: false, category })
    }
    input.value=""
    

}

function render(){
            
let filteredTodos 
       if(currentFilter === "all"){
                                filteredTodos = todos

                                }else if (currentFilter === "active"){
                                    filteredTodos = todos.filter(todo => !todo.done)
                                }else {
                                    filteredTodos = todos.filter(todo => todo.done)
                                }


    ul.innerHTML = filteredTodos.map((todo)=> `<li class="${todo.done? "done" : ""}" data-id="${todo.id}"> 
                                             <div class="left"><span class="category">${todo.category}</span> <span class="text">${todo.text}</span> <input class="edit" hidden></div> 
                                             <div class="right"> <button class="edit-btn" data-id="${todo.id}">✏️</button> <button class="delete-btn" data-id="${todo.id}">X</button></div> </li>`)
    .join("")

document.querySelectorAll(".filter-btn").forEach(btn =>{btn.classList.remove("active")})

const activeBtn = document.querySelector(`[data-filter="${currentFilter}"]`)

if(activeBtn){
    activeBtn.classList.add("active")
}

    const complete = todos.filter((todo)=> todo.done)
    const uncomplete = todos.filter((todo)=> !todo.done)

    counter.innerHTML= "Uncompleted: " + uncomplete.length + " | Completed: " + complete.length
}



render()

addBtn.addEventListener("click", function(){

        addTodo()
        saveTos()
        render()

})

input.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        addTodo()
        saveTos()
        render()
    }

})

ul.addEventListener("click", function(event){
    if (event.target.tagName === "INPUT") return

    if(event.target.classList.contains("delete-btn")){

        const id = Number(event.target.dataset.id)
        
        const index = todos.findIndex(todo => todo.id === id)

        if (index !== -1) {
    todos.splice(index, 1)
}
        saveTos()

        render()
        return
    }
    
    
    if(event.target.classList.contains("edit-btn")){
    const li = event.target.closest("li")
    const id = Number(li.dataset.id)
    if (!li) return

    const span = li.querySelector(".text")
    const input = li.querySelector(".edit")

    const todo = todos.find(todo => todo.id === id)
    if (!todo) return

    span.style.display = "none"
    input.hidden = false

    input.value = todo.text
    input.focus()

    return
          }
    
    
   
        const li = event.target.closest("li")
        if (!li) return
    
        const id = Number(li.dataset.id)

        const todo = todos.find(todo => todo.id === id)

        if (!todo) return
        

        todo.done = !todo.done

        saveTos()

        render()

    
})

ul.addEventListener("keydown", function(event){

if (event.target.tagName !== "INPUT") return


  if (event.key === "Enter"){

    const li = event.target.closest("li")
    if (!li) return
    const id = Number(li.dataset.id)
    
    const todo = todos.find(todo => todo.id == id)

    const value = event.target.value
    if (!todo) return
    todo.text = value

    saveTos()

        render()

  }
})

filters.addEventListener("click", function(event){

        if(event.target.dataset.filter){
            currentFilter = event.target.dataset.filter

            render()

        }

})

clearBtn.addEventListener("click", function(){

  const activeTodos=  todos.filter(function(todo) {
    return todo.done === false
})

todos = activeTodos 
        saveTos()
        render()
})

