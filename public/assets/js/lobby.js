var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(e) {
    console.log("Connection established!");
};

let lobby = document.getElementById("lobby");
let game = document.getElementById("game");
let victory = document.getElementById("victory");
let timer = document.getElementById("time");
let first = document.getElementById("first");
let second = document.getElementById("second");
let point = document.getElementById("point");

lobby.checked = false;
game.checked = true;
victory.checked = true;

conn.onmessage = function(e) {
    console.log(e.data);
};

let button = document.getElementById("button");
let start = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

button.addEventListener("click", async() => {
    conn.send("begin");
    lobby.checked = true;
    game.checked = false;
    point.innerHTML = "+2pts";
    first.innerHTML = "We're in trouble, big trouble";
    second.innerHTML = "And if he is as bananas as you say";
    for (i = 0; i < 15; i++) {
        if (i == 7) {
            point.innerHTML = "+1pt";
        }
        console.log(timer.innerHTML);
        timer.innerHTML = timer.innerHTML - 1;
        await sleep(1000);
    }
    timer.innerHTML = 15;
    point.innerHTML = "+2pts";
    first.innerHTML = "Say they ready for the funk, but I don't think they knowin";
    second.innerHTML = "Straight to the depths of Hell is where them cowards goin";
    for (i = 0; i < 15; i++) {
        if (i == 7) {
            point.innerHTML = "+1pt";
        }
        console.log(timer.innerHTML);
        timer.innerHTML = timer.innerHTML - 1;
        await sleep(1000);
    }
    game.checked = true;
    victory.checked = false;
    conn.send("finished");
});