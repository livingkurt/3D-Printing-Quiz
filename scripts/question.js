//Landing Page
function start_quiz(){
    view_highscores_b_e.setAttribute("style", "display: none;")
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
    change_choices(all_choices_list, all_buttons_list)
    var begin_au_e = document.createElement("audio");
    begin_au_e.setAttribute("src", "assets/audio/begin.mp3");
    begin_au_e.play();
    setTime();

}
//Added all of the multiple choice answers arrays to its own array, then made a function that 
function change_choices(a){
    aa = a[question_num]
    choice_1_b_e.innerHTML = "1. " + aa[0];
    choice_2_b_e.innerHTML = "2. " + aa[1];
    choice_3_b_e.innerHTML = "3. " + aa[2];
    choice_4_b_e.innerHTML = "4. " + aa[3];
}

//Questions
function next_question() {
    
    line_hr_e.setAttribute("style", "display: none;")
    correct_incorrect_l_e.setAttribute("style", "display: none;")
    question_num++
    //Change Text
    title_h_e.innerHTML = questions_list[question_num];
    if (question_num > 4){
        if (window.secondsLeft <= 0){
            line_hr_e.setAttribute("style", "opacity: 1; display: flex;")
            you_lose();
        }
        else {
            all_done();
        }
    }
    else {
        if (window.secondsLeft <= 0){
            line_hr_e.setAttribute("style", "opacity: 1; display: flex;")
            you_lose();
        }
        else{
         change_choices(all_choices_list)
        }
        }
    
        
}

//Pops up with a correct or incorrect label
function is_correct(event) {
    if (event.target.matches("button")){
        var user_choice = event.target.innerHTML.substring(3, )
        line_hr_e.setAttribute("style", "display: flex;")
        // correct_incorrect_l_e.setAttribute("style", "display: flex;")
        line_hr_e.setAttribute("style", "opacity: 0;")
        correct_incorrect_l_e.setAttribute("style", "opacity: 0;")
        // fade(line_hr_e);
        fade(correct_incorrect_l_e);
        
    
        if (user_choice === answer_list[question_num]){
            console.log("correct")
            correct_incorrect_l_e.innerHTML = "Correct!"
            score = score + 10;
            console.log(score)
            var correct_au_e = document.createElement("audio");
            correct_au_e.setAttribute("src", "assets/audio/correct.wav");
            correct_au_e.play();
            setTimeout(next_question, 1000);
            // correct_au_e.pause();

        }
        else if (user_choice !== answer_list[question_num]){
            negative_5_l_e.setAttribute("style", "justify-content: flex-end")
            negative_5_l_e.setAttribute("style", "opacity: 0;")
            fade(negative_5_l_e);
            console.log("Incorrect")
            correct_incorrect_l_e.innerHTML = "Incorrect!"
            window.secondsLeft = secondsLeft - 5;
            console.log(score)
            var incorrect_au_e = document.createElement("audio");
            incorrect_au_e.setAttribute("src", "assets/audio/incorrect.wav");
            incorrect_au_e.play();
            setTimeout(next_question, 1000);
            // incorrect_au_e.pause();
        }
        
        
        
    }
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
    
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
    
}

function setTime() {
    var timerInterval = setInterval(function() {
    window.timerInterval = timerInterval
    secondsLeft--;
    time_l_e.textContent = "Time: " + secondsLeft;
    
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        if (secondsLeft < 0 ) {
            secondsLeft = 0;
            time_l_e.textContent = "Time: " + secondsLeft;
        }
        you_lose();
    }

  }, 1000);
}

//Event Listeners
start_quiz_b_e.addEventListener("click", start_quiz)
view_highscores_b_e.addEventListener("click", view_highscores)
multiple_choice_ul_e.addEventListener("click", is_correct)
// document.addEventListener("keypress", function (e) {
//     if (e.key === 'Enter') {
//         console.log("enter")
//         next_question();
//       }
// })
submit_score_b_e.addEventListener("click", submit_highscore)
start_over_b_e.addEventListener("click", start_over)
clear_highscores_b_e.addEventListener("click", clear_highscores)