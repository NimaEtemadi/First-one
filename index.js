// types of Errors

function fun1(n) {
  fun1(n + 1);
}

try {
  console.log("Start");
  //   x;                           //ReferenceError
  // let x = 120:                        //SyntaxError
  //  let array = new Array(-2);        //RangeError
  //let x = document.getElementById();   //TypeError
  //console.log(fun1(1));               //InternalError

  console.log("End");
} catch (err) {
  console.log(err);
}

console.log("Elvin");
