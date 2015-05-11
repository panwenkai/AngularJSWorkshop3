app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
    $scope.flashCardFunction = FlashCardsFactory.getFlashCards;
    $scope.loading = false;
    $scope.getCategoryCards = function(category){
        $scope.loading = true;
        $scope.flashCardFunction(category).then(function(response){
            console.log(response);
            $scope.loading = false;
            $scope.flashCards = response;
            $scope.current = category;
        });
    };
    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];
    $scope.answerQuestion = function (answer, flashCard) {
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
});

app.controller('StatsController', function ($scope, ScoreFactory) {
    $scope.scores = ScoreFactory;
});