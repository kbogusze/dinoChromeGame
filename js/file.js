let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

//start Game
//interval = setInterval(scoreCounter,200); 

window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockAnimate");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowUp") {
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            // remove class after 0.5s
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
    }
});

let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    //    console.log("dinoBottom " + dinoBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("blockLeft " + blockLeft);

    if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        //        console.log("Game over");

        gameOver.style.display = "block";
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        block.classList.remove("blockAnimate");
        clearInterval(interval);
        playerScore = 0;
    }

}, 10);
