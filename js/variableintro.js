function test () {
  var a = "3";
  var b = "8";

  var holder = "0";

  holder = a; 
  a = b;
  b = holder;
  
console.log("a is " + a);
console.log("b is " + b);

}

test();