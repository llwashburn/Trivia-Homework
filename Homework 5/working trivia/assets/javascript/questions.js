$(document).ready(function() {
    console.log("ready!");


    var game = {
        trivia:

            [{
                question: "What is the capital of Iraq?",
                choices: ["Baghdad", "Amman", "Basra", "Tehran"],
                answer: '0'
            }, {
                question: "What is the capital of Greece?",
                choices: ["Ankara", "Athens", "Sparta", "Rome"],
                answer: '1'
            },
            {
                question: "What is the capital of Argentina ? ",
                choices: ["Montevideo", "Santiago", "La Paza", "Buenos Aires"],
                answer: '3'
            },
            {
                question: "What is the capital of Canada ?",
                choices: ["Montreal", "Ottowa", "Vancouver", "Toronto"],
                answer: '1'
            },
            {
                question: "What is the capital of South Korea?",
                choices: ["Kwangju", "Seoul", "Pyongyang", "Pusan"],
                answer: '1'
            },
            {
                question: "What is the capital of Russia ?",
                choices: ["St. Petersburg", "Moscow", "Vladivostok", "Omsk"],
                answer: '1'
            },
            {
                question: "What is the capital of India ?",
                choices: ["Madras", "Bombay", "Calcutta", "New Delhi"],
                answer: '3'
            },
            {
                question: "What is the capital of Germany?",
                choices: ["Hamburg", "Bonn", "Berlin", "Muche"],
                answer: '2'
            },
            {
                question: "What is the capital of Iran?",
                choices: ["Tehran", "Esfahan", "Tabriz", "Kabul"],
                answer: '0'
            },
            {
                question: "What is the capital of Thailand?",
                choices: ["Kuala Lumpur", "Bangkok", "Vientiane", "Naypyidaw"],
                answer: '1'
            },
            {
                question: "What is the capital of Italy?",
                choices: ["Madrid", "Naples", "Rome", "Pisa"],
                answer: '2'
            },
            {
                question: "What is the capital of Peru?",
                choices: ["La Paz", "Quito", "Santiago", "Lima"],
                answer: '3'
            }
        ],
        timer: 30,
        questionsCorrect: 0,
        questionsWrong: 0,
        counter: 0
    }



    //jquery
    //function loops all the questions and choices and appends to the html
    //using jquery create elements.
    for (let i = 0; i < game.trivia.length; i++) {
        $("#trivia").append("<div class='question'>" + game.trivia[i].question + "</div>" +
            "<input class='button button1' type='radio' name='question" + [i] + "' value=0>" + game.trivia[i].choices[0] + "</input><br>" +
            "<input class='button button2' type='radio' name='question" + [i] + "' value=1>" + game.trivia[i].choices[1] + "</input><br>" +
            "<input class='button button3' type='radio' name='question" + [i] + "' value=2>" + game.trivia[i].choices[2] + "</input><br>" +
            "<input class='button button4' type='radio' name='question" + [i] + "' value=3>" + game.trivia[i].choices[3] + "</input>"

        )

    };

    // start timer when startButton is clicked
    //find another timer- look for stopwatch timer. Decrement and update with current count / hit 0 to end game
    // start a timer & execute a function every 30 seconds and then reset the timer at the end of 30 seconds.

    $("#startButton").click(function() {
        console.log("start clicked");
        $(this).hide();
        counter = setInterval(timer, 1000);
        displayTrivia();

        //end start button

        function timer() {
            game.timer--;
            console.log(game.timer);
            if (game.timer <= 0) {
                //display time's up message in timer area
                $("#timer").text("Time's up!");
                endGame();
                return;
            }
            //check to see if timer is less than 10, and add an extra 0 if it is
            $("#timer").html("Time remaining: " + "00:" + game.timer + " secs");
        }
    });
    //jquery function that iterates through the loop of questions/choices and checks the answers.
    //creates counter and appends the correct answers to html
    //creates counter and appends the incorrect answers to the html
    $("#submitButton").click(function(e) {
        console.log('submit clicked');
        e.preventDefault();
        for (let i = 0; i < game.trivia.length; i++) {
            console.log($("input[name='question" + i + "']:checked").val())
            console.log(game.trivia[i].answer)
            if ($("input[name='question" + i + "']:checked").val() === game.trivia[i].answer) {
                game.questionsCorrect++;
            } else {
                game.questionsWrong++;
            }
        }
    });


    function showResults() {
        $("#results").html("<div id='questions-right'>" + game.questionsCorrect + "</div>")

    }
    console.log('correct', game.questionsCorrect);
    console.log('wrong', game.questionsWrong);
});



//FUNCTION TO END GAME
function endGame() {
    //STOP TIMER
    clearInterval(counter);

    function reset() {

        correct = 0;
        wrong = 0;
        $('#endGame').empty();
        start();
    }
};

$("#trivContainer").css('display', 'none');


//HIDE /EMPTY QUESTIONS 
$("#trivia-container").empty("trivia-container>" + results + "</div>")

//DISPLAY RESULTS
$("#endGame").append(questionsCorrect, questionsWrong);

//  CREATE AN ELEMENT FOR CORRECT
var correct = $("<p>").text("Correct: " + questionsCorrect);

//CREATE AN ELEMENT FOR WRONG
var wrong = $("<p>").text("Wrong: " + questionsWrong);

//PUT ON PAGE(APPEND)
$(".inner").append("<p>Test</p>");