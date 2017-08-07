$(document).ready(function(){
    var magic8Ball = {};
    $("answer").hide();
    magic8Ball.listOfAnswers = [“No”, “Yes”, “I don’t think so…”, “Of course!”, “Sure”, “Nope”];
    magic8Ball.askQuestion = function(question){

        var randomNumber = Math.random();

        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $(“#answer”).text( answer );
        $("#answer").hide();
        $("#answer").fadeIn(4000);

        console.log(question);
        console.log(answer);

    };
    var onClick = function() {

        var question = prompt(“ASK A YES/NO QUESTION!”);

        magic8Ball.askQuestion(question);
        setTimeout(function(){
          $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        }, 0500);
        $("#8ball").effect("shake");

    };

    $("#questionButton").click( onClick );

});
