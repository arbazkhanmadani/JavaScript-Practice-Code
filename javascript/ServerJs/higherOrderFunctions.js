/*//Higher Order func and Caryying...........
function Outer(a){

    return function inner(b){

        return function innerMost(c){
            return a+b+c;
        }
    }
}

let outerR = Outer(1);
let innerR = outerR(2);
let innerMostR = innerR(3);
console.log(innerMostR)

console.log(Outer(10)(20)(30))


//Callback func................
let arr = [1,2,3,4,5]
function Summation(callback){
    arr.forEach(n => console.log(n))
}
function  proccesing(){
    return arr;
}
Summation(proccesing)



function MainFunc(callback){
    
    arr.forEach(callback)
}
function  subFunc(result){
    console.log(result)
}

MainFunc(subFunc)

*/

//Constructor Func.................
function Person(name, age){

    this.name = name;
    this.age = age;

    this.info = function(){
        return [name, age]
    }

}

let person = new Person("xyz", 22);
console.log(person)

person.info().forEach(n => console.log(n))

console.log(person.info()[0])