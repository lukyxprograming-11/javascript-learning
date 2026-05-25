//TODO APP-2 

//UI state

let todos = JSON.parse(localStorage.getItem("todos") || "[]") 
let currentFilter = "all"
let searchText = ""
let currentSort= ""


//DOM references

const addBtn = document.getElementById("addBtn")
const input = document.getElementById("todoInput")
const ul = document.getElementById("todoList")
const counter = document.getElementById("counter")
const select = document.getElementById("category")
const filters = document.querySelector(".filters")
const clearBtn = document.getElementById("clearBtn")
const dateInput = document.getElementById("date")
const search = document.getElementById("search")
const emptyMessage = document.getElementById("emptyMessage")
const clearsearch = document.getElementById("clearsearch")
const duplicateMessage = document.getElementById("duplicateMessage")
const selectPriority = document.getElementById("priority")
const sortSelect = document.getElementById("sortSelect")
const searchResultCounter = document.getElementById ("searchResultCounter")


function saveTos(){

JSON.stringify(todos)


localStorage.setItem("todos", JSON.stringify(todos) )



}

//funkce na main button 

function addTodo(){

    const text = input.value.trim()
    const category = select.value.trim()
    const date = dateInput.value
    const priority = selectPriority.value.trim()
    
           const duplicateTodo = todos.some(todo => todo.text.trim().toLowerCase() === (input.value.trim().toLowerCase()))
           if(duplicateTodo){
           
            return
           }

    if(text){

        todos.push({id: Date.now(),text: text, done: false, category, date, priority })
    }
    input.value=""
    select.value=""
    dateInput.value=""
    selectPriority.value=""
    

}

//funkce na render 

function render(){
            
//DATA PIPELINE

let filteredTodos 
       if(currentFilter === "all"){
                                filteredTodos = todos

                                }else if (currentFilter === "active"){
                                    filteredTodos = todos.filter(todo => !todo.done)
                                }else {
                                    filteredTodos = todos.filter(todo => todo.done)
                                }

let searchTodos = filteredTodos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))


let sortedTodos = searchTodos


if(currentFilter === "all"){
        sortedTodos = [...searchTodos].sort((a, b) => a.done - b.done)
}

if(currentSort === "newest"){
    sortedTodos= [...sortedTodos].sort((a, b) => b.id - a.id)
}

if(currentSort === "alphabetical"){
    sortedTodos = [...sortedTodos].sort((a,b)=> a.text.localeCompare(b.text))
}


    let renderTodos = sortedTodos


// UI STATE / UI SYNC

    document.querySelectorAll(".filter-btn").forEach(btn =>{btn.classList.remove("active")})

const activeBtn = document.querySelector(`[data-filter="${currentFilter}"]`)

if(activeBtn){
    activeBtn.classList.add("active")
}

if(searchTodos.length === 0 && searchText !=="" ){
    emptyMessage.hidden = false 
}else {
    emptyMessage.hidden =  true
}

    const hasCompleted = todos.some(todo => todo.done)

    clearBtn.disabled = !hasCompleted
    clearsearch.disabled = searchText === "" 

//LIST RENDER

ul.innerHTML = renderTodos.map((todo)=>{            //render metadata  

                                                const isOverdue = new Date(todo.date) < new Date() && !todo.done && todo.date

                                                const matchCheck = todo.text.toLowerCase().includes(searchText.toLowerCase())
                                                const matchIndex = todo.text.toLowerCase().indexOf(searchText.toLowerCase())

                                                //render helper data 

                                                let beforeMatch 
                                                let Match 
                                                let afterMatch 

                                                if(searchText !== ""){
                                                    
                                                    beforeMatch = todo.text.slice(0, matchIndex)
                                                    Match = todo.text.slice(matchIndex, matchIndex + searchText.length ) 
                                                    afterMatch = todo.text.slice(matchIndex + searchText.length,)
                                                }else{
                                                    beforeMatch = todo.text
                                                    Match = ""
                                                    afterMatch = ""
                                                }
                                                

        
                                        return `<li class="${todo.done? "done" : ""}" data-id="${todo.id}"> 


                                             <div class="left"> <div class"main-content"> <input type="checkbox" class="checkbox" ${todo.done ? "checked" : ""}> <span class="text">${beforeMatch}${Match ? `<span class="highlight">${Match}</span>` :"" }${afterMatch}</span> </div>
                                             
                                             <div class="metadata"> ${todo.category ? `<span class="category category-${todo.category}">${todo.category}</span>` : ""} 
                                               ${todo.priority ? `<span class="priority priority-${todo.priority}" >${todo.priority}</span>` : ""}  ${todo.date ? `<span class="date ${isOverdue? "overdue" : ""} ">${todo.date}</span>` : ""} </div>
                                                <input class="edit" hidden>  </div>
                                               
                                               


                                             <div class="right"> <button class="edit-btn" data-id="${todo.id}">✏️</button> <button class="delete-btn" data-id="${todo.id}">X</button></div> </li>`} )
    .join("")


