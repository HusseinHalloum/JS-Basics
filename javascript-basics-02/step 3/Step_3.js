var div = document.querySelector("div");
var input = document.querySelector("input");
input.addEventListener("change",function(){
    div.innerHTML =  document.getElementById("name").value;
})

