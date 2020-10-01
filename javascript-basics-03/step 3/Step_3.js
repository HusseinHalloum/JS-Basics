var text = document.getElementById("text");
function color(color){
    switch (color) {
        case "red":
            text.style.color = "red";
            break;
        case "green":
            text.style.color = "green";
            break;
        case "blue":
            text.style.color = "blue";
            break;
        default:
            break;
    }
}