try{
    var num=20;
    firstname="kalyan";
    console.log(firstname)
    throw new Error("New error"); 
}
catch(err){
    console.log(err)
}
finally{
    console.log("Finally executed")
}