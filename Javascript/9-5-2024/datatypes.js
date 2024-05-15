//Number data types

/*

var a=10
console.log(typeof(a))

var b=10.5
console.log(typeof(b)) 

*/


//String data type

/* 

var a  = "Kalyan"
console.log(typeof(a))

var b = 'India'
console.log(typeof(b))

*/

//boolean datatype

/*
var a = false
console.log(typeof(a))


var b = true
console.log(typeof(b))

 
var a
console.log(typeof(a))

var b=null
console.log(typeof(b))


var a = [10,20,30]
console.log(a)
console.log(typeof(a))


var b = [1,"kalyan",true,null]
console.log(b)
console.log(typeof(b))

object datatype

 
var details={
    name:"kalyan",
    age:22,
}
console.log(details)
console.log(typeof(details))


console.log("Hello world")
console.debug("Debugging in the process")
console.warn("This is a warning")
console.error("This is an error")
console.info("This is just an Information")

var person=new Object();
person.name="Kalyan",
person.age=23,
person['gender']="male",


console.log(person.name+" "+person.age)

*/

/*
var person={
    name:"kalyan",
    age:23,
    height:5.8,
    gender:"male",
    dance:function()
    {
        console.log("kalyan is dancing")
    }
}

console.log(person.dance)
person.dance()

var keys = Object.keys(person);
console.log(keys)

var values = Object.values(person);
console.log(values)

var newperson=person
newperson.age=40
console.log(person.age)


console.log(100/"kalyan")

console.log("ba"+(100/"kalyan")+"a")  //banana without using n */


//Strings
/*
var firstname="sachin"
console.log(firstname.length) //to find the length if a string

var str = "hi \"I am escape character\""
console.log(str)

var str1="Hello"
var str2="Hello2"
var str3=new String("Hello")
console.log(str1==str2) // "==" checks only data
console.log(str1==str3)
console.log(str1===str3) //"===" checks both data and type

console.log(typeof(str1))
console.log(typeof(str3))

*/


//Importanat string methods

var str="Hello World!"
console.log(str.charAt(0));
console.log(str[0]);

str[0]="p"; //wont replace character
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.slice(2))
console.log(str.slice(-2)) //ignores i2 index to extract all values prior to it
console.log(str.substring(-2))
console.log(str.replace("Hello","hi"))

var str="Hello Hello world"
console.log(str.replaceAll("Hello","Bye"))

var str="          Hello        world        "
console.log(str.trim())

var str1="ontipuli"
var str2="kalyan"
console.log(str1+" ".concat(str2))

console.log(str1.substr(3,6))