function Animal(data){

    that = {}
    that.name = data.nm

    return that;
}

function Lion(info){

   var anim = new Animal(info)

   
   this.dettail = function(){
        console.log(
            `name of animal is ${anim.name}`
        )
   }

}

let l = new Lion({nm : "Lion Ji"})
l.dettail()




/*
lion = {}
lion.age = 20;
*/