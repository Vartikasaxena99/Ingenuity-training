const API_URL = "https://api.covid19api.com/summary"; 
function apiget(url) 
{ 
    console.log("We are good to go to call API using XHR "); 
    return new Promise((resolve, reject) => 
    { 
        var request = new XMLHttpRequest(); 
        request.open("GET", url); request.send(); 
        request.onload = () => 
        { 
            console.log(request); 
            if (request.status === 200) 
            { 
                resolve(request.response); 
            } 
            else 
            { 
                reject("Not able to fetch Data"); 
            } 
        }; 
    });
 } 
apiget(API_URL).then((val)=>{return JSON.parse(val)}).then((re)=>{
       rr(re.Countries);
       }).catch((err)=>console.log(err));
function rr(RE){
    var select= document.getElementById("sel");
    for(var i=0;i<195;i++){
        var option=document.createElement("option");
        option.innerText=RE[i].Country;
        option.value =RE[i].Country;
        select.appendChild(option);
        console.log(select);
    }
    select.onclick=function(){
        var option=select.options[select.selectedIndex];
        var a=option.value;
        console.log(a);
        console.log(select.options.length);
        for(var i=0;i<select.options.length;i++){
            if(a==RE[i].Country){
                var h1=document.getElementById("1");
var h2=document.getElementById("2");
var h3=document.getElementById("3");
var h4=document.getElementById("4");
var h5=document.getElementById("5");
var h6=document.getElementById("6");
h1.innerText=" "+RE[i].Country;
h2.innerText=" "+RE[i].Date;
h3.innerText=" "+RE[i].TotalConfirmed;
h4.innerText=" "+RE[i].TotalDeaths;
h5.innerText=" "+RE[i].NewConfirmed;
h6.innerText=" "+RE[i].NewDeaths;
}}}
}  




