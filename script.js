// Started to create DOM elements to dynamically show the next page 
// and hide the previous page with a button click (eventListener).
// Re-indented everything.
let body = document.body;
let page = document.createElement("div");
let title = document.createElement("h1");
let p1 = document.createElement("p");
let startBtn = document.createElement("button");
// Moved the stats/score/time into the start button event.
// Moved them back up here and made score a <a> link.
let stats = document.createElement("div");
let score = document.createElement("a");
let time = document.createElement("div");

// Added "View Highscores" and "Time: 60".
title.textContent = "JavaScript Timed Quiz";
p1.textContent = "Sample Text."
startBtn.textContent = "Start Quiz";
score.textContent = "View Highscores";
time.textContent = "Time: 60";

// Added basic styles to show the elements on the page.
page.setAttribute("style", "margin:auto; width:50%; text-align:center;");
title.setAttribute("style", "margin:auto; width:50%; text-align:center;");
p1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
startBtn.setAttribute("style", "margin:auto; width:10%; text-align:center;");
// Added some attributes to display the timer on the page.
// Moved them here.
stats.setAttribute("style", "display:inline-block; margin:auto; width:100%; text-align:center;");
score.setAttribute("style", "display:inline-block; margin:auto; width:25%; text-align:center;");
time.setAttribute("style", "display:inline-block; margin:auto; width:25%; text-align:center;");

// Added element ids to actually access the built-in Java-DOM elements.
// Moved the stats/score/time ids and appends here.
page.id = "page";
title.id = "title";
p1.id = "p1";
startBtn.id = "startBtn";
stats.id = "stats";
score.id = "score";
time.id = "time";

body.appendChild(stats);
stats.appendChild(score);
stats.appendChild(time);
body.appendChild(page);
page.appendChild(title);
page.appendChild(p1);
page.appendChild(startBtn);

