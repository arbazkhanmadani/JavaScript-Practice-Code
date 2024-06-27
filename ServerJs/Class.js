/*class Lion{

    static name = 'lion'
    age = 35

    roar(){
            console.log("lion is raoring...............")
    }

    static eat(){
        console.log("Lion is eating..................")
    }
}


Lion.eat()
console.log(Lion.name)

let l = new Lion()
console.log(l.age)

let l1 = new Lion()
l1.age = 45;
console.log(l1.age)
*/



class Deer{

     #_name
     #_age
    specis = 'sahara'

    set name(nm){
        this.#_name = nm;
    }

    get age(){
        return this.#_name;
    }

    set age(ag){
        this.#_age = ag;
    }

    get name(){
        return this.#_age;
    }
}

let deer = new Deer()

//deer.name('Pyari deer tumhara pyara deer.')
deer.name = 'Pyari deer tumhara pyara deer.'
deer.age = 22
console.log(deer.name)
console.log(deer.age)
console.log(deer.specis)
