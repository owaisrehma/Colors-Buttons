const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn1");
const btnE2 = document.querySelector(".btn2");
const btnE3 = document.querySelector(".btn3");
const btnE4 = document.querySelector(".btn4");
const btnE5 = document.querySelector(".btn5");

btnEl.addEventListener("click", function(){
    containerEl.style.backgroundColor = "red";
});

btnE2.addEventListener("click", function(){
    containerEl.style.backgroundColor = "yellow";
});

btnE3.addEventListener("click", function(){
    containerEl.style.backgroundColor = "green";
});

btnE4.addEventListener("click", function(){
    containerEl.style.backgroundColor = "black";
});

btnE5.addEventListener("click", function(){
    containerEl.style.backgroundColor = "orange";
});