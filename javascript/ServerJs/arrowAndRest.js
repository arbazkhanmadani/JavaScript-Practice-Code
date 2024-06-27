//Spread Operator......................
/*let arr= [1,2,3,4,5,6]
console.log(arr)

const[a,b, ...arr1] = arr
let newArr = [...arr, ...arr1]

console.log(a)
console.log(b)
console.log(arr1)
console.log(newArr)

let obj = {
    id : 100,
    name: 'xyz',

}
let obj1 = {
    id : 1000,
    name: 'abc',
    age:44
}

const comboObj = {...obj, ...obj1}
console.log(comboObj)



//Rest Operator......................
function Rest(...a){
  
    sum = 0;
    for(e of a)
    sum = sum + e;
    console.log(sum)
}

Rest(1,2,3,4,5,6,7,8)
*/



//Spread Operator......................
/*
let a1 = [1,2,3,4]
console.log(`a1 : ${a1}`)
let a2 = ["hyyy", "hello", 10,1000]
console.log(`a2 : ${a2}`)


let mergeArr = [...a1, 50.5000, ...a2, "newElm", true]
console.log(`new merged array : ${mergeArr}`)


let obj = {
    id : 1000,
    genger:'f'
}

let obj1 = {
    id : 1,
    name: 'abc',
    age:44
}

console.log(obj);
console.log(obj1);

const comboObj = {...obj, ...obj1}
console.log(comboObj);
*/




//Rest Operator......................
let add = (a, ...args) =>{

    sum = 0;
    for(let i = 0; i<args.length; i++){

        sum = sum + args[i]
    }
    console.log(`sum of rest eleement is ${sum}`)
    console.log(`a eleement is ${a}`)
}

add(1,2,3,4,5)


