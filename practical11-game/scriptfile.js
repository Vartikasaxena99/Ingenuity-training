
var currentPoint=0;
var hj=document.querySelector("h2");
var hy=document.querySelector("p");
var all=document.getElementsByClassName("dirt");
var allMol=document.getElementsByClassName("mole");

function start(){
    hj.style.visibility="hidden";
    document.getElementById("mole").style.visibility='hidden';
    document.getElementById("mud").style.visibility="hidden";
    document.getElementById("start").style.visibility='hidden';

    for(var i=0;i<2;i++){
        document.getElementsByClassName("points")[i].style.visibility="visible";
    }
    for(var i=0;i<6;i++){
        document.getElementsByClassName("dirt")[i].style.visibility="visible";
    }
    let x= setInterval(() => {
        var random=Math.floor(Math.random()*6)+1;
        document.getElementById("mole"+random).style.visibility="visible";
        setTimeout(() => {
            for(var i=0;i<6;i++){
                document.getElementsByClassName("mole")[i].style.visibility="hidden";
            }
        }, 900);
    }, 1000);


    let timeSecond = 0;
const timeH = document.querySelector("h4");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond++;
  displayTime(timeSecond);
  if (timeSecond == 60 || timeSecond >60 ) {
    endCount();
    clearInterval(countDown);
    clearInterval(x)
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
   for(var i=0;i<6;i++)
   {
    all[i].style.visibility="hidden";
    allMol[i].style.visibility="hidden";
   }
  timeH.innerHTML = "Time out";
   hj.style.visibility="hidden";
  {
    if(currentPoint>=10)
    {
        hy.innerText="you have won the match";
    }
    else
    {
        hy.innerText="you have lost the match";
    }
  }
    
}

}

function clicked(){
    
    document.getElementById("currentPoint").innerHTML=currentPoint++;
}

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});



