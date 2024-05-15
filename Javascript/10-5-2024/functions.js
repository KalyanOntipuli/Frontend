/*Built in functions

alert()
confirm()
prompt()
parseInt()
parseFloat()
sqrt()
*/

/*User Defmined fuctions

Function Declaration
Function Expression
Anonymous Function
Arrow Function

*/


/* alert
var str1="Tap"
var str2="Academy"
alert(str1+str2)    //only ok button
*/



/* confirm
var str1="Tap"
var str2="Academy"
confirm(str1+str2)  //both ok and cancel buttons

*/

/* prompt
var str1 = prompt("Enter the string 1")  // Allows to take user input
var str2 = prompt("Enter the string 2")
console.log(str1+str2)
*/
/*

var a=parseInt(prompt("Enter the num1"))
var b=parseInt(prompt("Enter the num2"))
console.log(a+b)
*/

/*
var a = parseFloat(prompt("Enter the number to find square root"))
srt=Math.sqrt(a)
console.log(srt)
*/



/*Function Declaration 
function functioName(parameters)
{
    //function body
}
*/
/*
var a
var b

function display(a,b){
    alert(a+b)
}

display(10,20)

*/
/*
function display(){
    confirm("This is function declaration")
}
display()
*/

/*
function display(){
    var a=2
    var b=5
    return a*b
}
var product = display()
alert("product is "+product)
console.log(product)
*/

/* Function Expression

var functionName = function(parameters){
    //function body
}

*/

/*
var a
var b
var display  = function(a,b){
    let product=a*b
    alert(product)
    return product
}
 var product  = display(10,20)
 console.log(product)
*/

/*Anonymous Function

    var ref=function(parameters){
        //function body
    }

    ref()
*/

/* Arrow Function 

    var functionName = (parameters)=>{

    } 

*/
/*
var a 
var b 
var display=(a,b)=>{
    alert(a*b)
    return a*b

}
var p = display(10,20)
console.log(p)

*/

// Anonymous funtion as a parameter
var arr = [10,20,30,40,50,60];
arr.forEach(function(element,index){
    console.log(element+" "+index)
})
 
//Map function

var res = arr.map(
    (element)=>{return element*2}
)
console.log(res)