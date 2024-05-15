/*
var a=10;
var b=20;

document.write(a+b)
alert(a+b)

var isconfimerd = confirm(a+b)
document.getElementById("kalyan").innerHTML="My name is kalyan"
if(isconfimerd==true){
    document.write("Your data is deleted")
}
else{
    document.write("Your data is not deleted from the database")
}
prompt(a+b)

*/
// document.getElementById("para").textContent="<i>I am italic tag</i>"
// document.getElementById("para").innerHTML="<i>I am italic</i>"

/*
var fistname = document.getElementsByName("firstname");
console.log(fistname)

var lastname = document.getElementsByName("lastname")
console.log(lastname)

var input =  document.getElementsByTagName("input")
console.log(input)
var span =  document.getElementsByTagName("span")
console.log(span)

var para = document.getElementById("para");
para.innerHTML = "I am paragraph text";
var num = prompt("Enter a number ");
if(num==1){
    para.innerHTML = `<p>I am paragraph text ${num} </p>`;
    para.style.color = "red";
}
else{
    para.style.color = "blue";
}

para.style.fontWeight = "bolder";
para.style.margin = "10px";
*/

/*
console.log(para)
for(let i=0;i<=para.length;i++){
    para[i].innerHTML="This is paragraph "+i;
}
*/

var parentParagraph = document.getElementById('para');
var newParagraph  =  document.createElement('p');
newParagraph.innerHTML="i am new paragraph element";
console.log(newParagraph)
parentParagraph.appendChild(newParagraph)


var body = document.getElementById("body")
var h1  =  document.createElement('h1')
h1.innerHTML="I am h1 tag"
body.appendChild(h1)
