var conn = new WebSocket('ws://localhost:8081');
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
    point.innerHTML = "";
    first.innerHTML = "À l'étranger, t'es un étranger, ça sert à rien d'être raciste (simple)";
    second.innerHTML = "Les mecs les plus fous sont souvent les mecs les plus tristes (basique) ";
    for (i = 0; i < 15; i++) {
        if (i == 7) {
            point.innerHTML = "";
        }
        console.log(timer.innerHTML);
        timer.innerHTML = timer.innerHTML - 1;
        await sleep(1000);
    }
    timer.innerHTML = 15;
    point.innerHTML = "";
    first.innerHTML = "Faut jamais céder à la pression du groupe";
    second.innerHTML = "D'tfaçons, quand tu fais du mal, au fond, tu ressens du doute";
    for (i = 0; i < 15; i++) {
        if (i == 7) {
            point.innerHTML = "";
        }
        console.log(timer.innerHTML);
        timer.innerHTML = timer.innerHTML - 1;
        await sleep(1000);
    }
    game.checked = true;
    victory.checked = false;
    conn.send("finished");
});