
function buttonClick(){
    var body = document.getElementById("body");
    var h1 = document.createElement("h1");
    h1.innerHTML="You clicked button"
    body.append(h1)

}

function onDropDownChange(event){
    console.log("Drop down value changed",event.target.value)
}


function keyPress(event){
    console.log("key pressed",event.target.value)

}

function mouseOver(event){
    document.getElementById("box").style.backgroundColor="red";
}
function mouseOut(event){
    document.getElementById("box").style.backgroundColor="black"
}