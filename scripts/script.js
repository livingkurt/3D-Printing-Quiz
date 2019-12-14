
//Assign Pathways to Variables

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

//Questions
var questions_list = ["What does FDM stand for when it refers to FDM 3D Printing?", "What part of the printer melts the plastic to be extruded?", "What is the most common filament type?", "Do you need a heated bed for all types of filaments?", "What is the most common nozzle size?"];
//Correct Answers
var answer_list = ["Fused Depsoition Model", "Hotend", "PLA", "No", "0.4 mm"];
//Multiple Choice
var question_1_choice_list = ["Fused Depsoition Model", "Formal Development Methodology", "Finite-Difference Method", "Fused Deposition Manufacturing"];
var question_2_choice_list = ["Extruder", "Hotend", "PTFE Tube", "Heated Bed"];
var question_3_choice_list = ["ABS", "PETG", "PLA", "ASA"];
var question_4_choice_list = ["Yes", "No"];
var question_4_5choice_list = ["0.25mm", "0.4mm", "0.6mm", "0.8mm"];

//Hide Elements
answer_i_e.setAttribute("style", "display: none;");
submit_score_b_e.setAttribute("style", "display: none;");
go_back_b_e.setAttribute("style", "display: none;");
clear_highscores_b_e.setAttribute("style", "display: none;");
multiple_choice_ul_e.setAttribute("style", "display: none;");
enter_initials_l_e.setAttribute("style", "display: none;");
// console.log(title_h_e,welcome_h_e,description_p_e,start_quiz_b_e)


//Start Question count from 0
var question_num = 0


//Event Listeners
start_quiz_b_e.addEventListener("click", start_quiz)
view_highscores_b_e.addEventListener("click", high_scores)
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        console.log("enter")
        next_question();
      }
})


//Functions

//Landing Page
function start_quiz(event, ){
    title_h_e.innerHTML = questions_list[question_num];
    welcome_h_e.setAttribute("style", "display: none;");
    description_p_e.setAttribute("style", "display: none;");
    start_quiz_b_e.setAttribute("style", "display: none;");
    var li_e = document.createElement("li");
    li_e.innerHTML = "li";
    

}
//Questions
function next_question() {
    console.log(question_num)
    question_num++
    title_h_e.innerHTML = questions_list[question_num];
    
    if (question_num > 4){
        all_done();
    }
    
}
//End Quiz, allows you to type in your initials and submit your score to be saved to local storage
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

//Shows Highscores page from local storage
function high_scores() {
    title_h_e.innerHTML = "High Scores";
    // submit_score_b_e.setAttribute("style", "display: block;");
    
}
//Submits highscore to be stored in local storage and displayed on highscores page
function submit_highscore() {
    
}
//Deletes highscores from local storage
function clear_highscores() {
    title_h_e.innerHTML = "High Scores";
    
}
//Starts the quiz back at the Landing page
function start_over() {
    location.reload();
    
}
//Pops up with a correct or incorrect label
function correct(){

}