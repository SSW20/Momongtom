const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing"

function setName(text){
    localStorage.setItem(USER_LS,text);

}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    setName(currentValue);
    paintGreeting(currentValue);
}
function inputName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
}

function loadName(){
    const name = localStorage.getItem(USER_LS);
    if(name == null){
        //he is not
        inputName();
    }else{
        //he is
        paintGreeting(name);
    }

}

function init(){
    loadName();
}

init();