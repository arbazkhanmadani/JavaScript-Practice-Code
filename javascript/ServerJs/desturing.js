//Arrray Desturing................
/*let arr= [1,2,3,]
let arr1= [true, "Hyyyy"]
console.log(`Array : ${arr}`)

//copy single elems
let [one,three=200,] = arr

//copy entire array elems => [ArrayName]
let [one1Arr] = [arr, ...arr1]
console.log(`Array Destructeed : ${one}, ${three}`)


//Object Desturing................
let obj = {
    id : 100,
    name: 'xyz',
    age:22
}
console.log(`Object : ${obj}`)

const{idD=obj.id,name1 ="abc",age1 = obj.age} = [obj]
console.log(`Object Destructeed : ${idD}, ${name1}, ${age1}`)
*/

let arr = [1,2,3,4,5,6]
console.log('array : ', arr)

const[one, two=100, a] = arr
console.log('desturing elems : ')
console.log('one : ', one)
console.log('two: ', two)
console.log('a : ', a)


let obj = {
    id : 100,
    name: 'xyz',
    age:22
}
console.log('Object : ', obj)

let{id1=obj.id, name1= obj.name} = obj
console.log('desturing elems : ')
console.log('id : ', id1)
console.log('name: ', name1)

















console.log(`Object by template litral ${obj.age} ${obj.name} and ${arr}`)
console.log("Hyyyyyyy \n"+"Heloooooo")
console.log(`
dfsf
sdfsd
ff
f
dfsd
fddfd        ffefefgewf
f                    efdfdfge`)





