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
// Made the button to dynamically show the next page. That's a lot of code to CTRL+C; +V.
// Changed the choice <li>s into <button>s.
startBtn.addEventListener("click", function() {
    document.getElementById("page").style.display = "none";
        let quiz1 = document.createElement("div");
        let prompt1 = document.createElement("h2");
        let list1 = document.createElement("ol");
        let choice1 = document.createElement("button");
        let choice2 = document.createElement("button");
        let choice3 = document.createElement("button");
        let choice4 = document.createElement("button");
            prompt1.textContent = "Question 1.";
            choice1.textContent = "1.";
            choice2.textContent = "2.";
            choice3.textContent = "3.";
            choice4.textContent = "4.";
            quiz1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
            prompt1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
            list1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
            choice1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
            choice2.setAttribute("style", "margin:auto; width:50%; text-align:center;");
            choice3.setAttribute("style", "margin:auto; width:50%; text-align:center;");
            choice4.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                quiz1.id = "quiz1";
                prompt1.id = "prompt1";
                list1.id = "list1";
                choice1.id = "choice1";
                choice2.id = "choice2";
                choice3.id = "choice3";
                choice4.id = "choice4";
                body.appendChild(quiz1);
                quiz1.appendChild(prompt1);
                quiz1.appendChild(list1);
                quiz1.appendChild(choice1);
                quiz1.appendChild(choice2);
                quiz1.appendChild(choice3);
                quiz1.appendChild(choice4);
});