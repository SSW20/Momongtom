const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const ToDos_LS = "toDos";

let toDos =[];

function saveToDos(){
    localStorage.setItem(ToDos_LS,JSON.stringify(toDos));   //stringify Object -> String
}
function delToDos(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
      });
    toDos = cleanToDos;
    saveToDos();
}
function paintToDos(text){
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   const li = document.createElement("li");
   delBtn.textContent = '❌';
   delBtn.addEventListener("click", delToDos);
   span.innerText = text;
   li.id = toDos.length + 1;
   li.appendChild(span);
   li.appendChild(delBtn);
   toDoList.appendChild(li);
   const toDoObj = {
       text: text,
       id: toDos.length + 1
   };
   toDos.push(toDoObj);
   saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const curretnValue = toDoInput.value;
    paintToDos(curretnValue);
    toDoInput.value = "";
}
function loadToDos() {
    const loadedToDos = localStorage.getItem(ToDos_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      [].forEach.call(parsedToDos, function(toDo) {
        paintToDos(toDo.text);
      });
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();