$(document).ready(function() {
    var quiz = [{
        question: "What is the definition of the word <b>fortnight</b>?",
        options: ["A month", "A day", "Two weeks", "A week"],
        correct: 2 // one single number in an array?? : [2]
        // arrays are great if you have a collection
    }, {
        question: "Which word is synonymous with vitriol?",
        options: ["angry words", "pleasantness", "obtuse", "pageantry"],
        correct: 0
    }, {
        question: "What is the definition of perspicacious?",
        options: ["intent", "arrogance", "shrewd", "dull"],
        correct: 2
    }, {
        question: "What is the antonym of the word adversary?",
        options: ["enemy", "alter ego", "fish", "friend"],
        correct: 3
    }, {
        question: "What is the definition of the word poignant?",
        options: ["moving", "bland", "wrong", "unaffecting"],
        correct: 0
    }];

    $(".questions p").append(quiz[0].question);

    for (var i = 0; i < quiz[0].options.length; i++) {
    	// imposter syndrome
        // i -> 0
        // i -> 1
        // i -> 2; 
        // x = [1,2,3]
        // x[i] ---> 1 or 2 or 3
        $(".answers ul").append('<li><input type="radio" name="option"><span class="options">' + quiz[0].options[i] + '</span></li>');
    }


    // dynamic (1, 2, or 3);
    // respond to the SUBMIT button clicks or form submission $('form').submit(e){ } or $(SOME kind of button).click(e) { e.preventDefault() }
});