// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event){
    // Prevent form from submiting
    event.preventDefault()
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Todo LI
     const newTodo = document.createElement("li");
     newTodo.classList.add("todo-item");
    //  if (newTodo.innerText === "") {
    //    newTodo.innerText = todoInput.value;
    //  } 

    // Adding li into the created DIV
     todoDiv.appendChild(newTodo);

    // Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    // Remove Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append Created DIV into your hardcoded UL Element 
    todoList.appendChild(todoDiv);
    console.log(todoList.appendChild(todoDiv))

    // Clear TODO Input value
     todoInput.value = ""; 
}

function deleteCheck(e){
    const item = e.target;
    // Delete the todo
    if(item.classList[0] === 'trash-btn'){
        const parentItem = item.parentElement;
        parentItem.classList.add('fall');
        parentItem.addEventListener('transitoned', () => {
            parentItem.remove();
            console.log( parentItem.remove())
        })
    }
    // Check Mark
    if(item.classList[0] === 'complete-btn'){
        const parentItem = item.parentElement;
        console.log(parentItem)
         parentItem.classList.toggle('completed');
    }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch(e.target.value){
        case 'all':
            todo.style.display = 'flex';
           break;
        case 'completed':
            if(todo.classList.contains('completed')){
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
             break;
        case 'uncompleted':
            if(!todo.classList.contains('completed')){
                 todo.style.display = "flex";
            } else {
                todo.style.display = 'none';
            }
            break;
    }
  });
}
