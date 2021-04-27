const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const ToDos_LS = "toDos";

function paintToDos(text){
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   const li = document.createElement("li");
   delBtn.textContent = '❌';
   span.innerText = text;
   li.appendChild(span);
   li.appendChild(delBtn);
   toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const curretnValue = toDoInput.value;
    paintToDos(curretnValue);
    toDoInput.value = "";
}
function loadToDos(){
    const toDo = localStorage.getItem(ToDos_LS);
    if(toDo !== null || toDo !== ""){
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();