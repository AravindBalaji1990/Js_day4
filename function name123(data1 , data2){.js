function name123(data1 , data2){
    this.data1 = data1;
    this._data2 = data2;

    this._func1 = function(){
        return" this is from constructor function"
    }

}
const obj = new name123("sample","sample")
console.log(obj._func1())