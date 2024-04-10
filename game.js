var timer = 60;
var score = 0;
var hitrn = 0;

function increseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (i = 1; i <= 102; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTime() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      var gameOverElement = document.querySelector(".pbtm");
      gameOverElement.innerHTML = `
        <div class="game-over-container">
            <h1 class='game-over'>Game Over !</h1>
        </div>
        <div class="button-container">
        <button id='home-btn'>Play Again</button>
        </div>
        `;
        var panel = document.querySelector(".panel");
        panel.style.backgroundColor = "aliceblue";

      // Add event listener to the button to redirect to homepage
      document
        .getElementById("home-btn")
        .addEventListener("click", function () {
          window.location.href = "index.html"; // Change to the correct homepage URL
        });
    }
  }, 1000);
}
document.querySelector(".pbtm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === hitrn) {
    increseScore();
    makeBubble();
    getNewHit();
  }
});

runTime();
makeBubble();
getNewHit();
