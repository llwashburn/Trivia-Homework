//trivia game jquery

$(document).ready(function() {
    console.log("ready!");
});

$(function() {
    console.log("ok!");
});


//Puesdo Code for Game
// create variables/array to hold data
// iteriate thru array 
//get value
//append values to ids in html
//start game - click start button - display all questions at once - user answers questions and hits submit button
// function to check if answer is correct of incorrect
// if correct increase score if incorrect decrease score - use counter see crystal game?
// display final score at the end of game
//function reset- reset game



//create arrays to  hold questions, choices, and answers
var questionArray = [{
    question1: "What is the capital of Iraq?",
    question2: "What is the capital of Greece?",
    question3: "What is the capital of Argentina ? ",
    question4: "What is the capital of Canada ?",
    question5: "What is the capital of South Korea?",
    question6: "What is the capital of Russia ?",
    question7: "What is the capital of India ?",
    question8: "What is the capital of Germany?",
    question9: "What is the capital of Iran?",
    question10: "What is the capital of Thailand?",
    question11: "What is the capital of Italy?",
    question12: "What is the capital of Peru?",
}];

var choicesArray = [{
    choice1: ["Baghdad", "Amman", "Basra", "Tehran"],
    choice2: ["Ankara", "Athens", "Sparta", "Rome"],
    choice3: ["Montevideo", "Santiago", "La Paza", "Buenos Aires"],
    choice4: ["Montreal", "Ottowa", "Vancouver", "Toronto"],
    choice5: ["Kwangju", "Seoul", "Pyongyang", "Pusan"],
    choice6: ["St. Petersburg", "Moscow", "Vladivostok", "Omsk"],
    choice7: ["Madras", "Bombay", "Calcutta", "New Delhi"],
    choice8: ["Hamburg", "Bonn", "Berlin", "Muche"],
    choice9: ["Tehran", "Esfahan", "Tabriz", "Kabul"],
    choice10: ["Kuala Lumpur", "Bangkok", "Vientiane", "Naypyidaw"],
    choices11: ["Madrid", "Naples", "Rome", "Pisa"],
    choices12: ["La Paz", "Quito", "Santiago", "Lima"],
}];
var answersArray = [{
    answer1: "Baghdad",
    answer2: "Athens",
    answer3: "Buenos Aires",
    answer4: "Ottowa",
    answer5: "Seoul",
    answer6: "Moscow",
    answer7: "New Delhi",
    answer8: "Berlin",
    answer9: "Tehran",
    answer10: "Bangkok",
    answer11: "Rome",
    answer12: "Lima",
}];


// $(function() {
//     console.log(questionArray);
// });
// (function() {
//     console.log(choicesArray);
// });
// (function() {
//     console.log(answersArray);
// });

//start game when start button clicked / display 1st question
var initializeGame = $("startButton").on("click", function() {
            $("startButton").startButton().hide();
            timerStart(60);
            displayQuestion();

            //create a loop to run through 12 trivia questions

            for (var i = 0; i < questionArray.length; i++) {
                console.log(questionArray[i]);
                $(questionArray.question1).append("#questions");
            };
            var displayQuestion = function() {}



            //create loop to run throught 12 choices for each question and add to button1-4
            for (var i = 0; i < choicesArray.length; i++) {
                console.log(choicesArray[i]);
                $(choicesArray.question1).append("#choices");


                // //game will stop if timer stops?
                //when to create timer? how? see past class activities//function for timer-see past class activities
                // // user clicks start - timer begins counting down
                $("#start").on("click", function() {
                            $("#start").hide();
                            displayQuestion();
                            runTimer();
                            var timerStart = function(seconds) {

                                    var timer = setInterval(function)() {
                                        seconds = seconds = 1;
                                        $("#timer").html(seconds);

                                        if (seconds <= 0) {
                                            $("#timer").hide(500);
                                        }
                                    }

                                    //                 //stop the timer when player clicks submit
                                    //                 $("#submit").on("click", function)() {
                                    //                     clearInterval(timer);
                                    //                 })
                                    //         };


                                    //counter to talley score -see crystal game

                                    var correctAnswer = 0;
                                    var incorrectAnswer = 0;
                                    var results = 0;

                                    function render() {
                                        $("#correctAnswer").append(correct);
                                        $("#incorrectAnswer").append(incorrect);
                                        $("#results").append(results);
                                    }

                                    //reset game?