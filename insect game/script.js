const screens = document.querySelectorAll(".screen");

const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");

const start_btn = document.getElementById("start-btn");
const play = document.getElementById("play");
const dontPlay = document.getElementById("move");
const game_container = document.getElementById("game-container");
const game_containerr = document.getElementById("game-containerr"); //vhhvkvhkvhvhkvhkvhctrrtyivuhbvkjcjfgcccccccccccccccgcgggggggggggggggfttttt
const hidden = document.querySelector(".hidden");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const question = document.getElementById("question");
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");
let bye = document.getElementById("bye");
const lastscreen = document.getElementById("lastscreen");
const lastbtnn = document.getElementById("lastbtnn");
let time = document.querySelector(".samay");
const scoreReal = document.querySelector(".raina");
const img = document.querySelector(".img");
let fatcat = document.getElementById("fatcat");
const lost = document.getElementById("lost");
const lastvideo = document.getElementById("lastvideo");

let seconds = 0;
let score = 0;
let scoreReall = 0;

let selected_insect = {};

start_btn.addEventListener("click", function () {
  screens[0].classList.add("up");
  setInterval(function () {
    document.getElementById("mySound").play();
  }, 1000);
});

choose_insect_btns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time:${m}:${s}`;
  seconds++;
}
function increaseTimeCopy() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  time.innerHTML = `Time:${m}:${s}`;
  seconds++;
}

function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform:rotate(${Math.random() * 360}deg)" />`;

  insect.addEventListener("click", catchInsect);

  game_container.appendChild(insect);
}

function createInsectCopy() {
  let insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocationCopy();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="https://pngimg.com/uploads/mosquito/mosquito_PNG18175.png" style="transform:rotate(${
    Math.random() * 360
  }deg)" />`;

  insect.addEventListener("click", catchInsectCopy);

  game_containerr.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function getRandomLocationCopy() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
}
function catchInsectCopy() {
  increaseScoreCopy();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsectsCopy();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}
function addInsectsCopy() {
  setTimeout(createInsectCopy, 1000);
  setTimeout(createInsectCopy, 1500);
}
function increaseScore() {
  score++;
  scoreEl.innerHTML = `score: ${score}`;
  if (score > 5) {
    newScreen();
  }
}

function increaseScoreCopy() {
  scoreReall++;
  scoreReal.innerHTML = `score: ${scoreReall}`;
  if (scoreReall < 10 && lost.visible) {
  } else if (scoreReall > 10) {
    screens[7].classList.add("up");
    lastvideo.play();
  }
}

function newScreen() {
  screens[2].classList.add("up");
}

yes.addEventListener("click", function () {
  let sound = document.getElementById("mySound");
  sound.pause();
  sound.parentNode.removeChild(sound);
  hidden.classList.add("visible");
  screens[3].classList.add("up");
});

play.addEventListener("click", function () {
  hidden.classList.add("visible");
  screens[4].classList.add("up");
  setTimeout(
    document.querySelector(".hiddenvideo").classList.add("visible"),
    1000
  );
  let video = document.getElementById("myVideo");
  video.play();
  setTimeout(function () {
    screens[5].classList.add("up");
    screens[6].style.backgroundColor = "green";

    video.pause();
    setTimeout(function () {
      let sound2 = document.getElementById("round2fight");
      sound2.play();
    }, 1000);
  }, 20000);
});

