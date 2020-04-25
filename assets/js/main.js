function myFunction() {
    document.getElementById("test").style.color = "red";
    document.getElementById("test").innerHTML = "<h1>Hello h1<h1>";
}
function changeText(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("test2").innerHTML = userInput ;
}