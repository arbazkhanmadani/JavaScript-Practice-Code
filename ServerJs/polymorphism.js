class Human{

    //Method Overriding..........
    learning(){

        console.log("Human is learning..................")
    }

    //Method Overloading.........
    detail(name, address, age){

        console.log( name)
    }
    detail(name,address){

        console.log( name, " ", address)
    }
    detail(name){

        console.log( name)
    }
}


class Geetanshi extends Human{

    learning(){

        console.log("Geetanshi is learning..................")
    }
}

let hum = new Human()
hum.learning()
hum.detail("xyz", "Ho ga kahi ka bhi.", 233);
hum.detail("xyz", "Ho ga kahi ka bhi.")
hum.detail("xyz", "Ho ga kahi ka bhi.", 233);
let geet = new Geetanshi()
geet.learning()