class demoA{
   
        demoFunc(){
            return "this is from Class A"
        }
}

class demoB extends demoA{
   
    demoFunc(){
        return "this is from Class B"
    }
}

class demoC extends demoB{
   
    demoFunc(){
        return "this is from Class C"
    }
}
const objA = new demoA();
console.log(objA.demoFunc())
const objB = new demoB();
console.log(objB.demoFunc())
const objC = new demoC();
console.log(objC.demoFunc())