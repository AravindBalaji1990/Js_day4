//overloading -> we do not specify the data type while setting the parameters
//parameter will be generic

// function data(a,b){
//     return a*b;
// }

// function data(a,b,c){
//     return a+b+c;
// }


// console.log(data(1,1))
// console.log(data(1,2,3))

console.log("------------------------")
//alternative way to help in overloading
function data(a,b,c){
    if(c=== undefined){
        return a+b;
    }else{
        return a+b+c
    }
}
console.log(data(1,1))
console.log(data(1,2,3))