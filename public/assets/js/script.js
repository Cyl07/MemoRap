var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(e) {
    console.log("Connection established!");
};

let waiting = document.getElementById("waiting");
let play = document.getElementById("play");
let victory = document.getElementById("victory");

waiting.checked = false;
play.checked = true;
victory.checked = true;

let button = document.getElementById("submit");
let input = document.getElementById("answer");

conn.onmessage = function(e) {
    if (e.data == "begin") {
        waiting.checked = true;
        play.checked = false;
    }
    if (e.data == "finished") {
        play.checked = true;
        victory.checked = false;
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
button.addEventListener("click", async() => {
    conn.send(input.value);
    if (input.value == "tupac" || input.value == "eminem") {
        input.classList.add("right");
    } else {
        input.classList.add("wrong");
        await sleep(500);
        input.classList.remove("wrong");
    }
    input.value = "";
    input.focus();
});