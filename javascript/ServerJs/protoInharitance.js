function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }



  let p = new Person("jon", "snow",25,"blue")
  console.log(p)
  console.log(p.firstName)
  

  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };
Person.prototype.nationality = "English";


console.log(p.nationality)
console.log(p)