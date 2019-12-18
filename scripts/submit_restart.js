


//Functions

function you_lose() {
    title_h_e.innerHTML = "You Lose"
    final_score_l_e.innerHTML = "You must complete the quiz in the amount of time given";
    final_score_l_e.setAttribute("style", "display: flex; justify-content: center;");
    line_hr_e.setAttribute("style", "display: flex;");
    highscores_b_g_e.setAttribute("style", "display: flex; justify-content: center;");
    start_over_b_e.setAttribute("style", "display: flex;");
    start_over_b_e.textContent = "Start Over";
    multiple_choice_ul_e.setAttribute("style", "display: none;")
    correct_incorrect_l_e.setAttribute("style", "display: none;")
    view_highscores_b_e.setAttribute("style", "display: flex;")
}

//End Quiz, allows you to type in your initials and submit your score to be saved to local storage
function all_done() {
    //Hide Elements
    multiple_choice_ul_e.setAttribute("style", "display: none;")
    line_hr_e.setAttribute("style", "display: none;")
    correct_incorrect_l_e.setAttribute("style", "display: none;")
    start_over_b_e.setAttribute("style", "display: none;");
    //Show Elements
    title_h_e.innerHTML = "All Done!"
    answer_i_e.setAttribute("style", "display: flex;");
    submit_score_b_e.setAttribute("style", "display: flex;");
    enter_initials_l_e.setAttribute("style", "display: flex;");
    view_highscores_b_e.setAttribute("style", "display: flex;")
    //Attribute Elements
    title_h_e.setAttribute("style", "margin: 0px; justify-content: flex-start;");
    final_score_l_e.setAttribute("style", "display: flex; justify-content: flex-start;");
    //Change Text
    score = parseInt(score) + parseInt(secondsLeft)
    final_score_l_e.innerHTML = "Your final score is: " + score;
    clearInterval(window.timerInterval);
    

}
//Highscore Object

function view_highscores(){
    var highscore_saved_list = {}
    
    if (localStorage.getItem("scores") === null) { //If there isnt anything in storage
        console.log("is not Storage")
        saved_highscores_ul_e.setAttribute("style", "display: none;");
        empty_highscores_table_l_e.textContent = "Highscores will populate here when you complete the quiz";
        empty_highscores_table_l_e.setAttribute("style", "display: flex;");
        empty_highscores_table_l_e.setAttribute("style", "display: flex; background-color: rgb(1, 10, 49); padding: 5px; border: 1px solid rgb(1, 12, 49); margin: 16px 0px; color: white; border-radius: 10px;");
    }
    
    else if (localStorage.getItem("scores") !== null) { //If there is something in storage
        console.log("is Storage")
        var initials_to_save = answer_i_e.value;
        console.log(initials_to_save)
        var highscore_saved_list = JSON.parse(localStorage.getItem("scores"));
        console.log(highscore_saved_list)
    }
    populate_list(highscore_saved_list);
}

//Submits highscore to be stored in local storage and displayed on highscores page
function submit_highscore() {
    //Check if there is anything in storage
    var submit_au_e = document.createElement("audio");
    submit_au_e.setAttribute("src", "assets/audio/submit.mp3");
    submit_au_e.play();
    var highscore_saved_list = {}
    if (localStorage.getItem("scores") === null) { //If there isnt anything in storage
        console.log("is not Storage")
        var initials_to_save = answer_i_e.value;
        console.log(initials_to_save)
            highscore_saved_list[initials_to_save] = score
            console.log(highscore_saved_list)
            localStorage.setItem("scores", JSON.stringify(highscore_saved_list));
    }
    
    else if (localStorage.getItem("scores") !== null) { //If there is something in storage
        console.log("is Storage")
        var initials_to_save = answer_i_e.value;
        console.log(initials_to_save)
        var highscore_saved_list = JSON.parse(localStorage.getItem("scores"));
        console.log(highscore_saved_list)
        highscore_saved_list[initials_to_save] = score
        console.log(highscore_saved_list)
        localStorage.setItem("scores", JSON.stringify(highscore_saved_list));
    }
    populate_list(highscore_saved_list);
}

function populate_list(a) {
    $("#saved_highscores_ul").empty();
    var highscore_length = Object.keys(a).length
    var keys = Object.keys(a);
    var values = Object.values(a);
    console.log(keys)
    console.log(values)
    for (var i = 0; i < highscore_length; i++) {
        var user_name = keys[i];
        var user_score = values[i];
        var num = i + 2
        var user_data = (i + 1) + ". " + user_name.toUpperCase() + " - " + user_score
        var li = document.createElement("li");
        li.textContent = user_data;
        li.setAttribute("data-index", i);
        li.setAttribute("style", "background-color: rgb(1, 10, 49); padding: 5px; border: 1px solid rgb(1, 12, 49); color: white; border-radius: 10px; margin-bottom: 7px;");
        saved_highscores_ul_e.setAttribute("style", "display: flex;"); 
        saved_highscores_ul_e.appendChild(li);
    }
    high_scores();
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
    view_highscores_b_e.setAttribute("style", "display: none;")
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
    var clear_au_e = document.createElement("audio");
    clear_au_e.setAttribute("src", "assets/audio/clear_highscores.wav");
    clear_au_e.play();
    localStorage.clear();
    saved_highscores_ul_e.setAttribute("style", "display: none;");
    
    empty_highscores_table_l_e.textContent = "Highscores will populate here when you complete the quiz";
    empty_highscores_table_l_e.setAttribute("style", "background-color: rgb(1, 10, 49); padding: 5px; border: 1px solid rgb(1, 12, 49); margin: 16px 0px; color: white; border-radius: 10px;");
    final_sempty_highscores_table_l_ecore_l_e.setAttribute("style", "display: flex;");
}
//Starts the quiz back at the Landing page
function start_over() {
    // var start_over_au_e = document.createElement("audio");
    // start_over_au_e.setAttribute("src", "assets/audio/start_over.wav");
    // start_over_au_e.play();
    location.reload();
    
}