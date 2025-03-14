let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;
let btns = ["yellow", "purple", "red", "green"];

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelup();
    }
});

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level : ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randClr = btns[randIdx];
    let randbtn = document.querySelector(`.${randClr}`);

    gameSeq.push(randClr);
    btnflash(randbtn);
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function btnpress() {
    let btn = this;
    gameflash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b> ${level} </b> <br> Press any key to restart`;
        reset();
    }
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function gameflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function reset() {
    level = 0;
    userSeq = [];
    gameSeq = [];
    started = false;
}
function showGameSeq() {
    console.log("Game Sequence:", gameSeq);
}