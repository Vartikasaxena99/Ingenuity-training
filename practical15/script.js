//selectors
var canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");


//Animation
var circle={
    x:200,
    y:200,
    size:30,
    dx:5,
    dy:5,
}
//Draw the circle

function drawCircle()
{
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle="purple";
    ctx.fill();
}
drawCircle();
function update()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    circle.x+=-circle.dx;
    // circle.y+=circle.dy;
    //detect ball
    if(circle.x+circle.size > canvas.width ||circle.x-circle.size <0 )
    {
        circle.dx*=-1;
    }
    // if(circle.y+circle.size > canvas.height ||circle.y-circle.size <0 )
    // {
    //     circle.dy*=-1;
    // }
    requestAnimationFrame(update);
    console.log(123);
}
update();