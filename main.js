function changeState(operation) {
    if (operation == 1) {
        let height = $("canvas").height() - 3;
        let width = $("canvas").width() - 1.7;
        $("canvas").css("height", `${height}px`);
        $("canvas").css("width", `${width}px`);
    }
    else if (operation == 0) {
        let height = $("canvas").height() + 3;
        let width = $("canvas").width() + 1.7;
        $("canvas").css("height", `${height}px`);
        $("canvas").css("width", `${width}px`);
    }
}

function resize(op) {
    setInterval(function() {
        changeState(op);
        if ($("canvas").height() <= 50) {
            op = 0;
        } else if ($("canvas").height() >= 420) {
            op = 1;
        }
    }, 50);
}

function startGame() {
    let op = 1;
    $("button").hide();
    $("h1").hide();
    resize(op);
}

$(document).ready(function() {
    $("button").click(startGame);
});