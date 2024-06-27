let str = "this is Javascript."

let code = str.charCodeAt(3)
console.log(code)
console.log(str.endsWith("."))
console.log(str.startsWith("this"))
console.log(str.indexOf('i'))
console.log(str.lastIndexOf('i'))
console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase())
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())
console.log(str.replace('i','j'))
console.log(str.replaceAll('i', 'j'))
console.log(str.substring(0,5))
console.log(str.substr(5))

let strArr = str.split('i')
console.log(strArr)
let obj =  str.valueOf(new Date())
console.log(obj)

let text = "5";
let padded = text.padStart(4,"0");
console.log(padded)
let text1 = "5";
let padded1 = text1.padEnd(4,"0");
console.log(padded1)