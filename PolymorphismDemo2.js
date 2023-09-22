//Parent and chiel have smae method names
//the object of child class invokes both classes method.
class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      console.log("B is invoked");  
    }  
  }  
  
var a=[new A(), new B()]  
a.forEach(function(msg)  
{  
msg.display();  
});  