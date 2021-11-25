var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = function(e) {
    console.log(e.data);
};

let button = document.getElementById("submit");

let input = document.getElementById("answer");

button.addEventListener("click", () => {
    conn.send(input.value);
    input.value = "";
    input.focus();
});