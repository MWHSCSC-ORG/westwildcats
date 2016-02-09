function gc(b, i) {
    if (b === "t") {
        document.getElementById("c" + i).style.color = "green";
    }
    else {
        document.getElementById("c" + i).style.color = "";
    }
}