const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard
while(currentCard!='spade') {
  currentCard = cards[Math.floor(Math.random()*4)];
  console.log(currentCard)
}


// spade가 나올때 까지 랜덤한 카드를 계속 뽑음