function getData() {
  url =
    "https://opentdb.com/api.php?amount=12&category=9&difficulty=easy&type=boolean";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let currentQuestionIndex = 0;
      let incorrectGuess = 0;
      let life = 5;
      console.log(life);

      function nextQuesComeCome() {
        document.getElementById("life").innerHTML = life;
        let result = data.results[currentQuestionIndex];
        let realquestion = result.question;
        question.innerHTML = realquestion;
        return result.correct_answer;
      }

      function checkAnswer(ans) {
        return function () {
          let ans = nextQuesComeCome();
          if (ans === "True") {
            question.innerHTML = "YOU ARE RIGHT";
            console.log(question.innerHTML);
            currentQuestionIndex++;
          } else {
            question.innerHTML = "YOU ARE WRONG";
            console.log(question.innerHTML);
            life--;
            incorrectGuess++;
          }
          if (incorrectGuess === 5) {
            disableAll();
            end();
            bye.innerHTML = "YOU LOST 😢";
            question.innerHTML = "STUUUUUUPIIIIIDDD 🤣";
            screens[6].style.backgroundColor = "red";
          }

          if (currentQuestionIndex >= 11 && life > 0) {
            disableAll();
            next();
            bye.innerHTML = "WUUHUUU BABY GIRL💥";
            question.innerHTML = "YOU PRETTY GOOD😆🔥";
            screens[6].style.backgroundColor = "pink";
            setTimeout(function () {
              screens[6].classList.add("up");
              finalRound();
            }, 7000);
          }
          //  else {
          // fetchNextQuestion()
          //   disableAll()
          //   next()
          //   bye.innerHTML = "WUUHUUU BABY GIRL💥"
          //   question.innerHTML = "YOU PRETTY GOOD😆🔥"
          //   screens[6].style.backgroundColor = "pink"
          //   setTimeout(function () {
          //     screens[6].classList.add("up")
          //     finalRound()
          //   }, 7000)
          // }
          currentQuestionIndex++;
          let nextAns = nextQuesComeCome();
        };
      }

      let ans = nextQuesComeCome();
      console.log(ans);
      right.addEventListener("click", checkAnswer(ans));
      wrong.addEventListener("click", checkAnswer(ans));
    });
}

function disableAll() {
  right.disabled = true;
  wrong.disabled = true;
}

function end() {
  let gameover = document.getElementById("gameover");
  gameover.play();
}
function next() {
  let next = document.getElementById("next");
  next.play();
}
function finalRound() {
  let final = document.getElementById("finalRound");
  final.play();
}

getData();

lastbtnn.addEventListener("click", function () {
  lastbtnn.classList.add("remove");
  increaseTimeCopy();
  // img.classList.add("visible");
  // setInterval(() => {
  //   let m = Math.floor(seconds / 60);
  //   let s = seconds % 60;
  //   m = m < 10 ? `0${m}` : m;
  //   s = s < 10 ? `0${s}` : s;
  //   time.innerHTML = `Time:${m}:${s}`;
  //   seconds++;
  // }, 1000);
  function checkCollision() {
    const catRect = fatcat.getBoundingClientRect();
    const insects = document.querySelectorAll(".insect");

    insects.forEach((insect) => {
      const rect = insect.getBoundingClientRect();
      if (
        catRect.x < rect.x + rect.width &&
        catRect.x + catRect.width > rect.x &&
        catRect.y < rect.y + rect.height &&
        catRect.y + catRect.height > rect.y
      ) {
        stopGame();
      }
    });
  }

  const intervalID = setInterval(checkCollision, 100);

  fatcat.classList.add("move");
  console.log("i");
  createInsectCopy();
  console.log("i");

  addInsectsCopy();
  console.log("i");
  getRandomLocationCopy();
  console.log("i");
  catchInsectCopy();
  console.log("i");

  function stopGame() {
    clearInterval(intervalID);
    lost.classList.add("visible");
    disableTwo();
    fatcat.classList.remove("move");
    console.log("Game Over: Cat touched an insect");
    disable.addInsectsCopy();
  }
});

no.addEventListener("click", function () {
  screens[3].classList.add("up");
  screens[4].classList.add("up");
  screens[5].classList.add("up");
  let sound2 = document.getElementById("round2fight");
  sound2.play();
  let sound = document.getElementById("mySound");
  sound.pause();
  sound.parentNode.removeChild(sound);
});

dontPlay.addEventListener("click", function () {
  // screens[3].classList.add("up");
  screens[4].classList.add("up");
  screens[5].classList.add("up");

  let sound2 = document.getElementById("round2fight");
  sound2.play();
});

function disableTwo() {
  setInterval(function () {
    scoreReall = 0;
    time = 0;
    scoreReall--;
    time--;
  }, 100);

  scoreReal.innerHTML = `score: ${scoreReall}`;
}
