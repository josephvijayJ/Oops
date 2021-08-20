/*
This in Oops,

const guy = {
    firstname : 'Joseph',
    lastname : 'Vijay',
    fullname : function()
    {
        return this.firstname + ' ' + this.lastname;
    }
};

console.log(guy.fullname());

//This => refers to the main object whic is guy.
//we have to call with the object name.
//Eg => guy.fullname();


function getFullName(){
    return this.firstname + ' ' + this.lastname;
}
const guy = {
    firstname : 'Joseph',
    lastname : 'Vijay',
    getFullName : getFullName
};

console.log(guy.getFullName());

//This is another way to call the function.

//Oops => Object Oriented Programming.

CLASS:

A class is simply a blue print.
For example if we have the blueprint of a car.which has certain base properties like door,wheel,Engine,sunroof.
we can create more number of new cars like this by changing its properties alone.


Let us see a Example for the class.

For creating a class we should have a keyword class.


class Car{
    constructor(wheel,door,engine,sunroof)//in the constrfuctor we are passing all the properties.
    {
        this.wheel = wheel;
        this.door = door;      // These are the Class Variables.
        this.engine = engine;
        this.sunroof = sunroof;
    }
}

const Audi = new Car(4,4,'V8',false);

//Audi => Object of the class.
//keyword new defines we are creating a new object from the class.

const BMW = new Car(4,4,'V6',true);
const RollsRoyce = new Car(4,4,'V12',false);

console.log(Audi);
console.log(BMW);
console.log(RollsRoyce);

output:

Car { wheel: 4, door: 4, engine: 'V8', sunroof: false }
Car { wheel: 4, door: 4, engine: 'V6', sunroof: true }
Car { wheel: 4, door: 4, engine: 'V12', sunroof: false }


Encapsulation:

so let us create a bank class of

name,acctype,balance,Accno


class Bank{
    constructor(name,acctype,balance,accno)
    {
        this.name = name;
        this.acctype = acctype;
        this.balance = balance;
        this.accno = accno;
    }
    getBalance()
{
    return this.balance;
}
withDraw(WithdrawAmount)
{
    if (this.balance >= WithdrawAmount)
    {
        this.balance = this.balance - WithdrawAmount;
        return this.getBalance();
    }
    else{
        return `Insufficient Amount,Your balance is : ${this.getBalance()}`;
    }
}
}

const Joseph = new Bank('Joseph','Current',111000,56444769);
const Vijay = new Bank('Vijay','Savings',211000,56543719);

//console.log(Joseph,Vijay);

//till this we know All are good.
//so now the task is to return the balance of paraticular customer.
//To get a balance


//console.log(Joseph.getBalance());

//console.log(Vijay.withDraw(10000000000000));
//OUTPUT:
//Insufficient Amount,Your balance is : 211000
console.log(Vijay.withDraw(10000));
// output
201000

// So here we are hiding the function and executing it.
//The idea here is the object should not be fully exposed.
//This process is called Encapsulation.

Inheritance:

The concept of inheritance is iherting from the parent class.
for example the children has the similarities of  their father ,mother or their grand father like that.

In inheritance to extract the properties of Parent class Super keyword is used.

Example code for Inheritance.

class Vehicle{
    constructor(wheels,door,type,lastServicedYear)
    {
        this.wheels = wheels;
        this.door = door;
        this.type = type;
        this.lastServicedYear = lastServicedYear;
    }
    needstoBeServiced()
    {
        const currentyear = new Date().getFullYear();
        if(currentyear - this.lastServicedYear > 1)
        {
            return `Car needs to be Serviced ...`;
        }
        else{
            return `Car is in Good condition`;
        }
    }
}

class Car extends Vehicle{
    constructor(wheels,door,type,engine,sunroof,lastServicedYear)
    {
        super(wheels,door,type,lastServicedYear);
        this.engine = engine;
        this.sunroof = sunroof;
    }
}

const Ferrari = new Car(4,2,'luxury','V8',true,2020);
const Audi = new Car(4,4,'luxury','V4',false,2019);
console.log(Ferrari.needstoBeServiced());
console.log(Audi.needstoBeServiced());

Output:
Car is in Good condition
Car needs to be Serviced ...

*/