/*
var arr=[];
arr=[1,2,3,4,5]
console.log('First way',arr);

//2nd approach

var arr2=new Array(10);
arr2=new Array(1,2,3,4,5,"kalyan",true,{})
console.log("second way",arr2)
console.log(arr2[5]) //accessing using index
console.log(arr2.length) //length of an array
*/

//Arrray Methods

//push
 var arr=[]
 arr.push(10)
 console.log(arr)
 arr.push("Kohli")
 arr.push(null)

//pop removes element from last index

arr.pop()
arr.pop()

//unshift method appends the data at the begininng of the array
arr.unshift("virat")

//shift --> removes beginning element from the array
arr.shift()
arr.shift()

arr=[11,12,13,14]

//Finding index of  a particular element
console.log(arr.indexOf(12))
console.log(arr.indexOf("kalyan")) //element not found return -1

//join--> joins all elements in array and return string ,default seperatir is ","

console.log(arr.join("-"))


//includes --> checks elements present in array or not
console.log(arr.includes(13))

//reverse -->reverse the entry array

console.log(arr.reverse())

//slice
console.log(arr.slice(2))

//splice
console.log("original array before splicing",arr)
console.log("spliced array",arr.splice(2,3)) //second parameter is no of elements
console.log("original array after splicing",arr)

//removing particular element based on index

console.log(arr.splice(arr.indexOf(12),1))

// Anonymous funtion as a parameter
var arr = [10,20,30,40,50,60];
arr.forEach(function(element,index){
    console.log(element+" "+index)
})
 

