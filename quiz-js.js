/* =============== show more / show less =============== */
function showText(){
    var moreText = document.getElementsByClassName("moreText");
    let dots = document.getElementById("dots");
    let showbtn = document.getElementById("showbtn");

    if (showbtn.innerHTML === "Show less") {
        showbtn.innerHTML ="Show more";
        dots.style.display = "inline";
        for (let i = 0; i < moreText.length; i++) {
            moreText[i].style.display ="none";
        }
    } else {
        dots.style.display = "none";
        showbtn.innerHTML = "Show less";
        for (let i = 0; i < moreText.length; i++) {
            moreText[i].style.display ="inline";
        }
    }
}

/* =============== answer question =============== */

var correctAnswers = [4,2,3,1,4];
var userAnswers = [];
var score = 0;
var questions = [
    {
    "number": 1,
    "question" : "Perhaps the most important question to start: What does wubba lubba dub dub mean?",
    "answer1": "Please leave",
    "answer2": "I'm a genious",
    "answer3": "Let's party",
    "answer4": "I'm in great pain",
    },
    {
    "number": 2,
    "question" : "What is the name of Morty's crush",
    "answer1": "Annie",
    "answer2": "Jessica",
    "answer3": "Summer",
    "answer4": "Heather",
    },
    {
    "number": 3,
    "question" : "For how many years had Rick been away at the start of the series?",
    "answer1": "10",
    "answer2": "15",
    "answer3": "20",
    "answer4": "30",
    },
    {
    "number": 4,
    "question" : "Morty once opened a themepark inside a homeless man. What was park's name?",
    "answer1": "Anatomy Park",
    "answer2": "Bodyland",
    "answer3": "Intestine Town",
    "answer4": "Organopolis",
    },
    {
    "number": 5,
    "question" : "Which implement does Rick use to travel between dimensions?",
    "answer1": "Rift Ray",
    "answer2": "Jump Laser",
    "answer3": "Interdimensional Ray",
    "answer4": "Portal Gun",
    }
]
var altbtns = document.querySelectorAll(".altbtn");

for (let i = 0; i < altbtns.length; i++) {
document.querySelector(`#answer${i+1}`).addEventListener("click",function(){
userAnswers.push(i+1);
newQuestion();
});
}

function newQuestion(){
let questionNo = questions.find(q => q.question === document.querySelector(".question-text").innerHTML);

switch (questionNo.number) {
    case 1:
        document.querySelector(".question-number").innerHTML = "2";
        document.getElementById("question-image").src ="quizImages/question2.webp";
        document.querySelector(".question-text").innerHTML = questions[1].question;
        document.querySelector("#answer1").innerHTML = questions[1].answer1;
        document.querySelector("#answer2").innerHTML = questions[1].answer2;
        document.querySelector("#answer3").innerHTML = questions[1].answer3;
        document.querySelector("#answer4").innerHTML = questions[1].answer4;
        break;
        case 2:
        document.querySelector(".question-number").innerHTML = "3";
        document.getElementById("question-image").src ="quizImages/question3.webp";
        document.querySelector(".question-text").innerHTML = questions[2].question;
        document.querySelector("#answer1").innerHTML = questions[2].answer1;
        document.querySelector("#answer2").innerHTML = questions[2].answer2;
        document.querySelector("#answer3").innerHTML = questions[2].answer3;
        document.querySelector("#answer4").innerHTML = questions[2].answer4;
        break;
        case 3:
        document.querySelector(".question-number").innerHTML = "4";
        document.getElementById("question-image").src ="quizImages/question4.webp";
        document.querySelector(".question-text").innerHTML = questions[3].question;
        document.querySelector("#answer1").innerHTML = questions[3].answer1;
        document.querySelector("#answer2").innerHTML = questions[3].answer2;
        document.querySelector("#answer3").innerHTML = questions[3].answer3;
        document.querySelector("#answer4").innerHTML = questions[3].answer4;
        break;
        case 4:
        document.querySelector(".question-number").innerHTML = "5";
        document.getElementById("question-image").src ="quizImages/question5.webp";
        document.querySelector(".question-text").innerHTML = questions[4].question;
        document.querySelector("#answer1").innerHTML = questions[4].answer1;
        document.querySelector("#answer2").innerHTML = questions[4].answer2;
        document.querySelector("#answer3").innerHTML = questions[4].answer3;
        document.querySelector("#answer4").innerHTML = questions[4].answer4;
        break;
        case 5:
        document.querySelector(".numberContainer").style.display = "none";
        document.querySelector(".questionmarkContainer").style.display = "none";
        document.getElementById("question-image").src ="quizImages/well-done-cartoon.webp";
        document.getElementById("question-image").style.width ="40%";
        document.getElementById("question-image").style.padding ="1rem";
        document.querySelector(".question-text").innerHTML = "You finished the quiz!";
        document.querySelector("#answer1").style.display = "none";
        document.querySelector("#answer2").style.display = "none";
        document.querySelector("#answer3").style.display = "none";
        document.querySelector("#answer4").style.display = "none";
        showScore(userAnswers);
        break;

    default:
        break;
}

}

function showScore(userAnswers){
if (correctAnswers.length != userAnswers.length) {
    alert("Oops. One or more answers are missing")
}
else{
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score += 1;
        }
    }
let lastTag = document.createElement("button");
lastTag.setAttribute("class","altbtn");
lastTag.setAttribute("id","lastTag");
lastTag.setAttribute("type","button");

let result = document.createTextNode(`Your score: ${score} out of 5`);
lastTag.appendChild(result);
let location = document.getElementById("answersContainer");
location.appendChild(lastTag);

document.getElementById("answersContainer").style.display ="flex";
document.getElementById("answersContainer").style.justifyContent ="center";
}
}




