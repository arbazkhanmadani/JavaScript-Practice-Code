class Animal{

    teeth
    legs 
    constructor(teeth, legs){
       this.teeth = teeth;
        this.legs = legs;
    }

    eat(){
        console.log("Animal is eating...............")
    }
}
class Lion extends Animal{

    constructor(tail,teeth, legs){
    
        super(teeth,legs)   
        this.tail = tail;
       
    }
     roar(){
        console.log("Lion is roaring..............")
        super.eat()
     }
     
}
let a= new Animal()
let l = new Lion(true,true,4)

console.log("Animal's properties..............................")
console.log(`teeth of animal is ${l.teeth}`)
console.log(`legs of animal is ${l.legs}`)
l.eat()

console.log("Lion's properties..............................")
console.log(`teeth of lion is ${l.teeth}`)
console.log(`legs of lion is ${l.legs}`)
console.log(`tail of lion is ${l.tail}`)
l.roar()
