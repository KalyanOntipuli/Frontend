var arr = [10,20,30,40,50];

//reduce --> reduces the array into one single value
var callback = (prev,current)=>{
    return prev+current;
}
var res = arr.reduce(callback,10)
// console.log(res)

//sorting

var arr = ["Sachin","Aakash","Virat","Goutham"];
// console.log(arr.sort());
var arr = [10,2,5,1,7];
var a = arr.sort((a,b)=>{
    return a-b;
})
// console.log(a)

//filter method
var arr = [10,20,30,40,50];
var res = arr.filter(
    (ele)=>{
        return ele>20;
    }
)
