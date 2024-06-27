

function Student(name, age, cllg){

    this.name = name;
    this.age = age
    this.cllg = cllg

}



function Person(name, age, cllg){

    this.name = name;
    this.age = age
    this.cllg = cllg

    this.info = function(){
        return [name, age]
    }

}


 let stObj = new Student("xyz", 22, "narsi Monjee")
 console.log(stObj.age)
 
 let dtl = stObj.info()[0]
 console.log(dtl)










/*let nums = [1,2,3,4,5,6,7,8,9]

nums.forEach( function clb(elm){
    console.log(elm)
})

function showResult(cllback){

    return nums.forEach(cllback)
    
    // return nums.forEach(function proccessResult(r){
     //console.log(r)
       // })
    
}
function proccessResult(r){

    console.log(r)
}

showResult(proccessResult)





function  add(a,b,c){

    return a+b+c
  }


function outer(a){

    return function inner(b){

        return function innerMost(c){

            return a+b+c;
        }
    }
}

let rs1 =  outer(1)(2)(3)
console.log(rs1)

    //understanding behind the schene of currying
  //let outerR = outer(1);
  //let innerR = outerR(2);
  //let innerMostR = innerR(3)

  //console.log(outerR)
  //console.log(innerR)
  //console.log(innerMostR)
  




  let rs = add(10,20,30)
  console.log(rs)
  */