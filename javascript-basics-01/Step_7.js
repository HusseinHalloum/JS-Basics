var shoeSize = prompt("Enter your shoe size");
var birthYear = prompt("Enter your birth year");
function showResult(){
    var result = (shoeSize*2 + 5) * 50 - birthYear + 1766;
    alert("The result is : " + result);
}
showResult();
