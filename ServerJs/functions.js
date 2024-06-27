// Regular fun...........
/*function addTwoNum(a, b){
    return [a,b,1000000]
}*/


//Arrow function.......
/*let addTwoNum = (a,b) => console.log(a+b)
*/

//Anonymus or function expresion.........
/* let addTwoNum =  function (a,b){
    console.log(a+b)
}*/

//Immediatly invoked function expresion.........
/*
(function (a,b){
    console.log(a+b)
})(10,20);
*/



//callback functions..............
function addTwoNum(a, b){
  return a+b
}

function show(callback){
    console.log(callback)

}
show(addTwoNum(10,20))







