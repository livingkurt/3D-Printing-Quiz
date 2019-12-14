
//Text
var title_h_e = document.getElementById("title_h")
var welcome_h_e = document.getElementById("welcome_h")
var description_p_e = document.getElementById("description_p")
var time_l_e = document.getElementById("time_l")
var multiple_choice_ul_e = document.getElementById("multiple_choice_ul")
var answer_input_e = document.getElementById("answer_input")


//Buttons
var start_quiz_b_e = document.getElementById("start_quiz_b")

var view_highscores_b_e = document.getElementById("view_highscores_b")

var questions_list = {1 : "What does FDM stand for when it refers to FDM 3D Printing?", 2 : "What part of the printer melts the plastic to be extruded?", 3 : "What is the most common filament type?", 4 : "Do you need a heated bed for all types of filaments?", 5 : "What is the most common nozzle size?"};
var answer_list = {1 : "Fused Depsoition Model", 2 : "Hotend", 3 : "PLA", 4 : "No", 5 : "0.4 mm"};


answer_input_e.setAttribute("style", "display: none;");
multiple_choice_ul_e.setAttribute("style", "display: none;");
console.log(title_h_e,welcome_h_e,description_p_e,start_quiz_b_e)
var question_num = 1

function start_quiz(event, ){
    // event.preventDefault();
    // console.log("hello")
    
    title_h_e.innerHTML = questions_list[question_num];
    // title_h_e.setAttribute("style", "justify-content: left");
    welcome_h_e.setAttribute("style", "display: none;");
    description_p_e.setAttribute("style", "display: none;");
    start_quiz_b_e.setAttribute("style", "display: none;");
    // multiple_choice_ul_e.setAttribute("style", "display: block;");
    answer_input_e.setAttribute("style", "display: block;");
    var li_e = document.createElement("li");
    li_e.innerHTML = "li";
    // document.body.appendChild(ul_e);
    question_num++
    // 

}

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        console.log("enter")
        next_question();
        // code for enter
      }
    
})
start_quiz_b_e.addEventListener("click", start_quiz)
// document.addEventListener("enter", next_question)


function next_question() {
    title_h_e.innerHTML = questions_list[question_num];
    question_num++
    
}

function correct(){

}