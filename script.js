console.log('hello! we have a full deck!')

let deck = ["1","2","3","4","5","6","7","8","9","10","11","12","13"]


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(deck) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = deck[i];
      array[i] = deck[j];
      array[j] = temp;
  }
}

for (let i = 0; i < deck.length; i++) {
  console.log(deck[i])
  console.log('there are ' + deck.length + ' cards left in the deck')
}