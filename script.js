function changeGreeting() {
    document.getElementById("greeting").textContent = `Hello, JavaScript!`
}

function changeBackground() {
    document.body.style.backgroundColor = `lightblue`;
}

function showName() {
    let name = document.getElementById("userInput").Value;
    document.getElementById("output").textContent = `Hello, ${name}!`;
}

let count = 0;


function increaseCount() {
    count++;
    document.getElementById("count").textContent = `${count}`;
}

function changeImage() {
    document.getElementById("myImage").src = `Image1.png`;
}

function toggleText() {
       let text = document.getElementById("text");
       text.style.display = text.style.display === "none"?"block":"none"; 
}

function increaseFontSize() {
    document.getElementById("textSize").style.fontSize= `24px`;
}

function UpdateContent() {
    document.getElementById("title").textContent= `New Title`;
    document.getElementById("description").textContent= `This text has changed!`;
    document.getElementById("description").style.color= `red`;
}

function calculateSquare() {
    let num = document.getElementById("numberInput").value;
    let square = num * num;
    document.getElementById("result").textContent= `The square of ${num} is ${square}`;
}