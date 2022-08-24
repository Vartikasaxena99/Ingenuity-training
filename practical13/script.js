window.onload=function()
{
  setInterval(() => {
    stoploader();
  }, 3000);
}
function stoploader()
{
  document.querySelector(".container").style.display="none";
  document.getElementById("todocon").style.display="block";
}


// // Selectors
var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");
var ll=0;
ll=Number(window.localStorage.getItem('numberItems'));
console.log(ll);


for(var i=0;i<50;i++)
{
    var rr="tt"+i;
    if(window.localStorage.getItem(rr)==null)
    {
            break;
    }
    else
    {


  

//Functions

    
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = window.localStorage.getItem(rr);
    newDiv.appendChild(newLi);
  
    var cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmplt-btn");
    cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);
    
    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);
    
    todoList.appendChild(newDiv);
    
  } 
}


todoList.onclick=function deletecheck(e) {
  var item = e.target;

  if (item.classList[0] === "delete-btn") {
    var parent = item.parentElement;
    parent.remove();
  }

  if (item.classList[0] === "cmplt-btn") {
    var parent = item.parentElement;
    parent.classList.toggle("completed");
  }
};

btn.onclick=function create(e) {
   
      e.preventDefault();

      if(todoInput.value=="")
    {
        alert("write something to add");
       
    }
    else
    {

       
       var oo="tt"+ Number(ll);

        window.localStorage.setItem(oo,todoInput.value);
        console.log(oo);
        ll=Number(ll)+1;
        //console.log(ll);
        window.localStorage.setItem("numberItems",ll);
 
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");
    
        var newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerHTML =window.localStorage.getItem(oo);
        newDiv.appendChild(newLi);
    
        var cmpltbtn = document.createElement("button");
        cmpltbtn.classList.add("cmplt-btn");
        cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(cmpltbtn);
    
        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);
        
        todoList.appendChild(newDiv);
        todoInput.value = "";
      } ;
    
    
    
    todoList.onclick=function deletecheck(e) {
      var item = e.target;
    
      if (item.classList[0] === "delete-btn") {
        var parent = item.parentElement;
        parent.remove();
      }
    
      if (item.classList[0] === "cmplt-btn") {
        var parent = item.parentElement;
        parent.classList.toggle("completed");
      }
    };
}
    







