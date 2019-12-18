//Assign Pathways to Variables

//Text
var title_h_e = document.getElementById("title_h")
var welcome_h_e = document.getElementById("welcome_h")
var description_p_e = document.getElementById("description_p")

//Labels
var time_l_e = document.getElementById("time_l")
var final_score_l_e = document.getElementById("final_score_l")
var empty_highscores_table_l_e = document.getElementById("empty_highscores_table_l")

var enter_initials_l_e = document.getElementById("enter_initials_l")
var correct_incorrect_l_e = document.getElementById("correct_incorrect_l")
var negative_5_l_e = document.getElementById("negative_5_l") 


//Lists
var multiple_choice_ul_e = document.getElementById("multiple_choice_ul")
var saved_highscores_ul_e = document.getElementById("saved_highscores_ul")
var space_li_e = document.getElementById("space_li")


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

//Initalized Score Value
var score = 0;

//Initialized Time Value
var secondsLeft = 30;