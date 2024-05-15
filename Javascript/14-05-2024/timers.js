/*
function hello(){
    alert("hello world")
}
setTimeout(hello,5000)
*/

var hello=()=>{
    // alert("I am arrow function")
    console.log("Hello")
}
// setTimeout(hello,2000)
let timerid = setInterval(hello,3000)
console.log(timerid)
setTimeout(
    ()=>{
        clearInterval(timerid);
        alert("Timer stopped")
    },9000
)