//EXTRA UI 
    
    const complete = todos.filter((todo)=> todo.done)
    const uncomplete = todos.filter((todo)=> !todo.done)

    counter.innerHTML= "tasks left: " + uncomplete.length + " | Completed: " + complete.length

    
    const showSearchCounter = searchText !== ""&& renderTodos.length > 0
    
    
    if(showSearchCounter){
        searchResultCounter.hidden = false
        searchResultCounter.innerHTML= "Nalezeno ukolů: " + renderTodos.length
    }else {
        searchResultCounter.hidden = true
    }
                 
    
        
    
}



render()
addBtn.disabled = true
duplicateMessage.hidden = true
sortSelect.value=""
input.value=""
select.value=""
dateInput.value=""
selectPriority.value=""
search.value=""


//add button

addBtn.addEventListener("click", function(){

        addTodo()
        saveTos()
        render()

})


//main input enter 

input.addEventListener("keydown", function(event){



    
    if(event.key === "Enter"){
        
        

        addBtn.disabled = true
        addTodo()
        saveTos()
        render()
    }

    

     
})

//main input text 

input.addEventListener("input", function(){

    const duplicateTodo = todos.some(todo => todo.text.trim().toLowerCase() === (input.value.trim().toLowerCase()))
           
            if(duplicateTodo){
                     duplicateMessage.hidden = false
            }else{
                duplicateMessage.hidden = true
                }

        if(input.value.trim() === "" || duplicateTodo){
            
            addBtn.disabled = true

        }else {
            
            addBtn.disabled = false
        }

})

//ul na delete edit a checkbox v li neboli v todo 

ul.addEventListener("click", function(event){
    

        const deletebtn = event.target.closest(".delete-btn")
        if(deletebtn){

           

            const li = event.target.closest("li")
        if (!li) return

        const id = Number(li.dataset.id)
        const newtodos = todos.filter(todo => todo.id !== id)

        

        todos = newtodos
        saveTos()
        render()
    
             return
           
        }
    
    if(event.target.classList.contains("edit-btn")){

        const li = event.target.closest("li")
            if (!li) return

        const span = li.querySelector(".text")
        const input = li.querySelector(".edit")
        
       if (input.hidden === false){
                span.style.display = ""
                input.hidden = true
                return
       }

        const inputs = document.querySelectorAll(".edit")
        inputs.forEach(input =>{
            input.hidden = true
        } )

        const texts = document.querySelectorAll(".text")
            texts.forEach(span =>{
                span.style.display = ""
            })

    const id = Number(li.dataset.id)

    const todo = todos.find(todo => todo.id === id)
    if (!todo) return

    

    span.style.display = "none"
    input.hidden = false

    input.value = todo.text
    input.focus()
    input.select()
    
    return
          }
    
    
         if(event.target.classList.contains("checkbox")){




              const li = event.target.closest("li")
        if(li){

            const id = Number(li.dataset.id)
            

        const todo = todos.find(todo => todo.id === id)

        if (!todo) return
        

        todo.done = !todo.done

        saveTos()

        render()

         return
    

        } 

         }
   
        
})

//input v li na edit a na odchod z inputu přes esc 

ul.addEventListener("keydown", function(event){

    if (event.target.tagName !== "INPUT") return

    if (event.key === "Enter") {

        const li = event.target.closest("li")
    if (!li) return

    const id = Number(li.dataset.id)

    const todo = todos.find(todo => todo.id === id)
    if (!todo) return

    const value = event.target.value
    

    todo.text = value

    saveTos()
    render()

    }

    if(event.key === "Escape"){
        
        const li = event.target.closest("li")
        if(!li) return 

        const span = li.querySelector(".text")
        const input = li.querySelector(".edit")

        input.hidden = true
        span.style.display = ""
        
        return
    }

    
})

//filter na currentFilter 

filters.addEventListener("click", function(event){

        if(event.target.dataset.filter){
            currentFilter = event.target.dataset.filter

            render()

        }

})

//tlačítko na smazání všech completed todo 

clearBtn.addEventListener("click", function(){

  const activeTodos=  todos.filter(function(todo) {
    return todo.done === false
})

todos = activeTodos 
        saveTos()
        render()
})

//vyhledávací input 

search.addEventListener("input",function(event){

          searchText= search.value.trim()

        render()

})

//mazání vyhledávacího inputu

clearsearch.addEventListener("click",function(){

         searchText = ""
         search.value=""
         render()
})

//řazení todo podle id 

sortSelect.addEventListener("change", function(){

    currentSort = sortSelect.value
    
    render()

})