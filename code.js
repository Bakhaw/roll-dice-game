var rolldice = document.getElementById('rolldice');
var currentLeft = document.getElementById('currentLeft');
var currentRight = document.getElementById('currentRight');
var hold = document.getElementById('hold');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var diceImg = document.getElementById('diceImg');
var test = document.getElementById('test');
var moit1 = document.getElementById('moit1');
var moit2 = document.getElementById('moit2');
var winner1 = document.getElementById('winner1');
var tour = true;

rolldice.onclick = function() {
      var rand = Math.floor(Math.random()*6+1);
      currentLeft.innerHTML = Number(currentLeft.innerHTML) + rand;
      diceImg.src=`images/dice-${rand}.png`;
      if (rand === 1) {
        currentLeft.innerHTML = 0;
        switchPlayers();
      }


      // JOUEUR 2
      // if (tour == false) {
      //   currentRight.innerHTML = Number(currentRight.innerHTML) + rand;
      //   diceImg.src=`images/dice-${rand}.png`;
      //   if (rand === 1) {
      //     currentRight.innerHTML = 0;
      //     switchPlayers();
      //   }
      // }
}
hold.onclick = function() {
    score1.innerHTML = Number(currentLeft.innerHTML) + Number(score1.innerHTML);
    currentLeft.innerHTML = 0;

  if (score1 >= 100) {
    winner1.innerHTML = "Winner!";
  }
  switchPlayers();

}
switchPlayers = function() {
  if (tour) {
    moit1.classList.add('tour');
    moit2.classList.remove('tour');
    tour = false;
  }
  else {
    moit2.classList.add('tour');
    moit1.classList.remove('tour');
    tour = true;
  }
}
