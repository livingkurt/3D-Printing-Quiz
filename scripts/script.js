
//Assign Pathways to Variables

//Text
var title_h_e = document.getElementById("title_h")
var welcome_h_e = document.getElementById("welcome_h")
var description_p_e = document.getElementById("description_p")

//Labels
var time_l_e = document.getElementById("time_l")
var final_score_l_e = document.getElementById("final_score_l")
var enter_initials_l_e = document.getElementById("enter_initials_l")
var correct_incorrect_l_e = document.getElementById("correct_incorrect_l")

//Lists
var multiple_choice_ul_e = document.getElementById("multiple_choice_ul")
var saved_highscores_ul_e = document.getElementById("saved_highscores_ul")

//Inputs
var answer_i_e = document.getElementById("answer_i")

//Buttons
var start_quiz_b_e = document.getElementById("start_quiz_b")
var view_highscores_b_e = document.getElementById("view_highscores_b")
var submit_score_b_e = document.getElementById("submit_score_b")
var start_over_b_e = document.getElementById("start_over_b")
var clear_highscores_b_e = document.getElementById("clear_highscores_b")
var choice_1_b_e = document.getElementById("choice_1_b")
var choice_2_b_e = document.getElementById("choice_2_b")
var choice_3_b_e = document.getElementById("choice_3_b")
var choice_4_b_e = document.getElementById("choice_4_b")

//Groups
var highscores_b_g_e = document.getElementById("highscores_b_g")

//Line
var line_hr_e = document.getElementById("line_hr")

//Questions
var questions_list = ["What does FDM stand for when it refers to FDM 3D Printing?", "What part of the printer melts the plastic to be extruded?", "What is the most common filament type?", "What file type does a 3D printer read?", "What is the most common nozzle size?"];

//Correct Answers
var answer_list = ["Fused Deposition Model", "Hotend", "PLA", ".gcode", "0.4mm"];

//Multiple Choice Arrays
var question_1_choice_list = ["Fused Deposition Model", "Formal Development Methodology", "Finite-Difference Method", "Fused Deposition Manufacturing"];
var question_2_choice_list = ["Extruder", "Hotend", "PTFE Tube", "Heated Bed"];
var question_3_choice_list = ["ABS", "PETG", "PLA", "ASA"];
var question_4_choice_list = [".stl", ".gcode", ".f3d", ".obj"];
var question_5_choice_list = ["0.25mm", "0.4mm", "0.6mm", "0.8mm"];
//Grouped Array
var all_choices_list = [question_1_choice_list, question_2_choice_list, question_3_choice_list, question_4_choice_list, question_5_choice_list]
var all_buttons_list = [choice_1_b_e, choice_2_b_e, choice_3_b_e, choice_4_b_e]



//Start Question count from 0
var question_num = 0

//Event Listeners
start_quiz_b_e.addEventListener("click", start_quiz)
view_highscores_b_e.addEventListener("click", high_scores)
multiple_choice_ul_e.addEventListener("click", is_correct)
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        console.log("enter")
        next_question();
      }
})
submit_score_b_e.addEventListener("click", submit_highscore)
start_over_b_e.addEventListener("click", start_over)
clear_highscores_b_e.addEventListener("click", clear_highscores)


//Functions

//Landing Page
function start_quiz(){
    //Change Text
    title_h_e.innerHTML = questions_list[question_num];
    //Hide Elements
    welcome_h_e.setAttribute("style", "display: none;");
    description_p_e.setAttribute("style", "display: none;");
    start_quiz_b_e.setAttribute("style", "display: none;");
    var li_e = document.createElement("li");
    li_e.innerHTML = "li";
    //Show Elements
    multiple_choice_ul_e.setAttribute("style", "display: flex;");
    // change_choices(question_1_choice_list, question_2_choice_list, question_3_choice_list, question_4_choice_list, question_5_choice_list)
    change_choices(all_choices_list, all_buttons_list)
    setTime();

}
function change_choices(a, b){
    // for (var i = 0; i < 3; i++){
    //     a[0]
    // }
    
    // bb = b[question_num]
    // for (var i = 0; i < 3; i++){
    aa = a[question_num]
    choice_1_b_e.innerHTML = "1. " + aa[0];
    choice_2_b_e.innerHTML = "2. " + aa[1];
    choice_3_b_e.innerHTML = "3. " + aa[2];
    choice_4_b_e.innerHTML = "4. " + aa[3];
    
}
//Added all of the multiple choice answers arrays to its own array, then made a function that 
//Questions
function next_question() {
    question_num++
    //Change Text
    title_h_e.innerHTML = questions_list[question_num];
    if (question_num > 4){
        all_done();
    }
    else {
        change_choices(all_choices_list)
        }
        
}
var score = 0;
//Pops up with a correct or incorrect label
function is_correct(event) {
    if (event.target.matches("button")){
        // console.log(event.target.matches("button"))
        var user_choice = event.target.innerHTML.substring(3, )
        // console.log(answer_list[question_num])
        line_hr_e.setAttribute("style", "display: flex;")
        if (user_choice === answer_list[question_num]){
            console.log("correct")
            correct_incorrect_l_e.innerHTML = "Correct!"
            score = score + 10;
            console.log(score)
            // await delay(2000);
            next_question();
            // setTimeout(next_question, 1000);

        }
        else if (user_choice !== answer_list[question_num]){
            console.log("Incorrect")
            correct_incorrect_l_e.innerHTML = "Incorrect!"
            score = score - 5;
            console.log(score)
            // await delay(2000);
            next_question();
            // setTimeout(next_question, 1000);
        }
    }
}


// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time_l_e.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    //   sendMessage();
    }

  }, 1000);
}


//End Quiz, allows you to type in your initials and submit your score to be saved to local storage
function all_done() {
    //Hide Elements
    multiple_choice_ul_e.setAttribute("style", "display: none;")
    line_hr_e.setAttribute("style", "display: none;")
    correct_incorrect_l_e.setAttribute("style", "display: none;")
    //Show Elements
    title_h_e.innerHTML = "All Done!"
    answer_i_e.setAttribute("style", "display: flex;");
    submit_score_b_e.setAttribute("style", "display: flex;");
    enter_initials_l_e.setAttribute("style", "display: flex;");
    //Attribute Elements
    title_h_e.setAttribute("style", "margin: 0px; justify-content: flex-start;");
    final_score_l_e.setAttribute("style", "display: flex; justify-content: flex-start;");
    //Change Text
    final_score_l_e.innerHTML = "Your final score is: " + score;
    

}
//Highscore Object
var highscore_saved_list = {}

//Submits highscore to be stored in local storage and displayed on highscores page
function submit_highscore() {
    //Check if there is anything in storage
    if (localStorage.getItem("scores") === null) { //If there isnt anything in storage
        var initials_to_save = answer_i_e.value;
        highscore_saved_list[initials_to_save] = score
        console.log(highscore_saved_list)
        localStorage.setItem("scores", JSON.stringify(highscore_saved_list));
    }
    
    else { //If there is something in storage
        var highscore_saved_list = JSON.parse(localStorage.getItem("scores"));
        var initials_to_save = answer_i_e.value;
        highscore_saved_list[initials_to_save] = score
        console.log(highscore_saved_list)
        localStorage.setItem("scores", JSON.stringify(highscore_saved_list));
    }
}

function populate_list() {
    
}

//Shows Highscores page from local storage
function high_scores() {
    //Hide Elements
    answer_i_e.setAttribute("style", "display: none;");
    final_score_l_e.setAttribute("style", "display: none;");
    enter_initials_l_e.setAttribute("style", "display: none;");
    submit_score_b_e.setAttribute("style", "display: none;");
    description_p_e.setAttribute("style", "display: none;");
    welcome_h_e.setAttribute("style", "display: none;");
    multiple_choice_ul_e.setAttribute("style", "display: none;")
    start_quiz_b_e.setAttribute("style", "display: none;");
    //Show Elements
    title_h_e.setAttribute("style", "margin: 0px; justify-content: flex-start;");
    start_over_b_e.setAttribute("style", "display: flex;");
    clear_highscores_b_e.setAttribute("style", "display: flex;");
    highscores_b_g_e.setAttribute("style", "display: flex;");
    //Change Text
    title_h_e.innerHTML = "High Scores";
}

//Deletes highscores from local storage
function clear_highscores() {
    // title_h_e.innerHTML = "High Scores";
    localStorage.clear();
    
}
//Starts the quiz back at the Landing page
function start_over() {
    location.reload();
    
}







// function load_from_storage(){
//     // localStorage.getItem(initials_to_save, JSON.parse(score));
//     var stored_highscores = JSON.parse(localStorage.getItem("object"));
//     console.log(stored_highscores)
//     // var init = highscore_saved_list[initials_to_save]
//     var result = Object.keys(highscore_saved_list).map(function(key) {
//         return [Number(key), highscore_saved_list[key]];
//       });
//     console.log(result)

// }

// function load_from_storage() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var stored_highscores = JSON.parse(localStorage.getItem("object"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (stored_highscores !== null) {
//       todos = stored_highscores;
//     }
  
//     // Render todos to the DOM
//     renderTodos();
//   }


// function renderTodos() {
//     // Clear todoList element and update todoCountSpan
//     todoList.innerHTML = "";
//     todoCountSpan.textContent = todos.length;

//     // Render a new li for each todo
//     for (var i = 0; i < todos.length; i++) {
//         var todo = todos[i];

//         var li = saved_highscores_ul_e.createElement("li");
//         li.textContent = todo;
//         li.setAttribute("data-index", i);

//         // var button = document.createElement("button");
//         // button.textContent = "Complete";

//         // li.appendChild(button);
//         todoList.appendChild(li);
//     }
// }




// //Highscore Object
// var highscores_list = {}
// //Submits highscore to be stored in local storage and displayed on highscores page
// function submit_highscore() {

//     var initials_to_save = answer_i_e.value;
//     highscores_list[initials_to_save] = score;
//     console.log(highscores_list)

//     localStorage.setItem("scores", JSON.stringify(saved_highscores));

    
// }