//old way of using prototype chaining without 
// classes in javascript oop

const Person={
    firstname:"elie",
    lastname:"iradukunda",
    sayHello:function(){
        console.log(`hello my name is ${this.firstname} , ${this.lastname}`)
    },
};


const developer=Object.create(Person)// here developer's prototype is now person

developer.firstname="kanyarwanda" // this means developer add specific its firstname
developer.programingLanguage="javascript";


console.log(developer.programingLanguage)
console.log(developer.firstname)
console.log(developer.lastname)// here it will inherit property form its parent prototype object which is parent
developer.sayHello()
Person.sayHello()
console.log(developer.job)// it will output undefined becaouse it will check both prototype of person and its self dont find job
// then lets create another object inherits from developer


const jsdeveloper=Object.create(developer)// this means developer become prototype for js developer
jsdeveloper.framework='react';
jsdeveloper.firstname="rukundo"


console.log(jsdeveloper.firstname)
console.log(jsdeveloper.framework)
console.log(jsdeveloper.lastname)
console.log(jsdeveloper.programingLanguage)

// think of it when we want to create hunreds of 
// person object all time to use
// object .create() can be not good for us

// we will need constractor function to avoid that

function PersonConstractor(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`hello my name is ${this.name} and am ${this.age} years old`)
    }
    
}
const person1=new PersonConstractor('karisa',70)


// this will output function itself

// we will need new keyword

console.log(person1)

// it will out put
// PersonConstructor { name: 'Alice', age: 25, greet: [Function] }
// and constractor function is greet but is memory wastage
// because any time we create new object it will bring also the greet methods any time
// we can use built in prototype to solve that issues
// we can add prototype of personconstractor function


function PersonConstractor2(name,age){
    this.name=name;
    this.age=age;

}
PersonConstractor2.prototype.greeting=function(){
    console.log(`hello am ${this.name} and i have ${this.age} years old`);


}
const person3= new PersonConstractor2('karisa',90)
console.log(person3)// here it does not bring greeting method again because we assign prototype to it

person3.greeting()

// lets go to inhewritance from constractor function

// we will need speacial trick methods called call()



function personconstractor2(name,age){
    this.name=name;
    this.age=age;

}

personconstractor2.prototype.greet2=function(){
    console.log(`hello am${this.name} with ${this.age}`)
};

function Developerpersonconstractor(name,age,programinglanguage){
personconstractor2.call(this,name,age);

this.programingLanguage=programinglanguage;
this.coding=function(){
    console.log(`hello ${this.name} use ${this.programingLanguage}`)
}
    

}

const dev1=new Developerpersonconstractor("mukamana","emmy","python");
console.log(dev1)
console.log(dev1.programingLanguage)
dev1.coding()

// and constractor function is powefull but is a not good because any time
// when we want to make inheritance for prototye we use call() object.create()
// so es6 introduces new way of using ES6 CLASSES which is better way lets repete above example for person and dev

class PersonClass{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }

    greet(){
        console.log(`hello am ${this.name}`)
    }
}
const person5=new PersonClass('kamana',30)
person5.greet()
// lets make in hertance with extends instead of object.create and call

class DeveloperpersonClass extends PersonClass{
    constructor(name,age,programingLanguage){
        super(name,age)
        this.programingLanguage=programingLanguage;
    }

    code(){
        console.log(`hello am  ${this.name} and i use ${this.programingLanguage}`)

    }


}// in above super act like call in old version but here is clean

// extends work like object.create() in old version

const person6=new DeveloperpersonClass("mugisha",70,"java")
person6.code()
console.log(person6.name)

// then lets go in inhertance for class syntax
class Devllocation extends DeveloperpersonClass{
    constructor(name,age,programingLanguage,location){
        super(name,age,programingLanguage);
        this.location=location;
    }

    codingskill(){
        console.log(`hello am ${this.name} and i come from ${this.location}`);


    }


}


const person7=new Devllocation('kaka',90,'python','kigali')
person7.codingskill()



