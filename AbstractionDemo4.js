class DemoA{
    constructor(name){
        this.name = name;
    }
    // in javascript we cannot represent a abstract method like other programming languages
    //it can be simulated by using a throw in the function in the base/parent class

    display(){
        // console.log('this is a abstractmethod')
        throw new Error("i am not implemented")
    }
}

class DemoB extends DemoA{
    display(){
        return `${this.name} this is from parent name`
    }
}

const objdemob = new DemoB('sam')
console.log(objdemob.display())