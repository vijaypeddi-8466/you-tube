let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1
  },
  {
    text: "Learn CSS",
    uniqueNo: 2
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3
  }
];
function onTodoChekbox (checkBoxId , labelId){
    let checkboxElement = document.getElementById(checkBoxId);
    let labelElement = document.getElementById(labelId);
    if (checkboxElement.checked === true){
        labelElement.classList.add("checked");
    }else{
        labelElement.classList.remove("checked");
    }
    
}

function createAndAppendTodo(todo) {
  let checkBoxId = "checkbox"+todo.uniqueNo;
  let labelId = "label"+todo.uniqueNo;
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkBoxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick = function(){
      onTodoChekbox(checkBoxId, labelId);
  };
  todoElement.appendChild(inputElement);
  
  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkBoxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}