//selectors
var canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
// ctx.fillStyle="red";
// ctx.fillRect(50,50,150,100);

//  ctx.strokeRect(250,50,150,100);
 
 
//  ctx.fillStyle="orange";
//  ctx.roundRect(450,50,100,100,[10]);
//  ctx.fill();

// //  ctx.clearRect(0,0,canvas.width,canvas.height);//for clear 
// //  ctx.clearRect(0,0,150,100);//for clearing particular part
// // ctx.font="30px Arial"
// //  ctx.fillText("hello world",200,200);
// // ctx.linewidth=1;
// // ctx.strokestyle="purple";
// //  ctx.StrokeText("hello world",200,300);

//  //Draw Triangle
//  //Path
// //  ctx.beginPath();
// //  ctx.moveTo(50,50);
// //  ctx.lineTo(150,50);
// //  ctx.lineTo(100,200);
// //  ctx.lineTo(50,50);
// //  ctx.closePath();
// //  ctx.stroke();
// //  ctx.fillStyle="coral";
// //  ctx.fill();

//  /*ctx.beginPath();
//  ctx.moveTo(200,50);
//  ctx.lineTo(150,200);
//  ctx.lineTo(250,200);
 
//  ctx.closePath();
//  ctx.stroke();
//  ctx.fillStyle="coral";
//  ctx.fill();*/


//  /*//filled rectangle
//  ctx.beginPath();
//  ctx.rect(300,50,150,100);
//  ctx.fillStyle="blue";
//  ctx.fill();*/


//  //Draw arc

//  ctx.beginPath();
//  ctx.arc(300,300,100,0,Math.PI*2);
//  ctx.stroke();
// //  radian=(Math.PI)*2;//full circle
// //  radian=(Math.PI)//half circle





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
    circle.y+=circle.dy;
    //detect ball
    if(circle.x+circle.size > canvas.width ||circle.x-circle.size <0 )
    {
        circle.dx*=-1;
    }
    if(circle.y+circle.size > canvas.height ||circle.y-circle.size <0 )
    {
        circle.dy*=-1;
    }
    requestAnimationFrame(update);
    console.log(123);
}
update();