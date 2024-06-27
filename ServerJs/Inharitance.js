/*
//Single inharitane..........................................
class Car{

    engine = true;
    wheal = 4;

    mileage(){
        console.log("mileage of the Car...............")
    }
}


class Ferrari extends Car{

     celling = false;
}


let car = new Car()
console.log(`Engine of car is : ${car.engine}`)
console.log(`Wheal of car is : ${car.wheal}`)

//CHi;ds property and method is not inharited in parent.
//console.log(`ceiling of car is : ${car.celling}`)
car.mileage()

console.log(`------------------------------------------------------------`)

let fer = new Ferrari()
console.log(`Engine of ferrari is : ${fer.engine}`)
console.log(`Wheal of ferrari is : ${fer.wheal}`)
console.log(`Ceiling of ferrari is : ${fer.celling}`)
fer.mileage()



//Multilevel inharitane..........................................
class Car{

    engine = true;
    wheal = 4;

    mileage(){
        console.log("mileage of the Car...............")
    }
}


class Ferrari extends Car{

     celling = false;
}

class Ferrari20 extends Ferrari{

    speed = 500
}


let car = new Car()
console.log(`Engine of car is : ${car.engine}`)
console.log(`Wheal of car is : ${car.wheal}`)

//CHi;ds property and method is not inharited in parent.
//console.log(`ceiling of car is : ${car.celling}`)
car.mileage()

console.log(`------------------------------------------------------------`)

let fer = new Ferrari()
console.log(`Engine of ferrari is : ${fer.engine}`)
console.log(`Wheal of ferrari is : ${fer.wheal}`)
console.log(`Ceiling of ferrari is : ${fer.celling}`)
fer.mileage()

console.log(`------------------------------------------------------------`)
let newF = new Ferrari20()
console.log(`Engine of ferrari2.0 is : ${newF.engine}`)
console.log(`Wheal of ferrari2.0 is : ${newF.wheal}`)
console.log(`Ceiling of ferrari2.0 is : ${newF.celling}`)
console.log(`Speed of ferrari2.0 is : ${newF.speed}`)
fer.mileage()






//Hierarchial inharitane..........................................
class Car{

    engine = true;
    wheal = 4;

    mileage(){
        console.log("mileage of the Car...............")
    }
}


class Ferrari extends Car{

     celling = false;
}

class Ferrari20 extends Car{

    speed = 500
}


let car = new Car()
console.log(`Engine of car is : ${car.engine}`)
console.log(`Wheal of car is : ${car.wheal}`)

//CHi;ds property and method is not inharited in parent.
//console.log(`ceiling of car is : ${car.celling}`)
car.mileage()

console.log(`------------------------------------------------------------`)

let fer = new Ferrari()
console.log(`Engine of ferrari is : ${fer.engine}`)
console.log(`Wheal of ferrari is : ${fer.wheal}`)
console.log(`Ceiling of ferrari is : ${fer.celling}`)
fer.mileage()

console.log(`------------------------------------------------------------`)
let newF = new Ferrari20()
console.log(`Engine of ferrari2.0 is : ${newF.engine}`)
console.log(`Wheal of ferrari2.0 is : ${newF.wheal}`)

//Ceiling proerty wont be inharited bcz its his siblings property
//and inharitance btn sibling is not happen.
console.log(`Ceiling of ferrari2.0 is : ${newF.celling}`)
console.log(`Speed of ferrari2.0 is : ${newF.speed}`)
fer.mileage()



//Multiple inharitance...................
class Car1{

    engine = true;
    wheal = 4;

    mileage(){
        console.log("mileage of the Car...............")
    }
}


class  Car2{

     celling = false;

     mileage(){
        console.log("mileage of the Car...............")
    }
}

class Ferrari extends Car1, Car2{

    speed = 500
}
*/

