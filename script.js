// Started to create DOM elements to dynamically show the next page 
// and hide the previous page with a button click (eventListener).
// Re-indented everything.
let body = document.body;
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
// Placed a bunch of eventListeners into the startBtn eventListener in one massive function with a question/answer array.
startBtn.addEventListener("click", function() {
    document.getElementById("page").style.display = "none";

    // Moved the stats/score/time into the start button event.
    let stats = document.createElement("div");
    let score = document.createElement("div");
    let time = document.createElement("div");

    // Added some attributes to display the timer on the page.
    stats.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    score.setAttribute("style", "margin:auto; width:50%; text-align:left; justify-content:left; margin-right:300px;");
    time.setAttribute("style", "margin:auto; width:50%; text-align:right; justify-content:right; margin-left:300px;");
    stats.id = "stats";
    score.id = "score";
    time.id = "time";
    body.appendChild(stats);
    stats.appendChild(score);
    stats.appendChild(time);

    // Created a timer.
    function countdown() {
        var timeLeft = 60;

        var timer = setInterval(function() {
            if (timeLeft > 1) {
                time.textContent = timeLeft + " seconds remaining";
                timeLeft--;
            } else if (timeLeft === 1) {
                time.textContent = timeLeft + " second remaining";
                timeLeft--;
            } else {
                time.textContent = "";
                clearInterval(timer);
            }
        }, 1000);
    }

    countdown();
    
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
    // function setAnswers() { deleted.
    
    quiz1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    quiz1.id = "quiz1";

    // Added quizSetup for the other quiz pages.
    function quizSetup() {
        question.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        list.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        answer1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        answer2.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        answer3.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        answer4.setAttribute("style", "margin:auto; width:50%; text-align:center;");
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

    // Made a bunch of callbacks using setAnswers() and quizSetup().
    // Cloned the let values to try to make the code work for the next pages.
    // Added a bunch of answer.textContent values below. The setAnswer() callback function doesn't work.
    answer1.addEventListener("click", function() {
        document.getElementById("quiz1").style.display = "none";
        
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

                                let quiz5 = document.createElement("div");
                                let question = document.createElement("h2");
                                let list = document.createElement("ol");
                                let answer1 = document.createElement("button");
                                let answer2 = document.createElement("button");
                                let answer3 = document.createElement("button");
                                let answer4 = document.createElement("button");

                                question.textContent = questions[4];
                                answer1.textContent = answerText[16];
                                answer2.textContent = answerText[17];
                                answer3.textContent = answerText[18];
                                answer4.textContent = answerText[19];

                                quiz5.setAttribute("style", "margin:auto; width:50%; text-align:center;");
                                quiz5.id = "quiz5";

                                quizSetup();
                                body.appendChild(quiz5);
                                quiz5.appendChild(question);
                                quiz5.appendChild(list);
                                quiz5.appendChild(answer1);
                                quiz5.appendChild(answer2);
                                quiz5.appendChild(answer3);
                                quiz5.appendChild(answer4);

                                    answer3.addEventListener("click", function() {
                                        document.getElementById("quiz5").style.display = "none";
                                    });
                            });
                    });
            });
    });
});

// var questions = [
//     'question1'
// ]

// var answers = [
//     [
//         'answer1-1'
//     ]
//     [
//         'answer2-1'
//     ]
// ];

// function getRandomQuestion() {

//     var randomIndex = Math.floor() * questions.length);

//     var activeQuestions = questions[randomIndex];
//     var activeAnswers = answers[randomIndex];

//     return {
//         question: activeQuestions;
//         answers: activeAnswers;
//     }
// }

// function renderQuestion() {
//     var questionData = getRandomQuestion();
//