//QuerySelector vs getElementById
//속도는 getElementById가 더 빠르다.
//QuerySelector는 ID말고 다른 것들도 가져올 수 있다(Class, ...)
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTimer(){
    const time = new Date();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:`${hours}`}:${minutes < 10 ? `0${minutes}`:
    `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init(){
    getTimer();
    setInterval(getTimer,1000);
};

init();