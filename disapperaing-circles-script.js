document.getElementById("red-circle").onclick = function () {
    document.getElementById("red-circle").style.display = "none";
}

document.getElementById("blue-circle").onclick = function () {
    document.getElementById("blue-circle").style.display = "none";
}

document.getElementById("green-circle").onclick = function () {
    document.getElementById("green-circle").style.display = "none";
}

document.getElementById("reset").onclick = function () {
    document.getElementById("red-circle").style.display = "block";
    document.getElementById("blue-circle").style.display = "block";
    document.getElementById("green-circle").style.display = "block";
}
