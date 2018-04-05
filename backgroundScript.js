
var result = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");

color1.oninput = changeColor;
color2.oninput = changeColor
// color2.addEventListener("input",changeColor);


function changeColor(){
// document.body.style.backgroundColor = color1.value;
 body.style.background = createColorString(color1.value, color2.value);
result.textContent = body.style.background + ";";
};

//returns a string for gradient color style based on the two
//color parameters passed
function createColorString(color1, color2){
	return "linear-gradient(to right," +color1 +","+ color2+")";
}

//code to display the css code when the page loads
result.textContent = "linear-gradient(to right, red , yellow);";
color1.value = "#FF0000";
color2.value = "#FFFF00";

//code for the random button
document.getElementById("random").addEventListener("click", function(){
   var color1 = "rgb("+ Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255+")";
   var color2 = "rgb("+ Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255+")";

   body.style.background = createColorString(color1, color2);
});