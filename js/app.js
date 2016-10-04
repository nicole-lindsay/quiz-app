//a function to write question & answer on the page
function writeQuestion(question) {
    $(".questions p").html(question.text);
    $(".answers ul").empty();
    for (var i = 0; i < question.options.length; i++) {
        $(".answers ul").append('<li><input type="radio" name="option" value="' + i + '"><span class="options">' + question.options[i] + '</span></li>');
    }
}

var quizList = [{
    text: "What is the definition of the word <b>fortnight</b>?",
    options: ["A month", "A day", "Two weeks", "A week"],
    correct: 2
}, {
    text: "Which word is synonymous with <b>vitriol</b>?",
    options: ["angry words", "pleasantness", "obtuse", "pageantry"],
    correct: 0
}, {
    text: "What is the definition of <b>perspicacious</b>?",
    options: ["intent", "arrogance", "shrewd", "dull"],
    correct: 2
}, {
    text: "What is the antonym of the word <b>adversary</b>?",
    options: ["enemy", "alter ego", "fish", "friend"],
    correct: 3
}, {
    text: "Which of these words is synonymous with <b>poignant</b>?",
    options: ["moving", "bland", "wrong", "unaffecting"],
    correct: 0
}];


$(document).ready(function() {
    var currentQuestion = 0;
    var correctAnswer = 0;
    var totalQuestion = quizList.length;

    $("#final").hide();

    writeQuestion(quizList[currentQuestion])

    $("#submit").click(function(event) {
        event.preventDefault();
        var userChoice = $("input:checked").val(); 
        if (userChoice == undefined) { //ensures you can't move on without selecting radio button
            alert("You need to select an option before moving on!");
        } else {
            if (quizList[currentQuestion].correct == userChoice) { //logs # of correct answers, changes progress li background color
                $(".progress li:nth-child(" + (currentQuestion + 1) + ")").addClass("green");
                correctAnswer++;
                console.log(correctAnswer);
            } else {
                $(".progress li:nth-child(" + (currentQuestion + 1) + ")").addClass("red");
            }
            if ((currentQuestion + 1) == totalQuestion) { //shows score, hides Q&A
                $("#quiz").hide();
                $("#final").show();
                $(".userScore").text("You scored " + correctAnswer + " out of " + totalQuestion + " questions correctly!");
            }
            currentQuestion++;
            writeQuestion(quizList[currentQuestion]);
        }
    });

    $(".retry").click(function(event) {  //resets quiz
        currentQuestion = 0;
        correctAnswer = 0;
        writeQuestion(quizList[currentQuestion]);
        $("#quiz").show();
        $("#final").hide();
        $(".progress li").removeClass("green red");
    });

});