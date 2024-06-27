
class Animal {
   
    name = "SherKhan"

    constructor(tail, trunk, legs) {
        this.tail = tail;
        this.trunk = trunk;
        this.legs = legs;

        this.eat = function () {
            console.log(`Animal is eating....`);
        };

        this.sleep = function () {
            console.log(`Animal is sleeping....`);
        };

        this.show = function () {
            console.log(`Detail of animal is :
                        Legs are : ${this.legs} and
                        It has a tail : ${this.tail} and
                        It has a trunck : ${this.trunk} ${this.name}
            `);
        };


        this.detail = () =>{
            return [this.legs, this.tail, this.trunk]
        }

    }
}



let ob =  new Animal(true, true, 4)
console.log(ob.legs)
console.log(ob.tail)
ob.sleep()
ob.show()

ob.detail().forEach(dt => console.log(dt))


console.log(ob.name)



