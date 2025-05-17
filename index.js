const increase = document.getElementById("increasebtn");
const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
let value = document.getElementById("counterLabel");
let count = 0;


increase.onclick = function() {
    count++;
    value.textContent = count;
}

decrease.onclick = function() {
    count--;
    value.textContent = count;
}

reset.onclick = function() {
    count = 0;
    value.textContent = count;
}