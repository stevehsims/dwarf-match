app.controller('GameController', function ($scope, $timeout, GameService) {

    // This is a freebie we are using the GameService to help keep our controller clean. The GameServie will be in charge of creating and shuffling the deck.
    $scope.deck = GameService.getDeck();

    // Create two card variables on $scope. These will be responsible
    // for keeping track of our selections as we click cards.

    $scope.card1;
    $scope.card2;

    // Next we need to initate a few more variables on $scope for later use
    // Let's add variables for tracking the number of guesses (pairs flipped),
    // for the total number of correct guesses (pairs matched) and finally a
    // victory boolean to let our controller know if we've won. Refer to the index.html
    // for variable names

    $scope.totalMatches = 0;
    $scope.attempts = 0;
    $scope.victory = false;

    // Next write a selectCard function on $scope that accepts a card object on click and
    // let's make it set card.show to true (boolean). Give it a test!
    // After you complete this refer back to readme.md

    $scope.selectCard = function (card) {
        
        if ($scope.card1) {
            $scope.card2 = card;
            $scope.card2.show = true
        } else {
            $scope.card1 = card
            $scope.card1.show = true
            return
        }
        $timeout(function()
            {
                if(!isMatch($scope.card1,$scope.card2)){
                resetCards();
                $scope.card1.show = false
                $scope.card2.show = false
               } resetCards()}, 1000)

    }

    // Write a local resetCards function that will empty our card variables
    // and increase the number of attempts
    
    var resetCards = function () {
        $scope.attempts++;
        $scope.card1 = "";
        $scope.card2 = "";
        checkVictory();
        
    }

    // Next write a local isMatch function that accepts our two cards and if the card titles 
    // match, increases our totalMatches and returns true else returns false. After this refer 
    // back to readme.md

    var isMatch = function (one, two) {
        if (one.title === two.title) {
            $scope.totalMatches++;
            return true

        } else {
            one.show = false;
            two.show = false;
            return false
        }
    }

    // Finally, write a local checkVictory function that will set $scope.victory = true if the totalMatches 
    // is half the length of the deck. Tip: the game deck array is available at $scope.deck. When you're done
    // refer back to readme.md
    var checkVictory = function () {
        if ($scope.totalMatches === 12) {
            $scope.victory = true
        }
    }


    // Bonus Challenge: Write a function on $scope that can reset the game and add a button that calls it



});