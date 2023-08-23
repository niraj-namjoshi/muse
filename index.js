
for (var i = 0; i < 9; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", buttonp);
}
function buttonp() {
    var ch = event.target.id;
    switch (ch) {
        case "button1":
            window.location.href = "test.html";
            break;  
        case "button2":
                window.location.href = "test1.html";
                break;
        case "button3":
            window.location.href = "test2.html";
            break;
}

}
