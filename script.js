// Started to create DOM elements to dynamically show the next page 
// and hide the previous page with a button click (eventListener).
let body = document.body;
// let stats = document.createElement("div");
// let score = document.createElement("div");
// let time = document.createElement("div");
// body.appendChild(stats);
// stats.appendChild(score);
// stats.appendChild(time);

let page = document.createElement("div");
let title = document.createElement("h1");
let p1 = document.createElement("p");
let startBtn = document.createElement("button");
    title.textContent = "JavaScript Timed Quiz";
    p1.textContent = "Sample Text."
    startBtn.textContent = "Start Quiz";
    // Added basic styles to show the elements on the page.
    page.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    title.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    p1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    startBtn.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        // Added element ids to actually access the built-in Java-DOM elements.
        page.id = "page";
        title.id = "title";
        p1.id = "p1";
        startBtn.id = "startBtn";
        body.appendChild(page);
        page.appendChild(title);
        page.appendChild(p1);
        page.appendChild(startBtn);

// Created an event listener to hide the "title page" when you click "Start Quiz".
startBtn.addEventListener("click", function() {
    document.getElementById("page").style.display = "none";
});