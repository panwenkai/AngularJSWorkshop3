app.directive('flashCard' ,function (ScoreFactory) {
    function link(scope, element, attrs) {
        scope.answerQuestion = function (answer, flashCard) {
            console.log(answer, flashCard);
            if (!flashCard.answered) {
                flashCard.answered = true;
                flashCard.answeredCorrectly = answer.correct;
                if (answer.correct){
                    ScoreFactory.correct += 1;
                } else {
                    ScoreFactory.incorrect += 1;
                }
            } else {
                if (flashCard.answeredCorrectly) {
                    if (!answer.correct) {
                        ScoreFactory.correct -= 1;
                        ScoreFactory.incorrect += 1;
                    }
                } else {
                    if (answer.correct) {
                        ScoreFactory.correct += 1;
                        ScoreFactory.incorrect -= 1;
                    }
                }
                flashCard.answeredCorrectly = answer.correct;
            }
        }
    }

    return {
        restrict: 'E',
        templateUrl: 'js/directives/loader/flash-card.html',
        link: link,
        scope:{
            card: '='
        }

    };
});