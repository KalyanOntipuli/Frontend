var arr=[10,20,30,40];
// var num1=arr[0];
// var num2=arr[1]
// var num3=arr[2]
// var num4=arr[3]

var[num1,num2,num3,num4] = arr   //destructering of an array

console.log(num1+" "+num2+" "+num3+" "+num4)


//rest parameters

var[n1,n2,...rest]=arr
console.log(rest)  //30,40

//object Destructuring

var student={
    firstname:"kalyan",
    lastname:"ontipuli"
}
// var fname=student.firstname
// var lname=student.lastname

var {firstname,lastname}=student;

console.log(firstname+" "+lastname);


