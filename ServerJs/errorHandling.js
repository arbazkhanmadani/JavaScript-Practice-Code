/*
let a = 10
console.log(a)

try{
    console.log("Before Error")
  console.log("Operation : "+0/0)// new Error()

    console.log("After  Error")

}catch(err){

    console.log(err.name) 
    console.log(err.message) 
    console.log("Catch block...................")
   //let err = new Error()
}
finally{
    console.log("Finally is running..................")
}

console.log("Outside Catch block...................")
console.log('after error') 

*/




let age = 8

if(age<=18){

    throw new EvalError("Opps!! Erorr, you're not eligible....")
}
else{
console.log("eligible")
}






