var pass = document.getElementById("password");
var confirmPass = document.getElementById("confirmation");
var test = document.querySelector("button");
test.addEventListener("click", function(){
    if(pass.value != confirmPass.value)
        {  pass.style.borderColor = "red";
           confirmPass.style.borderColor = "red";
        }
})