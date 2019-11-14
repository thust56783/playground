/** Notes for Thomas */

/**
 * Multi-line comment
 */

 // Single-line comment

 /**
  * Variables:
  * var identifier = value e.g.
  * var myFavouriteNumber = 10;
  * 
  * var thing;
  * 
  * Number, String "sedsef", true, null, object, array
  */

/**
 * Conditionals:
 * if (boolean expression) {}
 * 
 * e.g.
 * 
 * if (5 > 0) { ... }
 *
 */

 /**
  * Loops:
  * for (var i = 0; i < 10; i++) { ... }
  */

/** Game */

(function() {
    // Generate a random number.
    var answer = newRandomNumberPlease();
    
    var button = document.getElementById('check');
    
    button.onclick = function() {
        var guess = +document.getElementById('guess').value;
        console.log(guess);
    
        if (guess === answer) {
            document.getElementById('output').innerText = "You got it! Have another go at choosing a number between 1 and 9 (inclusive)";
    
            answer = newRandomNumberPlease();
        } else {
            document.getElementById('output').innerText = "Wrong! Have another go at choosing a number between 1 and 9 (inclusive)";
        }
    }

    function newRandomNumberPlease() {
        return Math.floor(Math.random() * 10);
    }
})();