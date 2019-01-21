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
    let x = 100;
    let y = 100;
    let dx = 5;
    let dy = 5;
    $("button").hide();
    $("h1").hide();
    setInterval(function() {
        drawCircle(x, y); 
        if( x<0 || x>$("canvas").width()) dx=-dx; 
        if( y<0 || y>$("canvas").height()) dy=-dy; 
        x+=dx;
        y+=dy;
        resize(op);
    }, 15);
}

function drawCircle(x, y)
{
  let context = $("#Rebound")[0].getContext('2d');
  context.clearRect(0,0, $("canvas").width(),$("canvas").height());
  context.beginPath();
  context.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true); 
  context.closePath();
  context.fill();
}

$(document).ready(function() {
    $("button").click(startGame);
});