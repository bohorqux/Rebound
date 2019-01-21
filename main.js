function startGame() {
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