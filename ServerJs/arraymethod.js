let arr = [1, 2.2, "hyy", true, null, undefined]
console.log(arr)
arr.push("hello")
arr.push("heyaaa")
console.log(arr)

arr.pop()
console.log(arr)


arr.shift()
console.log(arr)
arr.unshift("xyz")
console.log(arr)

console.log( arr.length)
console.log( arr.at(0))

let na = new Array(1,2,34,56,3,5,5)
//na.fill(5)
console.log(na)

console.log( arr.includes('hy'))

console.log( arr.join('-'))
console.log( arr.reverse())

console.log( na.sort())
