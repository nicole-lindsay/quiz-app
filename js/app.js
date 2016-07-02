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
    text: "What is the definition of the word <b>poignant</b>?",
    options: ["moving", "bland", "wrong", "unaffecting"],
    correct: 0
}];


$(document).ready(function() {
    var currentQuestion = 0
    var correctAnswer = 0

    writeQuestion(quizList[currentQuestion])

    $("#submit").click(function(event) {
        event.preventDefault();
        var userChoice = $("input:checked").val();
        if (userChoice == undefined) {
            alert("You need to select an option before moving on!");
        } else {
            if (quizList[currentQuestion].correct == userChoice) {
                $(".progress li:nth-child(" + (currentQuestion + 1) + ")").addClass("green");
            } else {
                $(".progress li:nth-child(" + (currentQuestion + 1) + ")").addClass("red");
            }
            currentQuestion++;
            writeQuestion(quizList[currentQuestion]);
        }
    });

    // $("#newGame").click(function(event) {
    //     event.preventDefault();
    //     writeQuestion();
    // })

});