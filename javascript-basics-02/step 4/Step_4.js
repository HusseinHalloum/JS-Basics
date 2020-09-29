var reset = document.querySelector("button");
reset.addEventListener("click", function(){
    if(confirm("Are you sure you want to reset ?")){
    document.getElementById("name").value = " ";
    document.getElementById("surname").value = " ";
    document.getElementById("city").value = " ";
    }
})