
//Text
var title_h_e = document.getElementById("title_h")
var welcome_h_e = document.getElementById("welcome_h")
var description_p_e = document.getElementById("description_p")

//Labels
var time_l_e = document.getElementById("time_l")
var final_score_l_e = document.getElementById("final_score_l")
var enter_initials_l_e = document.getElementById("enter_initials_l")


//Lists
var multiple_choice_ul_e = document.getElementById("multiple_choice_ul")

//Inputs
var answer_i_e = document.getElementById("answer_i")

//Buttons
var start_quiz_b_e = document.getElementById("start_quiz_b")
var view_highscores_b_e = document.getElementById("view_highscores_b")
var submit_score_b_e = document.getElementById("submit_score_b")
var go_back_b_e = document.getElementById("go_back_b")
var clear_highscores_b_e = document.getElementById("clear_highscores_b")


var questions_list = {1 : "What does FDM stand for when it refers to FDM 3D Printing?", 2 : "What part of the printer melts the plastic to be extruded?", 3 : "What is the most common filament type?", 4 : "Do you need a heated bed for all types of filaments?", 5 : "What is the most common nozzle size?"};
var answer_list = {1 : "Fused Depsoition Model", 2 : "Hotend", 3 : "PLA", 4 : "No", 5 : "0.4 mm"};

//Hide Elements
answer_i_e.setAttribute("style", "display: none;");
submit_score_b_e.setAttribute("style", "display: none;");
go_back_b_e.setAttribute("style", "display: none;");
clear_highscores_b_e.setAttribute("style", "display: none;");
multiple_choice_ul_e.setAttribute("style", "display: none;");
enter_initials_l_e.setAttribute("style", "display: none;");
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
    // answer_i_e.setAttribute("style", "display: block;");
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

view_highscores_b_e.addEventListener("click", high_scores)


function next_question() {
    title_h_e.innerHTML = questions_list[question_num];
    question_num++
    if (question_num > 6){
        all_done();
    }
    
}

function all_done() {
    // console.log("enter_name")
    title_h_e.innerHTML = "All Done!"
    answer_i_e.setAttribute("style", "display: flex;");
    submit_score_b_e.setAttribute("style", "display: flex;");
    enter_initials_l_e.setAttribute("style", "display: flex;");
    title_h_e.setAttribute("style", "margin: 0px; justify-content: flex-start;");
    final_score_l_e.innerHTML = "Your final score is "
    final_score_l_e.setAttribute("style", "display: flex; justify-content: flex-start;");
    

}



function high_scores() {
    title_h_e.innerHTML = "High Scores";
    // submit_score_b_e.setAttribute("style", "display: block;");
    
}

function submit_highscore() {
    
}

function clear_highscores() {
    title_h_e.innerHTML = "High Scores";
    
}

function start_over() {
    location.reload();
    
}

function correct(){

}