let arr = [1, 2.2,3,54,66]

//for of loop.........

for( elm of arr){
    console.log(elm)
}

//for each function......
arr.forEach( e =>{ 
    if(e>5)
        console.log(e)
    }
)

//map function...........
let newArr = arr.map( e => e*2)
console.log(arr)
console.log(newArr)


//[1, 2.2,3,54,66]
//filter function..........
let evenArr = arr.filter( g => g%2==0)
console.log(evenArr)

let names = ["sakeena", "neha", "geetanshi", "sameera", "sakira"]

let newName = names.filter(nm => nm.startsWith('s'))
console.log(newName)


let newName1 = names.filter(nm => nm.length ==6)
console.log(newName1)