function getparagraph(){
var inputs = [];
for (var i = 1 ; i<=6 ; i++ ){
inputs.push(document.getElementById("div1_text"+i).value);
}
document.getElementById("output1").innerHTML = inputs.join(". ");
}