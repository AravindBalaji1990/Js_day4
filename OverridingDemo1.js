function sample(name){
    if(arguments.length === 0){
        return "hello anonymous";
    }else{
        return "hello - " +name;
    }
}

console.log(sample())
console.log(sample("sample name"))