// Created an event listener to hide the "title page" when you click "Start Quiz".
// Made the button to dynamically show the next page. That's a lot of code to CTRL+C; +V.
// Changed the choice <li>s into <button>s.
// Placed a bunch of eventListeners into the startBtn eventListener in one massive function with a question/answer array.
startBtn.addEventListener("click", function() {
    document.getElementById("page").style.display = "none";

    let quiz1 = document.createElement("div");
    let question = document.createElement("h2");
    let list = document.createElement("ol");
    let answer1 = document.createElement("button");
    let answer2 = document.createElement("button");
    let answer3 = document.createElement("button");
    let answer4 = document.createElement("button");

    // Beginning to make an array that randomly generates the question/answer choices.
    // Scrapped the randomization and will create a simple array.
    var questions = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5"
    ];

    question.textContent = questions[0];

    var answerText = [
        "1. a1",
        "2. a2",
        "3. a3",
        "4. a4",
        "1. a5",
        "2. a6",
        "3. a7",
        "4. a8",
        "1. a9",
        "2. a10",
        "3. a11",
        "4. a12",
        "1. a13",
        "2. a14",
        "3. a15",
        "4. a16",
        "1. a17",
        "2. a18",
        "3. a19",
        "4. a20"
    ];

    // Couldn't get setAnswers() to work.
    answer1.textContent = answerText[0];
    answer2.textContent = answerText[1];
    answer3.textContent = answerText[2];
    answer4.textContent = answerText[3];
            
    // Added setAnswers to hopefully condense the code.
    // setAnswers() callbacks don't work. Dunno why.
    // Deleted function setAnswers() {.
    
    quiz1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    quiz1.id = "quiz1";

    // Added quizSetup for the other quiz pages.
    function quizSetup() {
        question.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        list.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        answer1.setAttribute("style", "margin:auto; width:50%; text-align:center; column-width:auto; column-width:auto;");
        answer2.setAttribute("style", "margin:auto; width:50%; text-align:center; column-width:auto; column-width:auto;");
        answer3.setAttribute("style", "margin:auto; width:50%; text-align:center; column-width:auto; column-width:auto;");
        answer4.setAttribute("style", "margin:auto; width:50%; text-align:center; column-width:auto; column-width:auto;");
        question.id = "question";
        list.id = "list";
        answer1.id = "answer1";
        answer2.id = "answer2";
        answer3.id = "answer3";
        answer4.id = "answer4";
    }

    body.appendChild(quiz1);
    quiz1.appendChild(question);
    quiz1.appendChild(list);
    quiz1.appendChild(answer1);
    quiz1.appendChild(answer2);
    quiz1.appendChild(answer3);
    quiz1.appendChild(answer4);

    // Moved var timer outside the scope of function countdown() {.
    var timer;

    // Created a timer.
    // Added "Game Over" to the last else statement.
    function countdown() {
        var timeLeft = 60;

        timer = setInterval(function() {
            if (timeLeft > 1) {
                time.textContent = "Time: " + timeLeft;
                timeLeft--;
            } else if (timeLeft === 1) {
                time.textContent = "Time: " + timeLeft;
                timeLeft--;
            // Added a game over screen that hides the quiz pages on timeout.
            } else if (timeLeft === 0) {
                time.textContent = "Game Over";
                clearInterval(timer);
                document.getElementById("quiz1").style.display = "none";
                document.getElementById("quiz2").style.display = "none"; 
                document.getElementById("quiz3").style.display = "none";
                document.getElementById("quiz4").style.display = "none";
                document.getElementById("quiz5").style.display = "none";
            } else {
                time.textContent = "Game Over";
                clearInterval(timer);
            }     
        }, 1000); 
    }
    
    countdown();

    // Made a bunch of callbacks using setAnswers() and quizSetup().
    // Cloned the let values to try to make the code work for the next pages.
    // Added a bunch of answer.textContent values below. The setAnswer() callback function doesn't work.
    answer1.addEventListener("click", function() {
        document.getElementById("quiz1").style.display = "none";
        // score.textContent = "Score: " + 1;
        
        let quiz2 = document.createElement("div");
        let question = document.createElement("h2");
        let list = document.createElement("ol");
        let answer1 = document.createElement("button");
        let answer2 = document.createElement("button");
        let answer3 = document.createElement("button");
        let answer4 = document.createElement("button");

        question.textContent = questions[1];
        answer1.textContent = answerText[4];
        answer2.textContent = answerText[5];
        answer3.textContent = answerText[6];
        answer4.textContent = answerText[7];
        
        quiz2.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        quiz2.id = "quiz2";

        quizSetup();
        body.appendChild(quiz2);
        quiz2.appendChild(question);
        quiz2.appendChild(list);
        quiz2.appendChild(answer1);
        quiz2.appendChild(answer2);
        quiz2.appendChild(answer3);
        quiz2.appendChild(answer4);

            answer2.addEventListener("click", function() {
                document.getElementById("quiz2").style.display = "none";
                // score.textContent = "Score: " + 2;
                
                let quiz3 = document.createElement("div");
                let question = document.createElement("h2");
                let list = document.createElement("ol");
                let answer1 = document.createElement("button");
                let answer2 = document.createElement("button");
                let answer3 = document.createElement("button");
                let answer4 = document.createElement("button");

                question.textContent = questions[2];
                answer1.textContent = answerText[8];
                answer2.textContent = answerText[9];
                answer3.textContent = answerText[10];
                answer4.textContent = answerText[11];

                quiz3.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                quiz3.id = "quiz3";

                quizSetup();
                body.appendChild(quiz3);
                quiz3.appendChild(question);
                quiz3.appendChild(list);
                quiz3.appendChild(answer1);
                quiz3.appendChild(answer2);
                quiz3.appendChild(answer3);
                quiz3.appendChild(answer4);

                    answer3.addEventListener("click", function() {
                        document.getElementById("quiz3").style.display = "none";
                        // score.textContent = "Score: " + 3;
                            
                        let quiz4 = document.createElement("div");
                        let question = document.createElement("h2");
                        let list = document.createElement("ol");
                        let answer1 = document.createElement("button");
                        let answer2 = document.createElement("button");
                        let answer3 = document.createElement("button");
                        let answer4 = document.createElement("button");

                        question.textContent = questions[3];
                        answer1.textContent = answerText[12];
                        answer2.textContent = answerText[13];
                        answer3.textContent = answerText[14];
                        answer4.textContent = answerText[15];

                        quiz4.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                        quiz4.id = "quiz4";

                        quizSetup();
                        body.appendChild(quiz4);
                        quiz4.appendChild(question);
                        quiz4.appendChild(list);
                        quiz4.appendChild(answer1);
                        quiz4.appendChild(answer2);
                        quiz4.appendChild(answer3);
                        quiz4.appendChild(answer4);

                            answer4.addEventListener("click", function() {
                                document.getElementById("quiz4").style.display = "none";
                                // score.textContent = "Score: " + 4;

                                let quiz5 = document.createElement("div");
                                let question = document.createElement("h2");
                                let list = document.createElement("ol");
                                let answer1 = document.createElement("button");
                                let answer2 = document.createElement("button");
                                // Changed answer3 here and below to answer3a to stop the timer.
                                let answer3a = document.createElement("button");
                                let answer4 = document.createElement("button");

                                question.textContent = questions[4];
                                answer1.textContent = answerText[16];
                                answer2.textContent = answerText[17];
                                answer3a.textContent = answerText[18];
                                answer4.textContent = answerText[19];

                                quiz5.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                                quiz5.id = "quiz5";

                                // Removed quizSetup() to accomodate for answer3a and its children.
                                // Made a sequel.
                                function quizSetup2() {
                                    question.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                                    list.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                                    answer1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                                    answer2.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                                    answer3a.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                                    answer4.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                                    question.id = "question";
                                    list.id = "list";
                                    answer1.id = "answer1";
                                    answer2.id = "answer2";
                                    answer3a.id = "answer3a";
                                    answer4.id = "answer4";
                                }

                                body.appendChild(quiz5);
                                quiz5.appendChild(question);
                                quiz5.appendChild(list);
                                quiz5.appendChild(answer1);
                                quiz5.appendChild(answer2);
                                quiz5.appendChild(answer3a);
                                quiz5.appendChild(answer4);

                                    answer3a.addEventListener("click", function() {
                                        document.getElementById("quiz5").style.display = "none";
                                        // score.textContent = "Score: " + 5;
                                        // Added the true Game Over screen which stops the timer after pressing this button.
                                        timeLeft = 0;
                                        time.textContent = "Game Over";
                                        clearInterval(timer);
                                    });      
                            });
                    });
            });
    });
});